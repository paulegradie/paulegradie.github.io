import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { SoundCloudIcon } from '@/components/SocialIcons'
import { Button } from '@/components/Button'

const playlists = [
  {
    year: '2023',
    title: 'Shoot for the Stars - Nostalgic Electronic',
    iframeSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1622034748&color=%232a3d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
]

const soundCloud = 'https://soundcloud.com/paulgradie'
const appleMusic = 'https://music.apple.com/us/artist/paul-gradie/1654189380'
const spotifySearch = 'https://open.spotify.com/search/Paul%20Gradie'
const amazonMusic = 'https://music.amazon.com/albums/B0CTKMLWB4'

function MusicSection({ title, children }) {
  return (
    <section className="space-y-5">
      <div>
        <div className="flex items-center gap-4">
          <h2 className="font-display shrink-0 text-2xl text-ink">{title}</h2>
          <div className="h-px flex-grow border-t border-slate-300 dark:border-slate-600/70" />
        </div>
      </div>
      <div className="space-y-12">{children}</div>
    </section>
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

function StreamingAvailability() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-7">
      <div className="max-w-2xl">
          <p className="eyebrow-label">Streaming</p>
          <h2 className="mt-2 font-display text-2xl text-ink">Available on major streaming platforms</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            You can find my releases on Apple Music, Spotify, SoundCloud, Amazon Music, and
            other major streaming services.
          </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
          <Button href={appleMusic} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3">
            Apple Music
          </Button>
          <Button
            href={spotifySearch}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="rounded-2xl px-5 py-3"
          >
            Spotify
          </Button>
          <Button
            href={amazonMusic}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="rounded-2xl px-5 py-3"
          >
            Amazon Music
          </Button>
          <Link
            href={soundCloud}
            target="_blank"
            rel="noreferrer"
            className="glass-panel group inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:text-[color:var(--brand-b)] dark:text-slate-200 dark:hover:text-cyan-300"
          >
            <SoundCloudIcon className="h-6 w-6 flex-none fill-[color:var(--ink-muted)] transition group-hover:fill-[color:var(--brand-a)] dark:group-hover:fill-cyan-300" />
            <span className="ml-3">SoundCloud</span>
          </Link>
      </div>
    </div>
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
        intro="I compose electronic music as a creative outlet and a way to keep the maker side of my brain active. Every year I release a small set of tracks that reflect a different creative mood."
      >
        <StreamingAvailability />
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
