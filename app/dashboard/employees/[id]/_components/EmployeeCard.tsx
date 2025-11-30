import { GoogleMapsAPI } from "@/api_keys";
import { Employee } from "@/entitites";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function EmployeeCard({ employee }: { employee: Employee }) {

    return (
        <Card className="min-w-72 min-h-50 w-fit h-fit text-black bg-amber-50 border-orange-300 border-2">
            <CardHeader className="bg-black opacity-70">
                <p className="w-full font-bold text-xl text-white drop-shadow-sm"> {employee.employeeName + " " + employee.employeeLastName}</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Correo: <b>{employee.employeeEmail}</b></p>
                <p className="w-full"> Número de Teléfono: <b>{employee.employeePhoneNumber}</b></p>
                <div>
                    {employee.location ? (
                        <>
                            <p className="w-full"> Tienda: <Link href={`/dashboard?store=${employee.location.locationId}`} className="underline"><b>{employee.location.locationName}</b></Link></p>
                            <iframe
                                width="300"
                                height="200"
                                className="mt-10 border-3 border-red-600 rounded-xl"
                                src={`https://www.google.com/maps/embed/v1/place?key=${GoogleMapsAPI}&q=${employee.location.locationLatLng[0]},${employee.location.locationLatLng[1]}`}>
                            </iframe>
                        </>
                    ) : (<p>No tiene tienda asignada</p>)}
                </div>
            </CardBody>
        </Card>
    );
}