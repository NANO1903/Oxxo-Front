import { updateManager } from "@/actions/managers/update";
import { Location, Manager } from "@/entitites";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    if (!manager || manager == undefined) return null;
    const header = await authHeaders();
    let responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });

    const updateManagerWithId = updateManager.bind(null, manager.managerId);
    const stores: Location[] = await responseStores.json();
    return (
        <form action={updateManagerWithId} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Manager</h1>
            <Input isRequired defaultValue={manager.managerFullName} label="Nombre" placeholder="Robert Robertson" name="managerFullName" />
            <Input isRequired defaultValue={manager.managerEmail} label="Correo" placeholder="correo@example.com" name="managerEmail" />
            <Input isRequired defaultValue={manager.managerSalary.toString()} label="Salario" placeholder="25120" name="managerSalary" />
            <Input isRequired defaultValue={manager.managerPhoneNumber} label="Número de Teléfono" placeholder="5248945652" name="managerPhoneNumber" />
            <SelectStore stores={stores} defaultStore={manager.location?.locationId} />
            <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
        </form>
    );
}