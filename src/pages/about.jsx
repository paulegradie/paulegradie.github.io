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
                    content="I’m Paul Gradie. I live in Melbourne, where I build things."
                />
            </Head>
            <div className="relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-accent-creative/5 to-accent-cool/10 rounded-3xl blur-3xl transform rotate-1"></div>
                <Container className="relative mt-24 sm:mt-32">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                        <div className="lg:pl-20">
                            <div className="max-w-xs px-2.5 lg:max-w-none">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-accent-creative to-accent-cool rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                    <Image
                                        src={portraitImage}
                                        alt=""
                                        sizes="(min-width: 1024px) 32rem, 20rem"
                                        className="relative aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 ring-2 ring-teal-400/30 hover:ring-teal-400/50 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    <div className="lg:pl-20 mt-6 flex gap-6 justify-center md:justify-start">
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
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-zinc-100 to-teal-300 bg-clip-text text-transparent sm:text-4xl">
                            Hi - I’m Paul Gradie.
                        </h1>
                        <h2 className="text-2xl font-bold tracking-tight text-teal-400 dark:text-teal-300 sm:text-2xl mt-2">
                            So about me.
                        </h2>
                        <div className="mt-6 space-y-7 text-base text-zinc-300 dark:text-zinc-400 text-justify leading-relaxed">
                            <p>
                                I am a software engineer working mostly in the .NET ecosystem. I help companies build and reshape software to solve business problems using iterative delivery practices. My approach is to blend being principled with being pragmatic while slowly evolving towards a longer term vision. I find that this approach not only provides better transparency to stakeholder, it also yields a better sense of progress to the team and ensure we always deliver concrete value.
                            </p>
                            <p>
                                This approach is informed by experience - both from in the realm of software as well as previous disciplines that I’ve worked in.
                            </p>
                            <p>
                                Before I transitioned into software engineering, I was a biologist. I have a PhD in developmental genetics from the University of Melbourne, where I employed a mixture of wet lab and computational skills to answer research questions about the develop of reproductive systems. I became deeply interested and familiar with the process of evolution during this phase of my career - which has had a substantial impact on how I understand not only change, but the risks associated with it.
                            </p>
                            <p>

                                I’m also interested in understanding how to effectively build strong, functional teams. Teams are just people, and people are complex. People come with infinite variation in their experience, skills, personalities, needs, triggers, motivations, and much more. I enjoy learning about people, understanding their strengths and weaknesses, and how to combine them to achieve outstanding results. I also understand that people have their limits, so I also think about how to achieve this without causing burnout.
                            </p>
                            <p>
                                I’m not selective about the people I work with, but I do have high expectations for those whom I do. Why? I invest a lot into being the best that I can be. That doesn’t mean I expect people to do more than is required (like working out of hours), but it does mean that I expect people to be engaged.
                            </p>
                            <p>

                                I hope this gives you a little bit of insight into the type of person I am. There is far more to my story, so if you’re interested to know more - don’t hesitate to get in touch.
                            </p>
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
