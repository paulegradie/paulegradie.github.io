import styles from "@/styles/header.module.css";
import { Container } from "@mantine/core";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { forwardRef } from "react";
import { PrivateAuthenticatedHeader } from "./PrivateAuthenticatedHeader";

const fakeSession: Session = {
    user: {
        image: "abc",
        email: "paul.g@gmail.com",
        name: "Paul The Destroyer",
    },
    expires: null!,
};

export type PrivatePageHeaderProps = {};

// rendering, and avoids any flash incorrect content on initial page load.
export const PrivatePageHeader = forwardRef<HTMLDivElement, PrivatePageHeaderProps>(() => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <header>
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            <div
                className={`nojs-show  ${styles.signedInStatus} ${!session && loading ? styles.loading : styles.loaded
                    }`}
            >
                <Container fluid>
                    {session ? (
                        <PrivateAuthenticatedHeader session={fakeSession} />
                    ) : (<div />
                        // <UnAuthenticatedHeader />
                    )}
                </Container>
            </div>
        </header>
    );
});

PrivatePageHeader.displayName = "PrivatePageHeader";
