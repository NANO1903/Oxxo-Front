import { Employee } from "@/entitites";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="w-full text-black bg-amber-50 border-orange-300 border-2">
            <CardHeader>
                <p className="w-full"> <b>{employee.employeeName + " " + employee.employeeLastName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Correo: <b>{employee.employeeEmail}</b></p>
                <p className="w-full"> Número de Teléfono: <b>{employee.employeePhoneNumber}</b></p>
                <p className="w-full"> Tienda: <Link href={`/dashboard?store=${employee.location?.locationId}`} className="underline"><b>{employee.location?.locationName}</b></Link></p>
            </CardBody>
            <CardFooter className="flex flex-row justify-center">
            </CardFooter>
        </Card>
    );
}