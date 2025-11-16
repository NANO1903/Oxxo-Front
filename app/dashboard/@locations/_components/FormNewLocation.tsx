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
    const { data } = await axios.get(`${API_URL}/manager`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <form action={createLocation}>
            <Input label="Nombre" name="locationName" />
            <Input label="Direción" name="locationAddress" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Longitud" name="locationLng" />
            <SelectManager managers={data} />
            <Button type="submit">Subir</Button>
        </form>
    );
}