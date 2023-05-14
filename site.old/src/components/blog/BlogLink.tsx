import cls from "./BlogLink.module.css";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface BlogLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    children: React.ReactNode;
}

export const BlogLink: React.FC<BlogLinkProps> = ({ href, children, ...props }) => {
    return (
        <a className={cls.link} href={href} target="_blank" rel="noreferrer" {...props}>
            {children}
        </a>
    );
};
