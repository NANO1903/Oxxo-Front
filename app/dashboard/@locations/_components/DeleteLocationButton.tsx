import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";

export default async function DeleteLocationButton({ searchParams }: { searchParams: Promise<{ store?: string }> }) {
    const params = await searchParams;
    if (!params.store) return null;

    return (
        <form action={deleteLocation}>
            <Button type="submit" color="danger" name="deleteValue" value={params.store}>
                Borrar Tienda
            </Button>
        </form>
    );
}