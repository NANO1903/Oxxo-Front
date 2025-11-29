"use client";
import { Location } from "@/entitites";
import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

type Props = {
    locations: Location[];
    store?: string;
};

export default function SelectLocation({ locations, store }: Props) {
    const router = useRouter();

    const selected = store ? new Set([String(store)]) : new Set(["0"]);

    return (
        <Select variant="underlined" color="secondary" placeholder="Selecciona una tienda" label="Tienda"
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={(keys) => {
                const key = Array.from(keys)[0] as string | undefined;

                if (!key || key === "0") {
                    router.replace("/dashboard");
                    router.refresh();
                } else {
                    router.replace(`/dashboard?store=${encodeURIComponent(key)}`);
                }
            }}
        >
            {locations.map((loc) => (
                <SelectItem key={String(loc.locationId)}>
                    {loc.locationName}
                </SelectItem>
            ))}
        </Select>
    );
}