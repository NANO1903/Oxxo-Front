import { API_URL } from "@/constants";
import { Employee } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const header = await authHeaders();
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashbaord:locations:employees"]
        }
    });
    const data: Employee[] = await response.json();
    if (!data) return null;

    if (data.length == 0) return (
        <div>
            <p className="w-full text-2xl px-2 text-center mt-10">No hay empleados en esta tienda</p>
        </div>
    );
    return data.map((employee: Employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
        return (
            <Card key={employee.employeeId} className="mx-10 last:mb-2 mb-10 border-2 border-amber-100 text-zinc-600 hover:scale-110 hover:text-black hover:bg-amber-50 hover:border-orange-300">
                <CardHeader>
                    <p className="w-full">Nombre: <b>{fullName}</b></p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{employee.employeePhoneNumber}</b></p>
                </CardBody>
            </Card>
        );
    });
}