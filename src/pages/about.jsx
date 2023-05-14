import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
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
                I have a storied experience which <strong>began in music</strong>, drifted into biology, advanced to research, merged with data science, and
                eventually landed on software engineering. I began writing code at 24 years old as part of my PhD and I have been loving it ever since.
              </p>
              <p>
                I started my long joureny of self disovery beating on my dad's guitar case with wooden spoons.
                In my early days, my dream was to be a studio drummer for the likes of Steely Dan. Most of you probably
                have no idea who that is. Kudos if you do. I wasn't too bad a drummer - I was even awarded a partial scholarship
                to the prestigious Berklee College of Music. It wasn't meant to be, though - and it would be my first in a long
                string of failures.
              </p>
              <p>
                And so I moved on to <strong>Biology</strong>.
              </p>
              <p>
                My University years were spent diving deeply into the inner workings of life. I studied the hard sciences - biology,
                chemistry, physics, and a dabble in a bit of research. This was to support an attempt at a career in Dentistry - a
                goal for which I can't honestly say I any fundamental reason for choosing. I just always liked my dentist visits. This world was not
                for me though, and I failed to gain admission to any dental schools. And so transpired my second great failure.
              </p>
              <p>
                And so I moved on to a <strong>PhD in Developmental Genetics</strong>.
              </p>
              <p>
                As fate would have it - my university death throws (as it were) lead me in an unexpected direction. Through a series of very fortunate
                events, I met who would become my PhD adviser. And so I embarked upon a 6 year love affair with research in developmental genetics. By the
                end, I was thoroughlyl dissatisfied with the propspects offered by academia, and so I left. I succeeded, in part by happenchance, to
                earn a PhD... but failed to continue down the road of academic research or find any other segue that directly leveraged my PhD experience.
                Thus was concluded my third great failure.
              </p>
              <p>
                And so I moved on to <strong>Artificial Intelligence</strong>.
              </p>
              <p>
                I then pivoted. It was through a mixture of fortuitous timing, experience during my PhD involving
                research, analytical research, programming, and statistical modeling, and what people tend to tell me is a
                very likeable personality, that I was able to land my first job a generally well thought of company called Zendesk.
                There I learned about the tech industry, developed large multilingual language models, and helped to invented
                new artifically intelligent systems - one of which for I now hold a co-authored patent. But by then I'd peered into the future
                and realized the fleeting nature of the field of data science. I failed to see, and thus failed to realize a future in Data Science.
                And so ended my fourth great failure.
              </p>
              <p>
                And so I moved on to <strong>Software Engineering</strong>
              </p>
              <p>
                And here I am now - writing this to you - with all of the experiences and failures that have led me to what is probably
                the most fitting career for me. A career where I can, have, and continue to leverage all of my experiences to solve complex and
                challenging problems.
              </p>
              <p>I have been many things:</p>
              <ul>
                <li>Musician</li>
                <li>Biologist</li>
                <li>Researcher</li>
                <li>Data Scientist / AI Researcher / Inventor</li>
                <li>Engineer</li>
              </ul>
              <p>
                All of these experiences, and failures, make me who I am today. Open-minded but experienced. Curiuos but cautious.
                Adventurous but wise. Critical but friendly. Intelligent but humble.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:paulegradie@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                paulegradie@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
