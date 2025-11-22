"use client";
import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        let authData: any = {};
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(authData),
                credentials: 'include',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                router.push(`/dashboard`);
            }
        } catch (e) {
        }
        setSubmitting(false);
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
                <Button type="submit" disabled={submitting} className="self-center bg-orange-50 text-blue-400 font-extrabold">
                    {submitting ? <Spinner size="md" /> : "Iniciar Sesión"}
                </Button>
                <p className="text-white">¿No tienes una cuenta? <Link href="/signup" className="text-blue-700 underline">Regístrate</Link></p>
            </div>
        </form>
    );
};