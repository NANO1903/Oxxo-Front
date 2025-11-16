"use client";
import { URL } from "@/constants";
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
        <Select placeholder="Selecciona una tienda" label="Tienda" classNames={{
            mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all",
        }}
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={(keys) => {
                const key = Array.from(keys)[0] as string | undefined;

                if (!key || key === "0") {
                    router.replace("/dashboard");
                } else {
                    //router.replace(`/dashboard?store=${encodeURIComponent(key)}`);
                    router.replace(`/dashboard`);
                }
            }}
        >
            {locations.map((loc) => (
                <SelectItem key={String(loc.locationId)} value={loc.locationId}>
                    {loc.locationName}
                </SelectItem>
            ))}
        </Select>
    );
}

//Location Card 