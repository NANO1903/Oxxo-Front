import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "../_components/ProviderCard";
import { Product, Provider } from "@/entitites";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import { Divider } from "@heroui/react";

export default async function ProviderPage({ params }: { params: { id: string } }) {
    const header = await authHeaders();
    if (!header) return null;

    const { id: providerId } = (await params) as { id: string };
    if (!providerId) return null;

    const provider: Provider = await (await fetch(`${API_URL}/providers/${providerId}`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: ["dashboard:providers"]
        }
    })).json();

    return (
        <div className="w-full flex flex-row h-[90vh] pt-10 items-center">
            <div className="w-5/12 flex flex-col items-center">
                <ProviderCard provider={provider} />
            </div>
            <div className="h-[75vh] w-1 bg-orange-300 mr-10" />
            <div className="w-6/12 flex flex-wrap gap-10 content-start">
                {provider.products.map((product: Product) =>
                    <Link key={product.productId} href={{ pathname: `/dashboard/products/${product.productId}` }} className="hover:scale-110 transition-all">
                        <ProductCard key={product.productId} product={product} />
                    </Link>
                )}
            </div>
        </div>
    );
}