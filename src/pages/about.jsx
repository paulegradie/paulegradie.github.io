import Head from 'next/head'
import Image from 'next/image'
import { SocialLink } from '@/components/SocialLink'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Paul Gradie</title>
        <meta
          name="description"
          content="I am Paul Gradie. I live in Melbourne, where I build software and teams that perform at a high level."
        />
      </Head>
      <Container className="mt-20 sm:mt-28">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-14">
          <div className="reveal-up lg:order-2">
            <div className="glass-panel-strong overflow-hidden rounded-3xl p-3">
              <Image
                src={portraitImage}
                alt="Portrait of Paul Gradie"
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top"
                priority
              />
            </div>
            <div className="mt-5 flex items-center gap-1">
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

          <div className="reveal-up reveal-delay-1 lg:order-1">
            <span className="section-chip">About Paul</span>
            <h1 className="font-display mt-5 text-5xl leading-tight text-ink sm:text-6xl">
              Scientist mindset, product engineer execution.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I work mostly in the .NET ecosystem and help companies improve critical software
                through iterative delivery, architecture refinement, and pragmatic technical
                leadership.
              </p>
              <p>
                Before software, I worked in biology and completed a PhD in developmental genetics
                at the University of Melbourne. I was published in Nature: Comms Bio, and that research
                background sharpened how I reason about uncertainty, evidence, and long-term system
                change.
              </p>
              <p>
                My AI background is deeper than application-layer integration. I have worked on
                foundational model development, evaluation, and the engineering required to take
                model-driven systems into production.
              </p>
              <p>
                I care deeply about team performance. Strong teams are built through trust, clear
                expectations, and a culture where people can challenge each other without creating
                burnout.
              </p>
              <p>
                I am collaborative, but I keep a high bar. I invest heavily in improving my own
                craft and value the same seriousness from the teams I work with.
              </p>
              <p>
                If that sounds like your environment, reach out. I am always open to meaningful
                conversations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
