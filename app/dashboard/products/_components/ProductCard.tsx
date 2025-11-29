"use client";

import { Product } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
    const pathName = usePathname();
    const styles = pathName == `/dashboard/products/${product.productId}` ? "bg-amber-50 border-orange-300 text-zinc-600 border-2 scale-110" : "hover:bg-amber-50 hover:border-orange-300 hover:scale-110 hover:border-2";

    return (
        <Card className={`w-full ${styles}`}>
            <CardHeader>
                <p className="w-full"> <b>{product.productName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Proveedor: <Link href={`/dashboard/providers/${product.provider.providerId}`} className="underline"><b>{product.provider.providerName}</b></Link></p>
                <p className="w-full"> Precio: <b>{product.price}</b></p>
            </CardBody>
        </Card>
    );
}