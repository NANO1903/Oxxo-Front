"use client";

import { Select, SelectItem } from "@heroui/react";
import { Manager } from "@/entitites";

export default function SelectManager({ managers }: { managers: Manager[] }) {
    return (
        <Select label="Selecciona un Manager" name="manager">
            {
                managers.map((manager: Manager) => {
                    return (
                        <SelectItem key={manager.managerId}>
                            {manager.managerFullName}
                        </SelectItem>
                    )
                })
            }
        </Select>
    )
}