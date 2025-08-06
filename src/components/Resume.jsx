import Image from 'next/image';
import { Button } from '@/components/Button';
import empowerLogo from '@/images/logos/empower-finance.png';
import octopusLogo from '@/images/logos/octopus-logo.svg';
import palavyr from '@/images/logos/palavyr-logo.png';
import zekdeskLogo from '@/images/logos/zendesk-logo.svg';
import unimelbLogo from '@/images/logos/unimelb-logo.svg';
import uconnLogo from '@/images/logos/uconn-logo.svg';
import putnamLogo from '@/images/logos/putnam-logo.svg';
import { ArrowDownIcon } from '@/components/ArrowDownIcon';
import { BriefcaseIcon } from '@/components/BriefcaseIcon';
import { SchoolIcon } from '@/components/SchoolIcon';


// Helper function to get accent color classes
function getAccentClasses(color) {
    const colors = {
        teal: 'ring-teal-400/30 bg-gradient-to-br from-teal-500/10 to-teal-400/5',
        blue: 'ring-accent-cool/30 bg-gradient-to-br from-accent-cool/10 to-accent-cool/5',
        violet: 'ring-accent-creative/30 bg-gradient-to-br from-accent-creative/10 to-accent-creative/5',
        amber: 'ring-accent-warm/30 bg-gradient-to-br from-accent-warm/10 to-accent-warm/5'
    };
    return colors[color] || colors.teal;
}

export function Resume() {
    let resume = [
        {
            company: 'Empower Finance',
            title: 'Senior Software Engineer',
            logo: empowerLogo,
            start: '2024',
            end: {
                label: "Present",
                dateTime: new Date().getFullYear()
            },
            type: 'current',
            accentColor: 'teal'
        },
        {
            company: 'Octopus Deploy',
            title: 'Software Engineer',
            logo: octopusLogo,
            start: '2020',
            end: '2024',
            type: 'engineering',
            accentColor: 'blue'
        },
        {
            company: 'Palavyr - Self Employed',
            title: 'Software Engineer',
            logo: palavyr,
            start: '2020',
            end: '2022',
            type: 'entrepreneurial',
            accentColor: 'violet'
        },
        {
            company: 'Zendesk',
            title: 'Data Science Engineer (AI team)',
            logo: zekdeskLogo,
            start: '2017',
            end: '2020',
            type: 'ai',
            accentColor: 'amber'
        },
    ];

    const education = [
        {
            degree: "PhD",
            school: "University of Melbourne",
            start: '2014',
            end: '2017',
            logo: unimelbLogo,
            accentColor: 'teal'
        },
        {
            degree: "Masters",
            school: "University of Connecticut",
            start: '2010',
            end: '2013',
            logo: uconnLogo,
            accentColor: 'blue'
        },
        {
            degree: "Bachelor of Science",
            school: "University of Connecticut",
            start: '2005',
            end: '2010',
            logo: uconnLogo,
            accentColor: 'violet'
        },
        {
            degree: "High School Diploma",
            school: "Putnam High School ",
            start: '2000',
            end: '2004',
            logo: putnamLogo,
            accentColor: 'amber'
        },
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-secondary  dark:bg-primary ">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="text-lg ml-3 text-zinc-50">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4 group">
                        <div className={`relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-2 transition-all duration-200 group-hover:scale-105 ${getAccentClasses(role.accentColor)}`}>
                            <Image src={role.logo} alt="" className="h-14 w-14 bg-none rounded-full p-1 bg-white" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-medium font-medium text-zinc-100 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-300 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-200 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
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
                <SchoolIcon className="h-6 w-6 flex-none" />
                {/* <Image src={schoolIcon} alt="" className="h-7 w-7 dark:bg-white bg-none rounded-md" unoptimized /> */}
                <span className="text-lg ml-3 text-zinc-50">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {education.map((edu, eduIndex) => (
                    <li key={eduIndex} className="flex gap-4 group">
                        <div className={`relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-2 transition-all duration-200 group-hover:scale-105 ${getAccentClasses(edu.accentColor)}`}>
                            <Image src={edu.logo} alt="" className="h-14 w-14 rounded-full p-1 bg-white" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">School</dt>
                            <dd className="w-full flex-none text-medium font-medium text-zinc-100 dark:text-zinc-100">
                                {edu.school}
                            </dd>
                            <dt className="sr-only">Degree</dt>
                            <dd className="text-xs text-zinc-300 dark:text-zinc-400">
                                {edu.degree}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-300 dark:text-zinc-500"
                                aria-label={`${edu.start.label ?? edu.start} until ${edu.end.label ?? edu.end}`}
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
            <Button
                href="https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing"
                target={'_blank'}
                variant="secondary"
                className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 dark:stroke-zinc-800 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-600 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    );
}
