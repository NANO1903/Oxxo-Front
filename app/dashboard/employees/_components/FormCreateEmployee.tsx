import { Location } from "@/entitites";
import { Button, Input } from "@heroui/react";
import SelectLocation from "../[id]/_components/SelectLocation";
import createEmployee from "@/actions/employees/create";

export default async function FormCreateEmployee({ locations }: { locations: Location[] }) {
    if (!locations || locations == undefined) return null;

    return (
        <form action={createEmployee} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Agregar Empleado</h1>
            <Input isRequired label="Nombre del Empleado" name="employeeName" />
            <Input isRequired label="Apellido del Empleado" name="employeeLastName" />
            <Input isRequired label="Número de Teléfono" name="employeePhoneNumber" />
            <Input isRequired label="Correo" name="employeeEmail" />
            <SelectLocation locations={locations} />
            <Input label="Foto" name="employeePhoto" type="file" />
            <Button type="submit" color="primary" className="text-lg font-bold">Crear</Button>
        </form>
    );
}