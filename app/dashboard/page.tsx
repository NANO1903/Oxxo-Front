import EmployeesLocation from "./@locations/_components/EmployeesLocation";


export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ store?: string }> }) {
    const params = await searchParams;
    return (
        <>
            <div className="h-full w-4/12 bg-orange-50">
                <div className="h-[90vh] overflow-hidden overflow-y-auto">
                    {
                        params.store ? (
                            <EmployeesLocation store={params?.store} />
                        ) : <p className="w-full text-2xl px-2 text-center mt-10">Selecciona una tienda para ver a los empleados</p>
                    }
                </div>
            </div>
        </>
    );
}