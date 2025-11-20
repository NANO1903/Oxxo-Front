import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-orange-300 w-full h-[10vh] flex flex-row items-center px-10">
            <div className="w-[10vw] flex flex-col items-center">
                <Image src="/Oxxo_Logo.svg" alt="Oxxo Logo" width={100} height={0} draggable={false} />
            </div>
        </div>
    );
};