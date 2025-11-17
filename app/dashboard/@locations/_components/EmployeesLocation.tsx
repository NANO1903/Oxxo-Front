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
        next:{
            tags:["dashbaord:locations:employees"]
        }
    });
    const data: Employee[] = await response.json();
    if (!data) return null;

    return data.map((employee: Employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
        return (
            <Card key={employee.employeeId} className="mx-10 first:mt-2 last:mb-2 my-10">
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