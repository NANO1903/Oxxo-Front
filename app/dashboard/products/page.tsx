import { API_URL } from "@/constants";
import { Product } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FilteredCards from "./_components/FilteredCards";

const ProductsPage = async () => {
    const header = await authHeaders();
    if (!header) return null;

    const products: Product[] = await (await fetch(`${API_URL}/products/`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:products`]
        }
    })).json();

    return (
        <div>
            <FilteredCards products={products} />
        </div>
    );
};

export default ProductsPage;