"use client";

import { Employee, Location } from "@/entitites";
import EmployeePhotoCard from "./EmployeePhotoCard";
import EmployeeCard from "./EmployeeCard";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@heroui/react";

export default function ListEmployees({ employees, locations }: { employees: Employee[], locations: Location[] }) {
    const [filter, setFilter] = useState<string>("");
    useEffect(() => {
        console.log(filter);
        
    }, [filter])

    return (
        <>
            <Select variant="underlined" color="secondary" onChange={(e) => setFilter(e.target.value)} label="Selecciona Tienda">
                {locations.map((location) => {
                    return (
                        <SelectItem key={location.locationId}>
                            {location.locationName}
                        </SelectItem>
                    )
                })}
            </Select>
            {
                employees.filter((employee: Employee) => {
                    if (filter === "") return employee;
                    return String(employee.location?.locationId) === filter
                }).map((employee: Employee) => {
                    if (employee.employeePhoto)
                        return <EmployeePhotoCard employee={employee} key={employee.employeeId} />
                    else
                        return <EmployeeCard employee={employee} key={employee.employeeId} />
                })
            }
        </>
    )
}