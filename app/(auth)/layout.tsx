import Image from "next/image";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-orange-200 w-full h-full min-h-screen grid">
            <div className="place-content-center place-self-center text-center">
                <div className="flex flex-col items-center m-10 relative">
                    <Image src="/Oxxo_Logo.svg" alt="Logo de Oxxo" width={200} height={0} />
                </div>
                {children}
            </div>
        </div>
    )

}