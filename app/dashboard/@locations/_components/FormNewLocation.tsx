import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entitites";

export default async function FormNewLocation({ searchParams }: { searchParams: Promise<{ store?: string }> }) {
    const params = await searchParams;
    if (params.store) return null;
    const header = await authHeaders();
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

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Oxxo ..." name="locationName" />
            <Input label="Direción" placeholder="Av 5 de Feb." name="locationAddress" />
            <Input label="Latitud" placeholder="-25.8252" name="locationLat" />
            <Input label="Longitud" placeholder="45.9874" name="locationLng" />
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    );
}