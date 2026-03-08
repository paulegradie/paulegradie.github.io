import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { SoundCloudIcon } from '@/components/SocialIcons'

const playlists = [
  {
    year: '2023',
    title: 'Around the Sun',
    iframeSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1622034748&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
]

const soundCloud = 'https://soundcloud.com/paulgradie'

function MusicSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-12">{children}</div>
    </Section>
  )
}

function Appearance({ title, src: iframeSrc }) {
  return (
    <Card as="article" className="glass-panel rounded-2xl p-4 sm:p-5">
      <Card.Title as="h3">{title}</Card.Title>
      <div className="surface-card mt-3 w-full overflow-hidden rounded-xl">
        <iframe
          title={title}
          width="100%"
          height={350}
          allow="autoplay"
          src={iframeSrc}
          className="w-full"
        />
      </div>
    </Card>
  )
}

function SoundCloudLink() {
  return (
    <li className="flex">
      <Link
        href={soundCloud}
        className="glass-panel group inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:text-[color:var(--brand-b)] dark:text-slate-200 dark:hover:text-cyan-300"
      >
        <SoundCloudIcon className="h-6 w-6 flex-none fill-[color:var(--ink-muted)] transition group-hover:fill-[color:var(--brand-a)] dark:group-hover:fill-cyan-300" />
        <span className="ml-3">Paul Gradie on SoundCloud</span>
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
        intro="I compose electronic music as a creative outlet. Every year I release a small set of tracks to satisfy a part of my brain that only music can reach."
      >
        <SoundCloudLink />
        <div className="mt-10 space-y-16">
          {playlists.map((playlist, index) => (
            <MusicSection key={index} title={playlist.year}>
              <Appearance title={playlist.title} src={playlist.iframeSrc} />
            </MusicSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
