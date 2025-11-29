import deleteProduct from "@/actions/products/delete";
import { Button } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteProductButton({ productId }: { productId: string }) {
    const deleteProductById = deleteProduct.bind(null, productId);

    return (
        <form action={deleteProductById} className="flex flex-col items-center">
            <Button className="w-full bg-red-600 text-white font-medium" type="submit"><LuTrash2 size="20" /></Button>
        </form>
    );
}