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
          content="I am Paul Gradie, a Melbourne-based research-trained software engineer, platform leader, and product builder who blends scientific reasoning with production discipline."
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
              Research depth, production discipline, product instinct.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I work across .NET, cloud, platform, and product systems, helping teams
                improve critical software through architecture refinement, operational maturity,
                and pragmatic delivery.
              </p>
              <p>
                My career began in biology. I completed a PhD in developmental genetics at the
                University of Melbourne, where I learned to reason carefully about uncertainty,
                evidence, complex systems, and long-term behavior.
              </p>
              <p>
                I moved into software through data science and applied AI at Zendesk, working at
                the boundary between models, product workflows, and production engineering. That
                experience shaped my interest in turning research ideas into reliable systems
                people can actually use.
              </p>
              <p>
                At Octopus Deploy, I worked on developer experience, performance tooling, and
                product delivery for serious engineering teams. Today at Tilt Finance, I lead
                platform-oriented work across modernization, delivery discipline, system reliability,
                and high-leverage architecture.
              </p>
              <p>
                Outside formal roles, I build practical products through Launch11, write about
                AI-native engineering and technical leadership, and use writing as a way to clarify
                complex ideas.
              </p>
              <p>
                Strong teams are built through trust, clear expectations, technical honesty, and
                the ability to disagree productively. If that sounds like your environment, reach out.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}