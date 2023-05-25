import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/paul-forest.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export default function Mentoring() {
    return (
        <>
            <Head>
                <title>Mentoring - Paul Gradie</title>
                <meta
                    name="description"
                    content="I’m Paul Gradie. I live in Melbourne, and I can help you succeed"
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                            I’m Paul Gradie.
                        </h1>
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                            I am a teacher, tutor, and mentor
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">

                            <p>
                                From time to time, I have the pleasure of meeting individuals seeking valuable guidance and support in their personal journeys. Drawing upon my extensive array of experiences and educational background, I have become a sought-after resource for those seeking personal development and progress.
                            </p>
                            <p>
                                Tailoring my approach to suit the unique circumstances of each person, I am pleased to offer my assistance to advice seekers, students in need of mentoring, and colleagues seeking a trusted confidant to explore their ideas and aspirations.
                            </p>
                            <p>
                                If you are in search of such support, reach out to me on LinkedIn. Together, we can embark on a transformative journey.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="https://github.com/paulegradie" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/" icon={LinkedInIcon} className="mt-4">
                                Connect on LinkedIn
                            </SocialLink>
                            {/* <SocialLink
                                href="mailto:paulegradie@gmail.com"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                paulegradie@gmail.com
                            </SocialLink> */}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
