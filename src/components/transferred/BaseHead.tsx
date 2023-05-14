export interface BaseHeadProps {
    title: string;
    description: string;
    image?: string;
}

export const BaseHead = ({ title, description, image }: BaseHeadProps) => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </>
    );
};
