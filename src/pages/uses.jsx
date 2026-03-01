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
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the tools I use to build software and stay productive. Here is the current list."
      >
        <div className="space-y-20">
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