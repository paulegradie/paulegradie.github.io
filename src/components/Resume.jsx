import Image from 'next/image';
import { Button } from '@/components/Button';
import tiltLogo from '@/images/logos/empower-finance.png';
import octopusLogo from '@/images/logos/octopus-logo.svg';
import palavyr from '@/images/logos/palavyr-logo.png';
import zekdeskLogo from '@/images/logos/zendesk-logo.svg';
import unimelbLogo from '@/images/logos/unimelb-logo.svg';
import uconnLogo from '@/images/logos/uconn-logo.svg';
import putnamLogo from '@/images/logos/putnam-logo.svg';
import { ArrowDownIcon } from '@/components/ArrowDownIcon';
import { BriefcaseIcon } from '@/components/BriefcaseIcon';
import { SchoolIcon } from '@/components/SchoolIcon';

function getAccentClasses(color) {
    const colors = {
        teal: 'ring-cyan-500/30 bg-gradient-to-br from-cyan-500/12 to-cyan-400/6',
        blue: 'ring-indigo-500/30 bg-gradient-to-br from-indigo-500/12 to-indigo-400/6',
        violet: 'ring-blue-500/30 bg-gradient-to-br from-blue-500/12 to-blue-400/6',
        amber: 'ring-sky-500/30 bg-gradient-to-br from-sky-500/12 to-sky-400/6'
    };

    return colors[color] || colors.teal;
}

export function Resume() {
    const experience = [
        {
            company: 'Tilt Finance',
            logo: tiltLogo,
            range: '2024 - Present',
            accentColor: 'teal',
            progression: [
                { year: '2024', title: 'Senior Software Engineer' },
                { year: '2025', title: 'Staff Software Engineer' }
            ]
        },
        {
            company: 'Octopus Deploy',
            logo: octopusLogo,
            range: '2020 - 2024',
            accentColor: 'blue',
            progression: [
                { year: '2020', title: 'Intermediate Software Engineer' },
                { year: '2023', title: 'Senior Software Engineer' }
            ]
        },
        {
            company: 'Palavyr - Self Employed',
            logo: palavyr,
            range: '2020 - 2022',
            accentColor: 'violet',
            progression: [
                { year: '2020', title: 'Software Engineer' }
            ]
        },
        {
            company: 'Zendesk',
            logo: zekdeskLogo,
            range: '2017 - 2020',
            accentColor: 'amber',
            progression: [
                { year: '2017', title: 'Data Science Engineer (AI Team)' }
            ]
        },
    ];

    const education = [
        {
            degree: 'PhD',
            school: 'University of Melbourne',
            start: '2014',
            end: '2017',
            logo: unimelbLogo,
            accentColor: 'teal'
        },
        {
            degree: 'Masters',
            school: 'University of Connecticut',
            start: '2010',
            end: '2013',
            logo: uconnLogo,
            accentColor: 'blue'
        },
        {
            degree: 'Bachelor of Science',
            school: 'University of Connecticut',
            start: '2005',
            end: '2010',
            logo: uconnLogo,
            accentColor: 'violet'
        },
        {
            degree: 'High School Diploma',
            school: 'Putnam High School',
            start: '2000',
            end: '2004',
            logo: putnamLogo,
            accentColor: 'amber'
        },
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 bg-secondary p-6 dark:border-zinc-700/40 dark:bg-primary">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-lg text-zinc-50">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {experience.map((company, companyIndex) => (
                    <li key={companyIndex} className="group flex gap-4">
                        <div className={`relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-2 transition-all duration-200 group-hover:scale-105 ${getAccentClasses(company.accentColor)}`}>
                            <Image src={company.logo} alt="" className="h-14 w-14 rounded-full bg-white p-1" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-medium font-medium text-zinc-100 dark:text-zinc-100">
                                {company.company}
                            </dd>
                            <dt className="sr-only">Date range</dt>
                            <dd className="text-xs text-zinc-300 dark:text-zinc-400">{company.range}</dd>
                            <dd className="w-full pt-2">
                                <ul className="space-y-1 text-xs text-zinc-300 dark:text-zinc-400">
                                    {company.progression.map((step) => (
                                        <li key={`${company.company}-${step.year}`}>
                                            <span className="font-semibold text-zinc-200 dark:text-zinc-300">{step.year}</span>{' '}
                                            {step.title}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <div className="mb-6 mt-6 border-b-2" />
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SchoolIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-lg text-zinc-50">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {education.map((edu, eduIndex) => (
                    <li key={eduIndex} className="group flex gap-4">
                        <div className={`relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-2 transition-all duration-200 group-hover:scale-105 ${getAccentClasses(edu.accentColor)}`}>
                            <Image src={edu.logo} alt="" className="h-14 w-14 rounded-full bg-white p-1" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">School</dt>
                            <dd className="w-full flex-none text-medium font-medium text-zinc-100 dark:text-zinc-100">
                                {edu.school}
                            </dd>
                            <dt className="sr-only">Degree</dt>
                            <dd className="text-xs text-zinc-300 dark:text-zinc-400">{edu.degree}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-300 dark:text-zinc-500" aria-label={`${edu.start} until ${edu.end}`}>
                                <time dateTime={edu.start}>{edu.start}</time>{' '}
                                <span aria-hidden="true">-</span>{' '}
                                <time dateTime={edu.end}>{edu.end}</time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button
                href="https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing"
                target="_blank"
                variant="secondary"
                className="group mt-6 w-full"
            >
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:stroke-zinc-800 dark:group-hover:stroke-zinc-600 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    );
}
