import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";

export default async function DeleteLocationButton({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;

    return (
        <form action={deleteLocation}>
            <Button type="submit" className="bg-red-600 text-white" name="deleteValue" value={store.toString()}>
                <LuTrash2 size="20" />
            </Button>
        </form>
    );
}