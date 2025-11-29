"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProvider(providerId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }
    let provider: any = {};
    for (const key of formData.keys()) {
        provider[key] = formData.get(key);
    }

    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "PATCH",
        body: JSON.stringify(provider),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    if ((await response).status === 200) {
        revalidateTag("dashboard:providers", "max");
        revalidateTag(`dashboard:providers:${providerId}`, "max");
        redirect(`/dashboard/providers/${providerId}`);
    }
}