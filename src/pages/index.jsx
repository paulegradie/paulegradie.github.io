import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/getAllArticles'
import { Resume } from '@/components/Resume'
import { Article } from '@/components/Article'
import { SocialLink } from '@/components/SocialLink'
import { useRouter } from 'next/router'

import portraitImage from '@/images/portrait.jpg'

export default function Home({ articles }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    Paul Gradie - software engineer based in Melbourne, Aus.
                </title>
                <meta
                    name="description"
                    content="I`m Paul, a software engineer based in Melbourne, Aus."
                />
            </Head>
            <Container className="mt-9 w-full">
                <div className="flex flex-col justify-center items-end md:flex-row md:justify-between md:flex-1 text-center">
                    <div className="max-w-2xl text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 dark:text-zinc-100 sm:text-5xl">
                            Paul Gradie, PhD
                        </h1>
                        <p className="mt-6 text-base text-zinc-200 dark:text-zinc-400">
                            Software Engineer, Entrepreneur, and Inventor based in Melbourne, Aus.
                        </p>
                        <div className="mt-6 flex gap-6 justify-center md:justify-start">
                            <SocialLink
                                href="https://github.com/paulegradie"
                                aria-label="Follow on GitHub"
                                icon={GitHubIcon}
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
                                aria-label="Follow on LinkedIn"
                                icon={LinkedInIcon}
                            />
                        </div>
                    </div>
                    <div />
                    <div className="md:max-w-xs mt-3 md:mt-0 lg:max-w-none w-full md:w-1/4">
                        <Image
                            onClick={() => router.push("/about")}
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 720px) 24rem, 15rem"
                            className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 cursor-pointer"
                        />
                    </div>
                </div>
                <Divider />
            </Container>
            <Container className="mt-12 md:mt-14">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-200 dark:text-zinc-100 sm:text-3xl">
                            Thoughts
                        </h1>
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    )
}


function Divider() {
    return (<div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        {/* <span className="flex-shrink mx-4 text-gray-400"></span>
        <div className="flex-grow border-t border-gray-400"></div> */}
    </div>)
}



export async function getStaticProps() {
    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({ component, ...meta }) => meta),
        },
    }
}
