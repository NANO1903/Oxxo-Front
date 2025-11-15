"use client";
import { URL } from "@/constants";
import { Location } from "@/entitites";
import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SelectLocation({ locations, store }: { location: Location[], store: string | string[] | undefined }) {
    const router = useRouter();
    return (
        <Select placeholder="Selecciona una tienda" label="Tienda" classNames={{
            mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all",
        }}
            selectedKeys={store ? store : "0"}
            onChange={((e) => {
                if (e.target.value === "0" || e.target.value === "") {
                    router.push(`${URL}/dashboard`);
                }
                else {
                    router.push(`/dashboard?store=${e.target.value}`);
                }
            })}
        >
            {locations.map((location: Location) => {
                return <SelectItem key={location.locationId} value={location.locationId}>{location.locationName}</SelectItem>
            })}
        </Select>
    );
}

//Location Card