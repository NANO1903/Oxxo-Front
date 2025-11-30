"use client";

import { Button, Input } from "@heroui/react";
import { useState } from "react";
import { generate } from "generate-password";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/_icons/icons";
import { Manager } from "@/entitites";
import UpdateManager from "@/actions/users/updateManager";

export default function FormUpdateUserManager({ manager }: { manager: Manager }) {
    if (!manager) return null;
    const updateUserById = UpdateManager.bind(null, manager);
    const [password, setPassword] = useState<string>();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);


    return (
        <form action={updateUserById} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center font-extrabold">Editar Usuario</h1>
            <Input isRequired defaultValue={manager.user?.userEmail} label="Correo del Usuario" name="userEmail" type="email" />
            <Input isRequired value={password} label="Contraseña del Usuario" name="userPassword" type={isVisible ? "text" : "password"} endContent={
                <button
                    aria-label="toggle password visibility"
                    className="focus:outline-solid outline-transparent"
                    type="button"
                    onClick={toggleVisibility}
                >
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                </button>
            } />
            <Button color="danger" onPress={() => {
                setPassword(generate({
                    length: 10,
                }))
            }} className="text-lg font-bold">Generar Contraseña</Button>
            <Button type="submit" color="primary" className="text-lg font-bold">Actualizar</Button>
        </form>
    );
}