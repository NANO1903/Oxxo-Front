import { Provider } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ProviderCard({ provider, pathName }: { provider: Provider, pathName: string }) {
    const productQuantity = provider.products ? provider.products.length : 0;
    const styles = pathName == `/dashboard/providers/${provider.providerId}` ? "bg-amber-50 border-orange-300 text-zinc-600 border-2" : "hover:bg-amber-50 hover:border-orange-300 hover:scale-110 hover:border-2" ;

    return (
        <Card className={`max-w-70 min-w-70 ${styles}`}>
            <CardHeader>
                <b className="text-xl">{provider.providerName}</b>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo Electrónico: </p>
                <b> {provider.providerEmail} </b>
                <p>Número de Teléfono: </p><b> {provider.providerPhoneNumber} </b>
                {productQuantity !== 0 ?
                    <p>Tiene <b>{productQuantity}</b> producto{productQuantity > 1 ? "s" : ""} </p> : <p>No tiene productos asociados</p>
                }
            </CardBody>
        </Card>
    )
}