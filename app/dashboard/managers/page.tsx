import { LuPlus } from "react-icons/lu";
import GenericModal from "../_components/GenericModal";
import FormCreateManager from "./_components/FormCreateManager";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function ManagersPage() {
    const header = await authHeaders();
    if (!header) return null;

    const stores = await (await fetch(`${API_URL}/locations`, {
        headers: {
            ...header
        }
    })).json();

    return (
        <div className="mb-5">
            <GenericModal icon={<LuPlus size="20" />}>
                <FormCreateManager stores={stores} />
            </GenericModal>
        </div>
    );
}