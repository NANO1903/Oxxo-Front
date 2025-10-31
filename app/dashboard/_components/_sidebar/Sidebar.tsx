import { LuCookie, LuStore, LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <div className="bg-orange-200 w-[10vw] h-[90vh] flex flex-col items-center py-5">
            <NavItem icon={<LuStore className="text-4xl" />} path="/dashboard" />
            <LuTruck className="text-4xl" />
            <LuCookie className="text-4xl" />
            <LuUser className="text-4xl" />
            <LuUsers className="text-4xl" />
        </div>
    );
};