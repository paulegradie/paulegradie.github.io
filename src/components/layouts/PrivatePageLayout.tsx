import React from "react";
import { PrivatePageHeader } from "../header/PrivatePageHeader";
import { BaseLayout } from "./BaseLayout";

export default function PrivtePageLayout({ pageName, children }: { pageName: string; children: React.ReactNode }) {
    return (
        <BaseLayout pageName={pageName} renderHeader={(ref) => <PrivatePageHeader ref={ref} />}>
            {children}
        </BaseLayout>
    );
}
