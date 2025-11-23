import { Provider } from "@/entitites";
import { Button, Input } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import createProvider from "@/actions/providers/create";

export default async function FormNewProvider() {
    // const header = await authHeaders();
    // let response = await fetch(`${API_URL}/providers/`, {
    //     headers: {
    //         ...header
    //     },
    //     next: {
    //         tags: ["dashboard:providers"]
    //     }
    // });

    // const dataProvider: Provider = await response.json();
    return (
        <form action={createProvider} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Manager</h1>
            <Input isRequired label="Nombre" placeholder="Bimbo" name="providerName" />
            <Input isRequired label="Correo" placeholder="correo@dominio.com" name="providerEmail" />
            <Input isRequired label="Número de Teléfono" placeholder="4571236448" name="providerPhoneNumber" />
            <Button type="submit" color="primary" className="text-lg font-bold">Crear</Button>
        </form>
    );
}