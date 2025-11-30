"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createManager(formData: FormData) {
    const header = await authHeaders();
    if (!header) return;
    let manager: any = {};
    for (const key of formData.keys()) {
        manager[key] = formData.get(key);
    }

    manager.managerSalary = +manager.managerSalary;
    if (manager.location) manager.location = +manager.location;
    else delete manager.location;

    const response = await fetch(`${API_URL}/manager`, {
        method: "POST",
        body: JSON.stringify(manager),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    console.log(await response.json());


    if ((await response).status == 201) {
        revalidateTag("dashboard:managers", "max");
        redirect("/dashboard/managers");
    }
}