import { API_URL } from "@/constants";
import { Manager } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ManagerPage({
    params,
}: {
    params: {
        id: string
    };
}) {
    const managerId = (await params).id;
    console.log("id: " + managerId);

    const header = await authHeaders();
    const response = await fetch(`${API_URL}/manager/${managerId}`, {
        headers: {
            ...header
        },
        next: {
            tags: [`dashboard:managers:${managerId}`, "dashboard:managers"]
        }
    });

    const manager: Manager = await response.json();
    if (!manager) return null;

    return (
        <Card key={manager.managerId} className="mx-20 py-2 bg-orange-50">
            <CardHeader>
                <p className="w-full"> Nombre: <b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                <p className="w-full">Tienda: <b>{manager.location ? manager.location.locationName : "El manager no está asignado"}</b></p>
            </CardBody>
        </Card>
    );
}