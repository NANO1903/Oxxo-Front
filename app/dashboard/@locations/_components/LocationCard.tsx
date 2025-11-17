import { API_URL } from "@/constants";
import { Location, Manager } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const header = await authHeaders();
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    });
    const data: Location = await response.json();

    return (
        <Card>
            <CardHeader>
                <p className="w-full text-2xl"> <b>{data.locationName}</b> </p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Manager: <Link href={`/dashboard/managers`}><b>{data.manager?.managerFullName}</b></Link> </p>
                <p className="w-full"> Dirección: <b>{data.locationAddress}</b> </p>
            </CardBody>
        </Card>
    );
}