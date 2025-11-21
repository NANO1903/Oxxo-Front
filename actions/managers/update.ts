"user server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export async function updateManager({ formData, managerId }: { formData: FormData, managerId: string }) {
    const header = await authHeaders();
    if (!header) return;
    let manager: any = {};
    for (const key of formData.keys()) {
        const value = formData.get(key);
        manager[key] = formData.get(key);
    }
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    if ((await response).status == 200) {
        revalidateTag("dashboard:managers", "max");
        revalidateTag(`dashboard:managers${managerId}`, "max");
    }
}