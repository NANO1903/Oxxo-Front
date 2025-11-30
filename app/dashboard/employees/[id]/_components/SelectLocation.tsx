"use client";

import { Select, SelectItem } from "@heroui/react";
import { Location } from "@/entitites";

export default function SelectLocation({ locations, defaultStore }: { locations: Location[], defaultStore?: number }) {
    const defaultKeys = defaultStore !== undefined ? [String(defaultStore)] : [];

    return (
        <Select isRequired label="Tienda" name="location" defaultSelectedKeys={defaultKeys}>
            {
                locations.map((location: Location) =>
                (
                    <SelectItem key={String(location.locationId)}>
                        {location.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}