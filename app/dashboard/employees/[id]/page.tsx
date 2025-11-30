import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import { API_URL } from "@/constants";
import { Employee } from "@/entitites";

export default async function EmployeesPage({ params }: { params: { id: string } }) {
    const { id: employeeId } = (await params) as { id: string };
    if (!employeeId) return null;

    const header = await authHeaders();
    if (!header) return null;

    const employee: Employee = await (await fetch(`${API_URL}/employees/${employeeId}`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:employee:${employeeId}`]
        }
    })).json();

    return (
        <>
            <EmployeeCard employee={employee} />
        </>
    );
}