import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'
import octopusLogo from '@/images/logos/octopus-logo.svg'
import zekdeskLogo from '@/images/logos/zendesk-logo.svg'
import unimelbLogo from '@/images/logos/unimelb-logo.svg'
import uconnLogo from '@/images/logos/uconn-logo.svg'
import putnamLogo from '@/images/logos/putnam-logo.svg'
import schoolIcon from '@/images/logos/school-icon.svg'

import image1 from '@/images/photos/about/1-image.jpg'
import image2 from '@/images/photos/about/2-image.jpg'
import image3 from '@/images/photos/about/3-image.jpg'
import portraitImage from '@/images/portrait.jpg'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles, getGalleryPhotos } from '@/lib/getAllArticles'
import ImageGallery from "react-image-gallery";

// const CustomImageGallery = ({ images }) => {
//   return (
//     // <div className="w-full h-1/2">
//     //   <div className="flex mb-12 w-full">
//         <ImageGallery items={images} />
//     //   </div>
//     // </div>
//   );
// };


function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Article({ article }) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
            </Card.Eyebrow>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

function Newsletter() {
    return (
        <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-6 flex">
                <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
                <Button type="submit" className="ml-4 flex-none">
                    Join
                </Button>
            </div>
        </form>
    )
}

function Resume() {
    let resume = [
        {
            company: 'Octopus Deploy',
            title: 'Software Engineer',
            logo: octopusLogo,
            start: '2020',
            end: {
                label: "Present",
                dateTime: new Date().getFullYear()
            },
        },
        {
            company: 'Zendesk',
            title: 'Data Science Engineer (AI team)',
            logo: zekdeskLogo,
            start: '2017',
            end: '2020'
        },
    ]

    let education = [
        {
            degree: "PhD",
            school: "University of Melbourne",
            start: '2014',
            end: '2017',
            logo: unimelbLogo
        },
        {
            degree: "Masters",
            school: "University of Connecticut",
            start: '2010',
            end: '2013',
            logo: uconnLogo
        },
        {
            degree: "Bachelor of Science",
            school: "University of Connecticut",
            start: '2014',
            end: '2017',
            logo: uconnLogo
        },
        {
            degree: "High School Diploma",
            school: "Putnam High School ",
            start: '2014',
            end: '2017',
            logo: putnamLogo
        },

    ]



    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-14 w-14 bg-none rounded-full p-1 dark:bg-white" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                                    }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <div className='mt-6 mb-6 border-b-2' />
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Image src={schoolIcon} alt="" className="h-7 w-7 dark:bg-white bg-none rounded-md" unoptimized />
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {education.map((edu, eduIndex) => (
                    <li key={eduIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={edu.logo} alt="" className="h-14 w-14 bg-none rounded-full p-1 dark:bg-white" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">School</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {edu.school}
                            </dd>
                            <dt className="sr-only">Degree</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {edu.degree}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${edu.start.label ?? edu.start} until ${edu.end.label ?? edu.end
                                    }`}
                            >
                                <time dateTime={edu.start.dateTime ?? edu.start}>
                                    {edu.start.label ?? edu.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={edu.end.dateTime ?? edu.end}>
                                    {edu.end.label ?? edu.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing" target={'_blank'} variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}

function Photos() {
    let rotations = ['rotate-1', '-rotate-1', 'rotate-1', 'rotate-1', '-rotate-1']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home({ articles, images }) {
    return (
        <>
            <Head>
                <title>
                    Paul Gradie - Software designer, founder, and amateur astronaut
                </title>
                <meta
                    name="description"
                    content="I’m Paul, a software designer and entrepreneur based in Melbourne, Aus."
                />
            </Head>
            <Container className="mt-9">
                <div className="flex flex-row items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            Paul Gradie, PhD
                        </h1>
                        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            Software Engineer, Entrepreneur, and Inventor based in Melbourne, Aus.
                        </p>
                        <div className="mt-6 flex gap-6">
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
                    {/* <div className="lg:pl-20 w-1/2"> */}
                        <div className="max-w-xs px-2.5 lg:max-w-none lg:pl-20 w-1/2">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 720px) 24rem, 15rem"
                                className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        {/* </div> */}
                    </div>
                </div>
            </Container>
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/* <Newsletter /> */}
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    )
}


export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    const galleryPhotoList = getGalleryPhotos();
    return {
        props: {
            images: galleryPhotoList,
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({ component, ...meta }) => meta),
        },
    }
}
