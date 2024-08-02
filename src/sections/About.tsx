import { twc } from 'react-twc'
import { Hyperlink, SecondaryHeading, ToolBadge } from '../common'
import { StarIcon } from '../icons'

const ToolsSection = twc.div`flex flex-wrap gap-2`

const Tools = () => {
  return (
    <div className="grid gap-4">
      <ToolsSection>
        <ToolBadge>
          <StarIcon className="size-4" /> JavaScript
        </ToolBadge>
        <ToolBadge>
          <StarIcon className="size-4" /> TypeScript
        </ToolBadge>
        <ToolBadge>
          <StarIcon className="size-4" /> PHP
        </ToolBadge>
        <ToolBadge>Python</ToolBadge>
      </ToolsSection>
      <ToolsSection>
        <ToolBadge>
          <StarIcon className="size-4" /> React
        </ToolBadge>
        <ToolBadge>
          <StarIcon className="size-4" /> Tailwind CSS
        </ToolBadge>
        <ToolBadge>Vite</ToolBadge>
        <ToolBadge>Svelte</ToolBadge>
        <ToolBadge>Figma</ToolBadge>
      </ToolsSection>
      <ToolsSection>
        <ToolBadge>
          <StarIcon className="size-4" /> Laravel
        </ToolBadge>
        <ToolBadge>
          <StarIcon className="size-4" /> MySQL
        </ToolBadge>
        <ToolBadge>Express</ToolBadge>
        <ToolBadge>Next.js</ToolBadge>
        <ToolBadge>Gatsby</ToolBadge>
        <ToolBadge>Firebase</ToolBadge>
      </ToolsSection>
    </div>
  )
}

export default function About() {
  return (
    <section className="bg-primary-200 px-4" id="about">
      <div className="container mx-auto grid gap-16 py-32">
        <div className="grid gap-8">
          <figure className="relative size-40 overflow-hidden rounded-full bg-neutral-400 bg-portrait bg-cover bg-center sm:size-64">
            <div className="bg-primary-800 absolute inset-0 opacity-10" />
          </figure>
          <SecondaryHeading>
            I build beautiful and responsive websites.
          </SecondaryHeading>
          <p className="sm:text-lg">
            I'm passionate about designing and building dynamic web applications
            using a range of technologies. My love for coding began at age 10
            when I started tinkering with PHP, and I've since developed my
            skills professionally.&nbsp;
            <Hyperlink className="font-semibold" href="#projects">
              View my projects
            </Hyperlink>
          </p>
          <p className="sm:text-lg">
            I recently graduated with a BSc in Computer Science from the
            University of Leicester. I'm actively looking for work, so please
            feel free to&nbsp;
            <Hyperlink className="font-semibold" href="#contact">
              get in touch
            </Hyperlink>
            !
          </p>
        </div>
        <hr className="border-t-4 border-dotted border-black" />
        <div>
          <SecondaryHeading>Tools I love</SecondaryHeading>
          <p className="mb-8">(Always eager to learn!)</p>
          <Tools />
        </div>
      </div>
    </section>
  )
}
