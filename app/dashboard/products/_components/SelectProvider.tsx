"use client";

import { Provider } from "@/entitites";
import { Select, SelectItem } from "@heroui/react";

export default function SelectProvider({ providers, defaultProvider }: { providers: Provider[], defaultProvider: string }) {
    return (
        <Select isRequired label="Selecciona un Proveedor" name="provider" defaultSelectedKeys={[defaultProvider]}>
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