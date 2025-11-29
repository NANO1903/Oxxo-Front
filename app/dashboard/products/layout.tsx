import { API_URL } from "@/constants";
import { Product, Provider } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";

const ProductsLayout = async ({ children }: { children: ReactNode }) => {
    const header = await authHeaders();
    if (!header) return null;

    const products: Product[] = await (await fetch(`${API_URL}/products`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:products`]
        }
    })).json();

    const providers: Provider[] = await (await fetch(`${API_URL}/providers`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:providers`]
        }
    })).json();

    return (
        <div className="w-11/12 h-[90vh] flex flex-row">
            <div className="w-3/12 h-[90vh]">
                <FilteredCards products={products} providers={providers} />
            </div>
            <div className="w-9/12 h-[90vh]">
                {children}
            </div>
        </div>
    );
};

export default ProductsLayout;