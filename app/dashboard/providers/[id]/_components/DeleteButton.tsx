import deleteProvider from "@/actions/providers/delete";
import { Button } from "@heroui/react";

export default function DeleteProviderButton({ providerId }: { providerId: string }) {
    const deleteProviderById = deleteProvider.bind(null, providerId);

    return (
        <form action={deleteProviderById} className="flex flex-col items-center">
            <Button className="w-full bg-red-600 text-white font-medium" type="submit">Estoy seguro</Button>
        </form>
    );
}