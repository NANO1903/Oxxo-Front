import ManagerCards from "./_components/ManagerCard";

export default function ManagersLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
                <ManagerCards />
            </div>
            <div className="w-7/12">
                {children}
            </div>
        </>
    );
}