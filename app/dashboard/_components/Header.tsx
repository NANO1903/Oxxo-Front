import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-orange-200 w-full h-[20vh] flex flex-row items-center">
            <div className="w-[10vw] flex flex-col items-center">
                <Image src="Oxxo_Logo.svg" alt="Oxxo Logo" width={100} height={0} draggable={false} />
            </div>
        </div>
    );
};