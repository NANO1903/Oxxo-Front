import { API_URL } from "@/constants";
import { Product } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
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
        <div className="w-full h-[90vh]">
            <div className="w-3/12 h-[90vh]">
                <FilteredCards products={products} />
            </div>
        </div>
    );
};

export default ProductsPage;