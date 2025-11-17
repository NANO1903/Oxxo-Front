import { API_URL } from "@/constants";
import { Location } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";
import DeleteLocationButton from "./DeleteLocationButton";
import UdpdateLocation from "./UpdateLocation";
import FormUpdateLocation from "./FormUpdateLocation";

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
                <div className="flex flex-col items-center">
                    <div className="mt-5 flex flex-row grow-0 gap-10 items-center">
                        <DeleteLocationButton store={store} />
                        <UdpdateLocation>
                            <FormUpdateLocation store={store} />
                        </UdpdateLocation>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}