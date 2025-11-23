"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function createProvider(formData: FormData) {
    const header = await authHeaders();
    if (!header) return;

    let provider: any = {};
    for (const key of formData.keys()) {
        const value = formData.get(key);
        provider[key] = value;
    }

    const response = await fetch(`${API_URL}/providers`, {
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    if ((await response).status == 201) {
        revalidateTag("dashboard:providers", "max");
        redirect(`/dashboard/providers`);
    }
}