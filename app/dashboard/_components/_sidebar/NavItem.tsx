import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
    icon: ReactNode;
    path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
    return (
        <Link href={path}>
            {icon}
        </Link>
    );
};

export default NavItem;