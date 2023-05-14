import { ChildProps } from "@/types/sharedTypes";
import classNames from "classnames";
import { useRouter } from "next/router";

export type HeaderLinkProps = ChildProps & {
    className?: string;
    href: string;
    target?: string;
};

export const HeaderLink = ({ children, href, target = "", className = "" }: HeaderLinkProps) => {
    const router = useRouter();
    const isActive = href === router.pathname || href === router.pathname.replace(/\/$/, "");

    return <a href={href}>{children}</a>;
};
