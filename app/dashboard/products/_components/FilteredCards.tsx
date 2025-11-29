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
        <>
            <Input onChange={(e) => setFiltered(e.target.value)} label="Nombre del producto" />
            {productsList.map((product) => {
                return (
                    <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                        <ProductCard product={product} />
                    </Link>
                );
            })}
        </>
    )
}