import { Provider } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ProviderCard({ provider }: { provider: Provider }) {
    const productQuantity = provider.products ? provider.products.length : 0;

    return (
        <Card>
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