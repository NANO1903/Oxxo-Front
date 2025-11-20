import { API_URL } from "@/constants";
import { Location } from "@/entitites";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
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
        <Card className="mx-20 py-2 text-center bg-amber-50 border-2 border-orange-300">
            <CardHeader>
                <p className="w-full text-3xl"> <b>{data.locationName}</b> </p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row grow-0 gap-10 justify-center items-center text-lg">
                <div>
                    <p className="w-full"> Manager: <Link href={`/dashboard/managers/${data.manager?.managerId}`}><b className="underline">{data.manager?.managerFullName}</b></Link> </p>
                    <p className="w-full"> Dirección: <b>{data.locationAddress}</b> </p>
                </div>
                <div>
                    <>
                        <iframe
                            width="300"
                            height="200"
                            className="border-3 border-red-600 rounded-xl"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD4yCeK6Mct7kTAL2WPRy3h6WTI3nob5u4&q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}>
                        </iframe>
                    </>
                </div>
            </CardBody>
            <CardFooter className="flex flex-col items-center">
                <div className="mt-5 flex flex-row grow-0 gap-10 items-center">
                    <DeleteLocationButton store={store} />
                    <UdpdateLocation>
                        <FormUpdateLocation store={store} />
                    </UdpdateLocation>
                </div>
            </CardFooter>
        </Card>
    );
}