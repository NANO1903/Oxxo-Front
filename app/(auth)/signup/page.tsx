import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-md min-w-sm">
            <p className="text-2xl my-4 text-white font-bold">Registro</p>
            <div className="flex flex-col gap-2 my-4">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button className="self-center bg-orange-50 text-blue-400 font-extrabold">
                    Registrarse
                </Button>
                <p className="text-white">¿Ya tienes una cuenta? <Link href="/login" className="text-blue-700 underline">Inicia sesión</Link></p>
            </div>
        </div>
    );
}