"use client";

import { Select, SelectItem } from "@heroui/react";
import { Location } from "@/entitites";

export default function SelectStore({ stores, defaultStore }: { stores: Location[], defaultStore?: number }) {
    const disabledStores = stores.filter(
        (store) => store.manager !== undefined && store.locationId !== defaultStore
    ).map(
        (store) => String(store.locationId)
    );

    const defaultKeys = defaultStore !== undefined ? [String(defaultStore)] : [];

    return (
        <Select label="Tienda" name="location" disabledKeys={disabledStores} defaultSelectedKeys={defaultKeys}>
            {
                stores.map((store: Location) =>
                (
                    <SelectItem key={String(store.locationId)}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}