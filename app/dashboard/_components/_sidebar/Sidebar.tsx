import { LuCookie, LuStore, LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <nav className="bg-orange-200 w-1/12 h-[90vh] flex flex-col items-center justify-center gap-15">
            <NavItem icon={<LuStore className="text-4xl" />} path="/dashboard" />
            <NavItem icon={<LuTruck className="text-4xl" />} path="/dashboard/providers" />
            <NavItem icon={<LuCookie className="text-4xl" />} path="/dashboard/products" />
            <NavItem icon={<LuUser className="text-4xl" />} path="/dashboard/managers" />
            <NavItem icon={<LuUsers className="text-4xl" />} path="/dashboard/employees" />
        </nav>
    );
};