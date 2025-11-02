"use client";
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let authData: any = {};
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        const { data } = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        });
        console.log(data);
        return;
    }

    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md min-w-sm" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white font-bold">Inicio de Sesión</p>
            <div className="flex flex-col gap-2 my-4">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button type="submit" className="self-center bg-orange-50 text-blue-400 font-extrabold">
                    Iniciar Sesión
                </Button>
                <p className="text-white">¿No tienes una cuenta? <Link href="/signup" className="text-blue-700 underline">Regístrate</Link></p>
            </div>
        </form>
    );
};