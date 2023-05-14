import { forwardRef, useEffect, useState } from "react";
import { NavItems } from "./NavItems";

export type PublicPageHeaderProps = {};

export const PublicPageHeader = forwardRef<HTMLDivElement, PublicPageHeaderProps>((props, ref) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setOpen(!open);
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => setIsScrolled(window.scrollY >= 40);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            ref={ref}
            style={{ borderBottom: "1px solid gray" }}
            className="flex flex-row justify-around grow-1 w-full z-50 fixed top-0 bg-primary dark:bg-primary-dark"
        >
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>
            <div />
            <NavItems />
            <div />
        </header>
    );
});

PublicPageHeader.displayName = "PublicPageHeader";
