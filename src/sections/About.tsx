import { twc } from 'react-twc'
import { Hyperlink, SecondaryHeading } from '../common'
import { StarIcon } from '../icons'

const ToolsSection = twc.div`flex flex-wrap gap-2`
const ToolBadge = twc.span`inline-flex select-none items-center gap-0.5 rounded border-2 border-black bg-black px-2 py-0.5 lowercase text-white transition-colors hover:bg-transparent hover:text-black`

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
    <section className="bg-violet-400 px-4" id="about">
      <div className="container mx-auto grid gap-16 py-32">
        <div className="grid gap-4 sm:gap-8">
          <figure className="size-28 flex-shrink-0 rounded-full border-2 border-black bg-white sm:size-36" />
          <SecondaryHeading>
            I build beautiful and responsive websites.
          </SecondaryHeading>
          <p className="sm:text-lg">
            I started out as a hobbyist PHP developer when I was 10, and I've
            since developed my skills professionally.
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
