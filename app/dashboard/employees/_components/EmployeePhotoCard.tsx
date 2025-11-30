import { Button, CardFooter, Image } from "@heroui/react";
import { Employee } from "@/entitites";
import { Card, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function EmployeePhotoCard({ employee }: { employee: Employee }) {

    return (
        <Card isFooterBlurred>
            <CardHeader className="absolute top-0 bg-black opacity-70 z-10">
                <p className="w-full font-bold text-xl text-white drop-shadow-sm"> {employee.employeeName + " " + employee.employeeLastName}</p>
            </CardHeader>
            <Divider />
            <Image src={employee.employeePhoto} className="z-0" classNames={{ img: "size-72" }} />
            <CardFooter className="absolute bottom-0 h-15">
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                    <Button variant="ghost">Actualizar Datos</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}