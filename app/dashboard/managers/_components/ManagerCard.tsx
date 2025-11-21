import { API_URL } from "@/constants";
import { Manager } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider, Link } from "@heroui/react";

export default async function ManagerCards() {
    const header = await authHeaders();
    const response = await fetch(`${API_URL}/manager`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    const data: Manager[] = await response.json();
    if (!data) return null;

    if (data.length == 0) return (
        <div>
            <p className="w-full text-2xl px-2 text-center mt-10">No hay managers registrados</p>
        </div>
    );
    return data.map((manager: Manager) => {
        return (
            <Card key={manager.managerId} className="mx-10 last:mb-5 mb-10 border-2 border-amber-100 text-zinc-600 hover:scale-110 hover:text-black hover:bg-amber-50 hover:border-orange-300" as={Link}
                href={`/dashboard/managers/${manager.managerId}`}>
                    <CardHeader>
                        <p className="w-full"> Nombre: <b>{manager.managerFullName}</b></p>
                    </CardHeader>
                <Divider />
                <CardBody>
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                </CardBody>
            </Card >
        );
    });
}