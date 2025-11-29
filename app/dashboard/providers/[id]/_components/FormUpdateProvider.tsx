import { updateProvider } from "@/actions/providers/update";
import { Provider } from "@/entitites";
import { Button, Input } from "@heroui/react";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const updateProviderWithId = updateProvider.bind(null, provider.providerId);

    return (
        <form action={updateProviderWithId} className="max-w-7/12 bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Proveedor</h1>
            <Input isRequired defaultValue={provider.providerName} label="Nombre" name="providerName" />
            <Input isRequired defaultValue={provider.providerEmail} label="Correo" name="providerEmail" />
            <Input isRequired defaultValue={provider.providerPhoneNumber} label="Número de Teléfono" name="providerPhoneNumber" />
            <div className="flex flex-row justify-evenly gap-5">
                <div>
                    <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
                </div>
                <div>
                    <DeleteProvider>
                        <h1 className="text-2xl text-center font-medium">¿Estás seguro de eliminar al proveedor <b className="text-neutral-500">{provider.providerName}</b>?</h1>
                        <DeleteProviderButton providerId={provider.providerId} />
                    </DeleteProvider>
                </div>
            </div>
        </form>
    );
}