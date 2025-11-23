import { Provider } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ProviderCard({ provider }: { provider: Provider }) {

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
                {provider.products ?
                    <p>Tiene <b>{provider?.products.length}</b> productos </p> : <p>"No tiene productos asociados"</p>
                }
            </CardBody>
        </Card>
    )
}