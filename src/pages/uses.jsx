import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Paul Gradie</title>
        <meta
          name="description"
          content="Tools, workflows, and AI-enabled engineering habits I use to build reliable software and practical products."
        />
      </Head>
      <SimpleLayout
        title="Tools, workflows, and engineering habits"
        intro="I get asked a lot about the tools and workflows I use. This page is a snapshot of my workstation, development stack, and how I think about AI-enabled engineering."
      >
        <div className="space-y-20">
          <ToolsSection title="AI and workflows">
            <Tool title="Prompt libraries and context documents">
              I keep structured prompt and context documents that help agents work with consistent
              intent, reduce setup overhead, and preserve useful engineering context.
            </Tool>
            <Tool title="Review guilds and handoff discipline">
              I treat AI as part of the workflow rather than the output. Clear handoffs, review
              guidelines, and human verification keep work reliable.
            </Tool>
            <Tool title="Codebase legibility and observability">
              Work is easier to maintain when software, docs, and automation are designed for both
              humans and AI-assisted review practices.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Workstation">
            <Tool title="16-inch MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16-inch MacBook Pro prior to this and the difference is
              night and day. I rarely hear the fans, even under heavy workloads.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              A great option when you want high pixel density and more real estate than 27 inches.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They do not make keyboards like this anymore. I keep spare units for parts and long
              term backup.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Gesture-heavy workflows fit how I move through coding and writing.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I am sitting for long stretches, comfort matters.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              Still one of the fastest editors for focused coding sessions.
            </Tool>
            <Tool title="iTerm2">My default terminal setup for daily engineering work.</Tool>
            <Tool title="TablePlus">
              Excellent for database exploration and quick admin tasks.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Started as a design tool, became an essential collaboration space.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">Fast launcher and workflow glue.</Tool>
            <Tool title="Reflect">
              Daily-note workflows helped me keep ideas discoverable and connected.
            </Tool>
            <Tool title="SavvyCal">
              Makes scheduling smoother while protecting deep work time.
            </Tool>
            <Tool title="Focus">Simple blocker for distraction-heavy websites.</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}