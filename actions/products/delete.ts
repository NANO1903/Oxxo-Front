"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProduct(productId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }

    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            ...header,
        },
    });

    if (response.status === 200) {
        revalidateTag("dashboard:products", "max");
        redirect("/dashboard/products");
    }
}
