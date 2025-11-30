"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function UpdateEmployee(employee: Employee, formData: FormData) {
    const header = await authHeaders();
    if (!header) return;


    let data: any = {};
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined;
    data.userPassword = formData.get("userPassword") ? formData.get("userPassword") : undefined;

    const user = await employee.user;
    if (user) {
        const response = await fetch(`${API_URL}/auth/${user.userId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                ...header
            }
        });

        if ((await response).status === 201) {
            redirect(`/dashboard/employees/${employee.employeeId}`);
        }
    }
}