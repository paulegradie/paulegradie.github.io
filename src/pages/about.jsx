import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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

export default function About() {
    return (
        <>
            <Head>
                <title>About - Paul Gradie</title>
                <meta
                    name="description"
                    content="I’m Paul Gradie. I live in Melbourne, where I build things."
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
                            Here is the short version of my story.
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                It all began with my deep passion for music, which began with tapping on my dad&apos;s guitar case with wooden spoons. I dreamed of becoming a studio drummer, envisioning myself playing alongside legendary bands like Steely Dan. Music was my world, and I even earned a audition-based scholarship to the prestigious Berklee College of Music. While my dream of becoming a drummer didn&apos;t materialize, those early musical pursuits were the first of many valuable experiences. And the first of many transitions that would ultimately give me a unique perspective on life, change, and knowledge itself.
                            </p>
                            <p>
                                Following my musical aspirations, I transitioned into the field of biology. During my university years, I delved into the intricate workings of life itself, studying biology, chemistry, physics, and even conducting some research. At the time, I had aspirations of becoming a dentist.. although I can&apos;t quite pinpoint the exact reason for choosing that career path. It was more of an intuitive inclination, fueled by my enjoyment of dental visits. However, fate had other plans, and I faced rejection from dental schools - which became probably the most pivotable failure of my life.
                            </p>
                            <p>
                                As they say - what one door closes, another opens.
                            </p>
                            <p>
                                As chance would have it, I crossed paths with a remarkable mentor who became my PhD advisor and opened a new door setting me on a captivating journey in the realm of research on developmental genetics. Six years of passionate exploration and discovery followed, but by the end, I realized that the academic realm and traditional research paths didn&apos;t align with my aspirations. While completing my PhD was a significant accomplishment, it felt like another setback. I could not find a clear path to leverage my doctoral experience in a way that would ultimately leave me feeling satisfied with both the current state of my life, as well as my long term trajectory.
                            </p>
                            <p>
                                It was during this time that I found myself drawn towards the world of Artificial Intelligence. Through a fortunate combination of timing, the skills I honed during my PhD — such as research, analytics, programming, and statistical modeling - I secured my first job at a reputable company called Zendesk. There, I immersed myself in the tech industry, working on the development of large multilingual language models and contributing to the invention of new artificially intelligent systems. The culmination of this work resulted in a co-authored patent and a large amount of industry software development experience. However, as I looked ahead, I began to recognize the transient nature of the data science field, leading me to conclude that it wasn&apos;t the long-term stable future I sought.
                            </p>
                            <p>
                                That realization prompted my pivot towards software engineering, which brings me to where I am today — writing this to you. This career path feels like the most natural fit for me, as it allows me to draw upon all my previous experiences and failures to tackle complex and challenging problems. I&apos;ve embraced the diverse roles I&apos;ve held throughout my life — musician, biologist, researcher, data scientist, AI researcher, inventor — and they have collectively shaped me into the person I am now.

                            </p>
                            <p>
                                I approach life with an open mind and a wealth of experience. I&apos;m curious yet cautious, adventurous yet wise, critical yet friendly, and intelligent yet humble. These qualities, born from my journey, guide me as I navigate this fulfilling career.
                            </p>
                            <p>I have been many things:</p>
                            <ul className="list-none">
                                <li className="">Musician</li>
                                <li className="ml-3">Biologist</li>
                                <li className="ml-6">Researcher</li>
                                <li className="ml-9">Data Scientist / AI Researcher / Inventor</li>
                                <li className="ml-12">Software Engineer</li>
                            </ul>
                            <p>
                                All of these experiences, and failures, make me who I am today. Open-minded but experienced. Curious but cautious.
                                Adventurous but wise. Critical but friendly. Intelligent but humble.
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
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
