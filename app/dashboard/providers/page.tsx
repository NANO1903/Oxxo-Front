import { API_URL } from "@/constants";
import { Provider } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuPlus } from "react-icons/lu";

const ProviderPage = async () => {
    const header = await authHeaders();
    if (!header) return;
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            'content-type': 'application/json',
            ...header
        },
        next: {
            tags: ["dashboard:providers"]
        }
    });

    const providers: Provider[] = await response.json();

    return (
        <div className="w-full h-[90vh] flex grow-0 flex-col px-10 pt-10 items-end">
            <Button className="w-fit" color="primary">
                <LuPlus size={20} />
            </Button>
            <div className="w-full flex flex-wrap pt-20 grow-0 gap-15">
                {providers.map((provider: Provider) => (
                    <Link className="hover:scale-110 transition-transform" href={{ pathname: `/dashboard/providers/${provider.providerId}` }}>
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProviderPage;