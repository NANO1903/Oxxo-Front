import { API_URL, TOKEN_NAME, URL } from "@/constants";
import { Location, Manager } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
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