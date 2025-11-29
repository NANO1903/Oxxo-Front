import { Product } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="w-full text-black bg-amber-50 border-orange-300 border-2">
            <CardHeader>
                <p className="w-full"> <b>{product.productName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Proveedor: <Link href={`/dashboard/providers/${product.provider.providerId}`} className="font-bold underline">{product.provider.providerName}</Link></p>
                <p className="w-full"> Precio: <b>{product.price}</b></p>
                <p className="w-full"> Cantidad de Sellos: <b>{product.countSeal}</b></p>
            </CardBody>
        </Card>
    );
}