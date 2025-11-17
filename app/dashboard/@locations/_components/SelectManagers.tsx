"use client";

import { Select, SelectItem } from "@heroui/react";
import { Location, Manager } from "@/entitites";

interface SelectManagerProps {
    managers: Manager[],
    locations: Location[],
    defaultManager?: string,
}

export default function SelectManager({ managers, locations, defaultManager = undefined }: SelectManagerProps) {
    const disabledKeys = locations.map((location: Location) => {
        if (location.manager?.managerId !== defaultManager) return location.manager?.managerId;
    }).filter((managerId) => managerId !== undefined);
    return (
        <Select label="Manager" name="manager" disabledKeys={disabledKeys} defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []}>
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