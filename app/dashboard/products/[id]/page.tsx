import { API_URL } from "@/constants";
import { Product, Provider } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
import FormUpdateProduct from "./_components/FormUpdateProducts";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id: productId } = (await params) as { id: string };
    if (!productId) return null;

    const header = await authHeaders();
    if (!header) return null;

    const product: Product = await (await fetch(`${API_URL}/products/${productId}`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:products:${productId}`]
        }
    })).json();

    const providers: Provider[] = await (await fetch(`${API_URL}/providers`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:products`]
        }
    })).json();

    return (
        <div className="w-full h-full flex flex-row gap-15 items-center justify-center">
            <div className="w-3/12">
                <ProductCard product={product} />
            </div>
            <div className="w-4/12">
                <FormUpdateProduct product={product} providers={providers} />
            </div>
        </div>
    );
}