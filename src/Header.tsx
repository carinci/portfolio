import { twc } from 'react-twc'
import { ArrowRightTopOnSquareIcon, GitHubIcon, LinkedInIcon } from './icons'

const NavLink = twc.a`hover:underline`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-4">
      <div className="container mx-auto flex h-16 items-center justify-between text-white">
        <nav className="hidden gap-4 sm:flex">
          <a href="https://github.com/carinci" target="_blank">
            <GitHubIcon className="size-5" />
          </a>
          <a href="https://linkedin.com/in/carinci" target="_blank">
            <LinkedInIcon className="size-5" />
          </a>
        </nav>
        <nav className="flex flex-grow items-center justify-between gap-4 text-sm uppercase sm:flex-grow-0 sm:justify-normal sm:gap-8 sm:text-base">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink
            className="inline-flex items-center gap-0.5"
            href="/resume.pdf"
            target="_blank"
          >
            <ArrowRightTopOnSquareIcon className="size-4" />
            Resume
          </NavLink>
          <NavLink
            className="rounded border-2 border-white px-4 py-2 transition-colors hover:bg-white hover:text-black"
            href="#contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
