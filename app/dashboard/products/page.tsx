import createProduct from "@/actions/products/create";
import { Button, Input } from "@heroui/react";
import SelectProvider from "./_components/SelectProvider";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Provider } from "@/entitites";

const ProductsPage = async () => {
    const header = await authHeaders();
    if (!header) return null;

    const providers: Provider[] = await (await fetch(`${API_URL}/providers`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: [`dashboard:providers`]
        }
    })).json();

    return (
        <div className="w-full bg-orange-200 flex flex-row justify-center">
            <div className="h-[90vh] w-full max-w-[400px] flex flex-col justify-center">
                <form action={createProduct} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
                    <h1 className="text-3xl text-white text-center font-extrabold">Agregar Producto</h1>
                    <Input isRequired label="Nombre del Producto" name="productName" />
                    <Input isRequired label="Precio" name="price" startContent={
                        <div className="flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    } type="number" />
                    <Input isRequired label="Cantidad de Sellos" name="countSeal" />
                    <SelectProvider providers={providers} />
                    <Button type="submit" color="primary" className="text-lg font-bold">Crear</Button>
                </form>
            </div>
        </div>
    );
};

export default ProductsPage;