import { Provider } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ProviderCard({ provider }: { provider: Provider }) {
    const productQuantity = provider.products ? provider.products.length : 0;

    return (
        <Card className="max-w-70 min-w-70 hover:bg-amber-50 hover:border-2 hover:border-orange-300 hover:scale-110">
            <CardHeader>
                <b>{provider.providerName}</b>
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