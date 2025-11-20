import { Manager } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full text-3xl"><b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row grow-0 gap-10 justify-center items-center text-lg">
                <div className="flex flex-col">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                    <Link href={{ pathname: `/dashboard`, query: { store: manager.location?.locationId } }}><p className={manager.location ? "w-full" : "hidden"}>Tienda: <b className="underline">{manager?.location?.locationName}</b></p></Link>
                </div>
                <div>
                    {manager.location ? (
                        <>
                            <iframe
                                width="300"
                                height="200"
                                className="border-3 border-orange-500 rounded-md"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD4yCeK6Mct7kTAL2WPRy3h6WTI3nob5u4&q=${manager.location.locationLatLng[0]},${manager.location.locationLatLng[1]}`}>
                            </iframe>
                        </>
                    ) : (<p>No tiene tienda asignada</p>)}
                </div>
            </CardBody>
        </Card>
    );
}