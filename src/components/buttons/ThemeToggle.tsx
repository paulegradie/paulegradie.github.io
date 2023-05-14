import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs/index.js";
import { Switch } from "@mantine/core";
import { useEffect, useState } from "react";

const DarkTheme = "dark";
const LightTheme = "light";

export const ThemeToggleButton = () => {
    const [isMounted, setMounted] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            if (
                localStorage.theme === DarkTheme ||
                (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add(DarkTheme);
                return true;
            } else {
                document.documentElement.classList.remove(DarkTheme);
                return false;
            }
        }
        return false;
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    return isMounted ? (
        <Switch
            size="xl"
            checked={on}
            onChange={(event) => {
                if (event.currentTarget.checked) {
                    document.documentElement.classList.add(DarkTheme);
                    localStorage.setItem("theme", DarkTheme);
                    setOn(true);
                } else {
                    document.documentElement.classList.remove(DarkTheme);
                    localStorage.setItem("theme", LightTheme);
                    setOn(false);
                }
            }}
            onLabel={<BsFillMoonFill />}
            offLabel={<BsFillSunFill />}
        />
    ) : (
        <div />
    );
};
