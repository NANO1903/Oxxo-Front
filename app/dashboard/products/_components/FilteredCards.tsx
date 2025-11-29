"use client";

import { Product } from "@/entitites";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input } from "@heroui/react";

export default function FilteredCards({ products }: { products: Product[] }) {
    const [filtered, setFiltered] = useState<string>("");
    const [productsList, setProductsList] = useState<Product[]>(products);
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.productName.toLowerCase().includes(filtered.toLowerCase()))
                return true;
            else
                return false;
        })

        setProductsList(filteredProducts);
    }, [filtered]);

    return (
        <div className="h-full flex flex-col border-r-orange-400 border-r-2">
            <Input onChange={(e) => setFiltered(e.target.value)} label="Nombre del producto" variant="underlined" color="secondary" className="w-full pt-10 pb-2 px-10" />
            <div className="w-full overflow-y-auto flex flex-col pt-10 px-12 gap-8 last:pb-8">
                {productsList.map((product) => {
                    return (
                        <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                            <ProductCard product={product} />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}