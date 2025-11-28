import { Product } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="max-w-50 min-w-50 border-amber-100 text-zinc-600 hover:scale-110 hover:text-black hover:bg-amber-50 hover:border-orange-300 border-2">
            <CardHeader>
                <p className="w-full"> <b>{product.productName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Precio: <b>{product.price}</b></p>
            </CardBody>
        </Card>
    );
}