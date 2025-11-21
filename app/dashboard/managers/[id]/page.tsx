import { API_URL } from "@/constants";
import { Manager } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";
import CountManagers from "./@count/default";

export default async function ManagerPage({
    params,
}: {
    params: {
        id: string
    };
}) {
    const managerId = (await params).id;
    const header = await authHeaders();
    const response = await fetch(`${API_URL}/manager/${managerId}`, {
        headers: {
            ...header
        },
        next: {
            tags: [`dashboard:managers:${managerId}`, "dashboard:managers"]
        }
    });

    const manager: Manager = await response.json();
    if (!manager) return null;

    return (
        <>
            <div>
                <ManagerCard manager={manager} />
            </div>
            <div>
                <CountManagers />
            </div>
        </>
    );
}