"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function createEmployee(formData: FormData) {
    const header = await authHeaders();
    if (!header) return;

    const file = formData.get("employeePhoto") as File;
    const fd = new FormData();
    for (const [key, value] of formData.entries()) {
        if (key.includes("$ACTION")) continue;
        if (file.name === "undefined" && key.includes("employeePhoto")) continue;
        fd.append(key, value as any);
    }

    const response = await fetch(`${API_URL}/employees`, {
        method: "POST",
        body: fd,
        headers: {
            ...header
        }
    });

    console.log(await response.json());
    
    if ((await response).status == 201) {
        revalidateTag("dashboard:employees", "max");
        redirect(`/dashboard/employees/`);
    }
}