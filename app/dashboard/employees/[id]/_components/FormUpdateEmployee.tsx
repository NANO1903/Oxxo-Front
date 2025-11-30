import { updateEmployee } from "@/actions/employees/update";
import { Employee, Location } from "@/entitites";
import { Button, Input } from "@heroui/react";
import SelectLocation from "./SelectLocation";

export default async function FormUpdateEmployee({ employee, locations }: { employee: Employee, locations: Location[] }) {
    if (!employee || employee == undefined) return null;
    const { employeeId } = await employee;

    const updateProductById = updateEmployee.bind(null, employeeId);

    return (
        <form action={updateProductById} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Empleado</h1>
            <Input isRequired defaultValue={employee.employeeName} label="Nombre del Empleado" name="employeeName" />
            <Input isRequired defaultValue={employee.employeeLastName} label="Apellido del Empleado" name="employeeLastName" />
            <Input isRequired defaultValue={employee.employeePhoneNumber} label="Número de Teléfono" name="employeePhoneNumber" />
            <Input isRequired defaultValue={employee.employeeEmail} label="Correo" name="employeeEmail" />
            <SelectLocation locations={locations} defaultStore={employee.location?.locationId} />
            <Input defaultValue={employee.employeePhoto} label="Foto" name="employeePhoto" type="file" />
            <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
        </form>
    );
}