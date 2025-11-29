"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProvider(providerId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }

    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            ...header,
        },
    });

    if (response.status === 200) {
        revalidateTag("dashboard:providers", "max");
        redirect("/dashboard/providers");
    }
}
