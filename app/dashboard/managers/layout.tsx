import ManagerCards from "./_components/ManagerCard";

export default function ManagersLayout({
    children,
    count,
}: Readonly<{
    children: React.ReactNode;
    count?: React.ReactNode;
}>) {
    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90vh overflow-y-auto">
                <div>
                    <p className="w-full text-4xl px-2 text-center my-5 font-bold">Managers</p>
                </div>
                <ManagerCards />
            </div>
            <div className="w-7/12 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center gap-10">
                    {children}
                </div>
                <div>
                    {count}
                </div>
            </div>
        </>
    );
}