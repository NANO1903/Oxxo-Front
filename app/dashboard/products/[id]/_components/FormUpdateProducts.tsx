import { updateProduct } from "@/actions/products/update";
import { Product, Provider } from "@/entitites";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";

export default async function FormUpdateProduct({ product, providers }: { product: Product, providers: Provider[] }) {
    if (!product || product == undefined) return null;
    const { productId, provider: { providerId } } = await product;

    const updateProductById = updateProduct.bind(null, productId);

    return (
        <form action={updateProductById} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Producto</h1>
            <Input isRequired defaultValue={product.productName} label="Nombre del Producto" name="productName" />
            <Input isRequired defaultValue={product.price.toString()} label="Precio" name="price" />
            <Input isRequired defaultValue={product.countSeal.toString()} label="Cantidad de Sellos" name="countSeal" />
            <SelectProvider providers={providers} defaultProvider={providerId} />
            <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
        </form>
    );
}