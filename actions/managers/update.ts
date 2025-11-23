"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateManager(managerId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) {
        console.warn("No auth header, abort delete");
        return;
    }
    let manager: any = {};
    for (const key of formData.keys()) {
        manager[key] = formData.get(key);
    }
    manager['managerSalary'] = +manager['managerSalary'];
    if (manager['managerLocation'] == undefined || !manager['managerLocation']) delete manager?.location;
    else if (manager['managerLocation'] || manager['managerLocation'] !== undefined) manager['managerLocation'] = +manager['managerLocation'];

    const response = await fetch(`${API_URL}/manager/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    if ((await response).status === 200) {
        revalidateTag("dashboard:managers", "max");
        revalidateTag(`dashboard:managers:${managerId}`, "max");
        redirect(`/dashboard/managers/${managerId}`);
    }
}