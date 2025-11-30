"use client";

import { Button, Input } from "@heroui/react";
import { Location } from "@/entitites";
import { createManager } from "@/actions/managers/create";
import SelectStore from "../[id]/_components/SelectStore";

export default function FormCreateManager({ stores }: { stores: Location[] }) {

    return (
        <form action={createManager} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Agregar Manager</h1>
            <Input isRequired name="managerFullName" label="Nombre" />
            <Input isRequired name="managerEmail" label="Correo" />
            <Input isRequired name="managerSalary" label="Salario" />
            <Input isRequired name="managerPhoneNumber" label="Número de Teléfono" />
            <SelectStore stores={stores} />
            <Button type="submit" color="primary" className="text-lg font-bold">Crear</Button>
        </form>
    );
}