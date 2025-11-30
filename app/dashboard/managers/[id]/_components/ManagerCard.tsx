import { GoogleMapsAPI } from "@/api_keys";
import { Manager } from "@/entitites";
import { Card, CardBody, CardFooter, CardHeader, Divider, Form } from "@heroui/react";
import Link from "next/link";
import DeleteManagerButton from "./DeleteManagerButton";
import FormUpdateManager from "./FormUpdateManager";
import UdpdateManager from "./UpdateManager";
import GenericModal from "@/app/dashboard/_components/GenericModal";
import FormUpdateUserManager from "./FormUpdateUserManager";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import FormCreateManagerUser from "./FormCreateManagerUser";

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center bg-amber-50 border-2 border-orange-300 mb-10">
            <CardHeader>
                <p className="w-full text-3xl"><b>{manager.managerFullName}</b></p>
                {
                    !manager.user ?
                        <GenericModal icon={<BsPersonPlusFill size="20" />}>
                            <FormCreateManagerUser managerId={manager.managerId} />
                        </GenericModal>
                        :
                        <GenericModal icon={<FaUserEdit size="20" />}>
                            <FormUpdateUserManager manager={manager} />
                        </GenericModal>
                }
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row grow-0 gap-10 justify-center items-center text-lg">
                <div className="flex flex-col">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                    <p className="w-full">Salario: <b>{manager.managerSalary}</b></p>
                    <Link href={{ pathname: `/dashboard`, query: { store: manager.location?.locationId } }}><p className={manager.location ? "w-full" : "hidden"}>Tienda: <b className="underline">{manager?.location?.locationName}</b></p></Link>
                </div>
                <div>
                    {manager.location ? (
                        <>
                            <iframe
                                width="300"
                                height="200"
                                className="border-3 border-red-600 rounded-xl"
                                src={`https://www.google.com/maps/embed/v1/place?key=${GoogleMapsAPI}&q=${manager.location.locationLatLng[0]},${manager.location.locationLatLng[1]}`}>
                            </iframe>
                        </>
                    ) : (<p>No tiene tienda asignada</p>)}
                </div>
            </CardBody>
            <CardFooter className="flex flex-col items-center">
                <div className="mt-5 flex flex-row grow-0 gap-10 items-center">
                    <DeleteManagerButton managerId={manager.managerId} />
                    <UdpdateManager>
                        <FormUpdateManager manager={manager} />
                    </UdpdateManager>
                </div>
            </CardFooter>
        </Card>
    );
}