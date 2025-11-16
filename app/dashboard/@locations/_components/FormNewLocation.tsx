import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager } from "@/entitites";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManagers";

export default async function FormNewLocation() {
    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/manager`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return (
        <form action={createLocation}>
            <Input label="Nombre" placeholder="Oxxo ..." name="locationName" />
            <Input label="Direción" placeholder="Av 5 de Feb." name="locationAddress" />
            <Input label="Latitud" placeholder="-25.8252" name="locationLat" />
            <Input label="Longitud" placeholder="45.9874" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
            <Button type="submit">Subir</Button>
        </form>
    );
}