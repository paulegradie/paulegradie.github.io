import React from "react";
import { PublicPageHeader } from "../header/PublicPageHeader";
import { BaseLayout } from "./BaseLayout";

export default function PublicPageLayout({ pageName, children }: { pageName: string; children: React.ReactNode }) {
    return (
        <BaseLayout pageName={pageName} renderHeader={(ref) => <PublicPageHeader ref={ref} />}>
            {children}
        </BaseLayout>
    );
}
