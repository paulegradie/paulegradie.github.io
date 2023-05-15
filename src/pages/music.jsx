import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { SoundCloudIcon } from '@/components/SocialIcons'

let playlists = [
  {
    year: "2023",
    title: "Around the Sun",
    iframeSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1622034748&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    year: "2022",
    title: "We Done Made Yo Heat",
    iframeSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1344579439&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    year: "2016",
    title: "International Love",
    iframeSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/285687511&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },

]

const soundCloud = "https://soundcloud.com/paulgradie"
function MusicSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}


function Appearance({ title, src: iframeSrc }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href="">
        {title}
      </Card.Title>
      <div className=" w-full font-light text-black hyphens-auto overflow-hidden whitespace-nowrap text-ellipsis">
        <iframe className="font-light text-black hyphens-auto overflow-hidden whitespace-nowrap text-ellipsis" width="100%" height={350} allow="autoplay" src={iframeSrc} />
      </div>
    </Card>
  )
}

function SoundCloudLink() {
  return (
    <li className='flex'>
      <Link
        href={soundCloud}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <SoundCloudIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">Paul Gradie's SoundCloud</span>
      </Link>
    </li>
  )
}

export default function Music() {
  return (
    <>
      <Head>
        <title>Music - Paul Gradie</title>
        <meta
          name="description"
          content="I regularly compose electronic music as a hobby and creative outlet"
        />
      </Head>
      <SimpleLayout
        title="My Music"
        intro="I regularly compose electronic music as a hobby and creative outlet. Every year I release a small number of tunes in order to satisfy a deeply rooted creative desire the simply will not leave me. Here are listed my published collections by year."
      >
        <SoundCloudLink />
        <div className="mt-12 space-y-20">
          {
            playlists.map((playlist, index) => {

              return (
                <MusicSection key={index} title={playlist.year}>
                  <Appearance title={playlist.title} src={playlist.iframeSrc} />
                </MusicSection>
              )
            })
          }
          {/*
          <MusicSection title="My Latest Tune">
            <iframe width="100%" height={300} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498164895&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
          </MusicSection>

          <MusicSection title="2023">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </MusicSection>
          <MusicSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </MusicSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
