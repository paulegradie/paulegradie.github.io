import { Masthead } from "@/components/transferred/Masthead";
import { WideContent } from "@/components/transferred/WideContent";
import PublicPageLayout from "@/components/layouts/PublicPageLayout";

export default function Home() {
    return (
        <PublicPageLayout pageName="Home">
            <WideContent>
                <Masthead />
            </WideContent>
        </PublicPageLayout>
    );
}
