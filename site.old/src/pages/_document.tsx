import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/swiper@9/swiper-bundle.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
            <script>AOS.init()</script>
        </Html>
    );
}
