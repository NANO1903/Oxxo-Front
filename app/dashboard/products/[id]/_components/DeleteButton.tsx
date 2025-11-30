import deleteEmployee from "@/actions/employees/delete";
import { Button } from "@heroui/react";

export default function DeleteEmployeeButton({ employeeId }: { employeeId: string }) {
    const deleteEmployeeById = deleteEmployee.bind(null, employeeId);

    return (
        <form action={deleteEmployeeById} className="flex flex-col items-center">
            <Button className="w-full bg-red-600 text-white font-medium" type="submit">Estoy seguro</Button>
        </form>
    );
}