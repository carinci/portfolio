import { twc } from 'react-twc'
import { Badge, Hyperlink, SecondaryHeading } from '../common'
import { StarIcon } from '../icons'

const ToolsSection = twc.div`flex flex-wrap gap-2`

const Tools = () => {
  return (
    <div className="grid gap-4">
      <ToolsSection>
        <Badge>
          <StarIcon className="size-4" /> JavaScript
        </Badge>
        <Badge>
          <StarIcon className="size-4" /> TypeScript
        </Badge>
        <Badge>
          <StarIcon className="size-4" /> PHP
        </Badge>
        <Badge>Python</Badge>
      </ToolsSection>
      <ToolsSection>
        <Badge>
          <StarIcon className="size-4" /> React
        </Badge>
        <Badge>
          <StarIcon className="size-4" /> Tailwind CSS
        </Badge>
        <Badge>Vite</Badge>
        <Badge>Svelte</Badge>
        <Badge>Figma</Badge>
      </ToolsSection>
      <ToolsSection>
        <Badge>
          <StarIcon className="size-4" /> Laravel
        </Badge>
        <Badge>
          <StarIcon className="size-4" /> MySQL
        </Badge>
        <Badge>Express</Badge>
        <Badge>Next.js</Badge>
        <Badge>SvelteKit</Badge>
        <Badge>Firebase</Badge>
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
            <Hyperlink
              className="font-semibold"
              href="#projects"
              aria-label="Projects"
            >
              View my projects
            </Hyperlink>
          </p>
          <p className="sm:text-lg">
            I recently graduated with a BSc in Computer Science from the
            University of Leicester. I'm actively looking for work, so please
            feel free to&nbsp;
            <Hyperlink
              className="font-semibold"
              href="#contact"
              aria-label="Contact"
            >
              get in touch
            </Hyperlink>
            !
          </p>
        </div>
        <hr className="border-t-4 border-dotted border-black" />
        <div>
          <SecondaryHeading className="mb-8">Tools I love</SecondaryHeading>
          <Tools />
        </div>
      </div>
    </section>
  )
}
