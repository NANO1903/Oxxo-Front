import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entitites";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({ store }: { store: string | string[] | undefined }) {
    if (!store || store == undefined || typeof (store) == "object") return null;
    const header = await authHeaders();
    const updateWithStoreId = updateLocation.bind(null, store);
    let responseManagers = await fetch(`${API_URL}/manager`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });

    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:locations"]
        }
    });

    const dataManagers: Manager[] = await responseManagers.json();
    const dataLocations: Location[] = await responseLocation.json();
    const foundLocation = dataLocations.find((location) => location.locationId == +store);
    let foundManager = dataManagers.find((manager) => manager.managerId == foundLocation?.manager?.managerId);

    return (
        <form action={updateWithStoreId} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Tienda</h1>
            <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Oxxo ..." name="locationName" />
            <Input required={true} defaultValue={foundLocation?.locationAddress} label="Direción" placeholder="Av 5 de Feb." name="locationAddress" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" placeholder="-25.8252" name="locationLat" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Longitud" placeholder="45.9874" name="locationLng" />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations} />
            <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
        </form>
    );
}