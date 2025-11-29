import ManagerCards from "./_components/ManagerCard";

export default function ManagersLayout({
    children,
    count,
}: Readonly<{
    children: React.ReactNode;
    count?: React.ReactNode;
}>) {
    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-4/12 h-full overflow-y-auto">
                <div>
                    <p className="w-full text-4xl px-2 text-center my-5 font-bold">Managers</p>
                </div>
                <ManagerCards />
            </div>
            <div className="w-8/12 h-full flex flex-col justify-center items-center bg-orange-200">
                <div className="flex flex-col justify-center items-center">
                    {children}
                </div>
                <div>
                    {count}
                </div>
            </div>
        </div>
    );
}