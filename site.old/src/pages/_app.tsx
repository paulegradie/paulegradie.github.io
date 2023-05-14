import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Ukraine from "save-ukraine";
import "prism-themes/themes/prism-shades-of-purple.css";

import "../styles/globals.css";
import { SetState } from "@/types/sharedTypes";

export type AppContext = {
    headerHeight: number;
};
export const AppContext = createContext({
    headerHeight: 0,
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <SessionProvider session={session}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                {/* <div
                    ref={(element) => {
                        if (element) {
                            Ukraine.save({ element });
                        }
                    }}
                /> */}
                <Component {...pageProps} />
            </MantineProvider>
        </SessionProvider>
    );
}
