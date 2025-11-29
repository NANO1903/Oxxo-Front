"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProduct(productId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }
    let product: any = {};
    for (const key of formData.keys()) {
        if (!key.includes("$ACTION")) {
            product[key] = formData.get(key);
        }
    }

    product.price = +product.price;
    product.countSeal = +product.countSeal;

    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    if ((await response).status === 200) {
        revalidateTag("dashboard:products", "max");
        revalidateTag(`dashboard:products:${productId}`, "max");
        redirect(`/dashboard/products/${productId}`);
    }
}