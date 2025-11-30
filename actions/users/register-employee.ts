"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function RegisterEmployee(employeeId: string, formData: FormData) {
    const header = await authHeaders();
    if (!header) return;

    let data: any = {};
    data.userEmail = formData.get("userEmail");
    data.userPassword = formData.get("userPassword");
    data.userRoles = "Employee";

    const response = await fetch(`${API_URL}/auth/register/${employeeId}?role=employee`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
            ...header
        }
    });

    console.log(await response);
    if ((await response).status === 201) {
        redirect(`/dashboard/employees/${employeeId}`);
    }
}