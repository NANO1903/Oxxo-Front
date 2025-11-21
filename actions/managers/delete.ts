"user server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteManager({ formData, managerId }: { formData: FormData, managerId: string }) {
    const header = await authHeaders();
    if (!header) return;
    fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });
    revalidateTag("dashboard:managers", "max");
    redirect(`/dashboard/managers`);
}