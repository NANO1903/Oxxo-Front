import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import { API_URL } from "@/constants";
import { Employee, Location } from "@/entitites";
import { Image } from "@heroui/react";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";

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
            <EmployeeCard employee={employee} />
            {employee.employeePhoto ?
                <div className="border-5 border-black rounded-xl h-fit">
                    <Image src={employee.employeePhoto} isZoomed className="object-cover max-h-60 p-1" classNames={{ img: "size-full", }} />
                </div>
                : ""
            }
            <div className="w-4/12">
                <FormUpdateEmployee employee={employee} locations={locations}/>
            </div>
        </div>
    );
}