import { Employee } from "@/entitites";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function EmployeeCard({ employee }: { employee: Employee }) {

    return (
        <Card className="size-72">
            <CardHeader className="bg-black opacity-70">
                <p className="w-full font-bold text-xl text-white drop-shadow-sm"> {employee.employeeName + " " + employee.employeeLastName}</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Correo: <b>{employee.employeeEmail}</b></p>
                <p className="w-full"> Número de Teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            <CardFooter className="absolute bottom-0 h-15">
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                    <Button variant="ghost">Actualizar Datos</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}