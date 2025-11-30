import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import { API_URL } from "@/constants";
import { Employee, Location } from "@/entitites";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import DeleteEmployee from "./_components/DeleteEmployee";
import DeleteEmployeeButton from "../../products/[id]/_components/DeleteButton";
import CreateUser from "./_components/CreateUser";
import FormCreateUserEmployee from "./_components/FormCreateUserEmployee";
import FormUpdateUserEmployee from "./_components/FormUpdateUserEmployee";

export default async function EmployeePage({ params }: { params: { id: string } }) {
    const { id: employeeId } = (await params) as { id: string };
    if (!employeeId) return null;

    const header = await authHeaders();
    if (!header) return null;

    const employee: Employee = await (await fetch(`${API_URL}/employees/${employeeId}`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:employee:${employeeId}`]
        }
    })).json();

    const locations: Location[] = await (await fetch(`${API_URL}/locations`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:locations:`]
        }
    })).json();

    return (
        <div className="w-full flex flex-wrap grow-0 gap-10 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
                <EmployeeCard employee={employee} />
                <DeleteEmployee>
                    <h1 className="text-2xl text-center font-medium">¿Estás seguro de eliminar al empleado <b className="text-neutral-500">{employee.employeeName + " " + employee.employeeLastName}</b>?</h1>
                    <DeleteEmployeeButton employeeId={employeeId} />
                </DeleteEmployee>
            </div>
            <div className="border-5 border-black rounded-xl h-fit">
                <CreateUser photo={employee.employeePhoto}>
                    {
                        !employee.user ?
                            <FormCreateUserEmployee employeeId={employee.employeeId} />
                            :
                            <FormUpdateUserEmployee employee={employee} />
                    }
                </CreateUser>
            </div>
            <div className="w-4/12">
                <FormUpdateEmployee employee={employee} locations={locations} />
            </div>
        </div>
    );
}