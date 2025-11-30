"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(employeeId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }

    const file = formData.get("employeePhoto") as File;
    let response: Response;
    const fd = new FormData();
    for (const [key, value] of formData.entries()) {
        if (key.includes("$ACTION")) continue;
        if (file.name === "undefined" && key.includes("employeePhoto")) continue;
        fd.append(key, value as any);
    }

    response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        body: fd,
        headers: {
            ...header
        }
    });

    if ((await response).status === 200) {
        revalidateTag("dashboard:employees", "max");
        revalidateTag(`dashboard:employees:${employeeId}`, "max");
        redirect(`/dashboard/employees/${employeeId}`);
    }
}