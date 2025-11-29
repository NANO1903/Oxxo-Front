"use client";

import { Provider } from "@/entitites";
import { Select, SelectItem } from "@heroui/react";

export default function SelectProvider({ providers }: { providers: Provider[] }) {
    return (
        <Select isRequired label="Selecciona un Proveedor" name="provider">
            {providers.map((provider) => {
                return (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                )
            })}
        </Select>
    )
}