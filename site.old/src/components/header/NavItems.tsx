import styles from "@/styles/header.module.css";
import Link from "next/link";
import { ThemeToggleButton } from "../buttons/ThemeToggle";
import { HeaderLink } from "../transferred/HeaderLink";

export const NavItems = () => {
    return (
        <nav className="flex items-center gap-3 text-base">
            <div>
                <Link href="/">
                    <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg">Paul Gradie</h2>
                </Link>
            </div>
            <div className="flex-1" />
            <div className="items-center gap-6 hidden md:flex">
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/blogs">Blogs</HeaderLink>
                <HeaderLink href="/about">About</HeaderLink>
                <HeaderLink href="https://github.com/paulegradie" target="_blank">
                    GitHub
                </HeaderLink>
            </div>
            <div className="flex-1" />
            <ThemeToggleButton />
        </nav>
    );
};
