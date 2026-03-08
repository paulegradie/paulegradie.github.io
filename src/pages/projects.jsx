import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import sailfishBanner from '@/images/photos/Sailfishnew.png'
import palavyrLogo from '@/images/logos/palavyr-logo2.png'
import renaym from '@/images/logos/renaym.png'
import siftr from '@/images/logos/siftr.png'
import launch11 from '@/images/logos/launch11.png'
import seqpyplot from '@/images/logos/seqpyplot-logo.png'
import queryStudio from '@/images/logos/qwerkystudio-logo.png'

const projects = [
  {
    name: 'Launch11',
    description: 'A studio for focused AI products and productized experiments.',
    link: { href: 'https://launch11.com', label: 'Launch11' },
    logo: launch11,
    className: 'w-64 rounded-lg m-2',
    accentColor: 'teal',
  },
  {
    name: 'Renaym',
    description: 'A utility for renaming media libraries with less manual cleanup.',
    link: { href: 'https://renaym.launch11.com', label: 'Renaym' },
    logo: renaym,
    className: 'w-64 rounded-lg m-2',
    accentColor: 'blue',
  },
  {
    name: 'Siftr',
    description: 'A focused tool for reducing inbox noise and regaining control of email.',
    link: { href: 'https://siftr.launch11.com', label: 'Siftr' },
    logo: siftr,
    className: 'w-64 rounded-lg m-2',
    accentColor: 'blue',
  },
  {
    name: 'Qwerky Studio',
    description: 'A creative tool for generating and managing artwork with modern image models.',
    link: { href: 'https://github.com/QwerkyDesigns/studio-portal', label: 'Qwerky Studio' },
    logo: queryStudio,
    className: 'w-16 rounded-lg m-2',
    accentColor: 'amber',
  },
  {
    name: 'Sailfish',
    description: 'A .NET performance test runner designed to be approachable, repeatable, and useful.',
    link: { href: 'https://paulgradie.com/Sailfish', label: 'Sailfish' },
    logo: sailfishBanner,
    className: 'w-64 rounded-lg m-2',
    accentColor: 'teal',
  },
  {
    name: 'Palavyr',
    description:
      'An open-source full stack app for chatbot-driven information capture and estimate workflows.',
    link: { href: 'https://github.com/Palavyr/Palavyr', label: 'Palavyr' },
    logo: palavyrLogo,
    className: 'w-16 rounded-lg m-2',
    accentColor: 'blue',
  },
  {
    name: 'SeqPyPlot',
    description: 'A package for descriptive analysis of replicate-free RNA-seq time series data.',
    link: { href: 'https://github.com/paulegradie/SeqPyPlot', label: 'SeqPyPlot' },
    logo: seqpyplot,
    className: 'w-32 rounded-lg m-2',
    accentColor: 'teal',
  },
]

function getProjectAccentClasses(color) {
  const colors = {
    teal: 'from-[color:var(--brand-a)]/16 to-white/5 border-[color:var(--brand-a)]/25',
    blue: 'from-[color:var(--brand-b)]/16 to-white/5 border-[color:var(--brand-b)]/25',
    violet: 'from-[color:var(--brand-c)]/18 to-white/5 border-[color:var(--brand-b)]/20',
    amber: 'from-[#b38b52]/16 to-white/5 border-[#b38b52]/25',
  }

  return colors[color] || colors.teal
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Paul Gradie</title>
        <meta name="description" content="Projects and side hustles" />
      </Head>
      <SimpleLayout
        title="Projects and Side Hustles"
        intro="Outside work, I build products, experiments, and open-source tools. Some are playful, some are practical, and all of them teach me something useful."
      >
        <ul role="list" className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.name} className="group">
              <div
                className={`surface-card relative z-10 flex items-center justify-center rounded-2xl bg-gradient-to-br p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${getProjectAccentClasses(project.accentColor)}`}
              >
                {project.logo && (
                  <Image src={project.logo} alt="no logo for this project" className={project.className} unoptimized />
                )}
              </div>
              <h2 className="mt-6 text-base font-semibold text-ink dark:text-slate-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-semibold text-[color:var(--brand-b)] transition-colors duration-200 group-hover:text-[color:var(--brand-a)] dark:text-cyan-300 dark:group-hover:text-blue-300">
                <LinkIcon className="h-5 w-5 flex-none transition-transform duration-200 group-hover:scale-110" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

