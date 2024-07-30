import { twc } from 'react-twc'
import { twJoin } from 'tailwind-merge'
import { PrimaryHeading } from '../common'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from '../icons'

const FormLabel = twc.label`text-white`
const inputClasses = 'rounded p-4 placeholder-neutral-600'
const FormInput = twc.input`${inputClasses}`

const ContactForm = () => {
  return (
    <form className="grid gap-4" action="#" method="POST">
      <div className="grid">
        <FormLabel htmlFor="name">Full name</FormLabel>
        <FormInput id="name" name="name" required placeholder="John Doe" />
      </div>
      <div className="grid">
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          name="email"
          type="email"
          required
          placeholder="john.doe@gmail.com"
        />
      </div>
      <div className="grid">
        <FormLabel htmlFor="message">Message</FormLabel>
        <textarea
          className={twJoin(inputClasses, 'resize-none')}
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Hey!"
        />
      </div>
      <div className="flex justify-end">
        <button className="inline-flex items-center gap-0.5 rounded bg-violet-400 px-8 py-4 hover:underline">
          <ArrowUpRightIcon className="size-4" />
          Send
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section className="bg-black px-4" id="contact">
      <div className="container mx-auto grid gap-8 py-32">
        <div className="text-white">
          <PrimaryHeading className="mb-4">Get in touch</PrimaryHeading>
          <p>Want to work with me? Send me a message</p>
        </div>
        <ContactForm />
        <div className="flex items-center justify-center gap-4 text-white">
          <a href="https://github.com/carinci" target="_blank">
            <GitHubIcon className="size-7" />
          </a>
          <a href="https://linkedin.com/in/carinci" target="_blank">
            <LinkedInIcon className="size-7" />
          </a>
        </div>
      </div>
    </section>
  )
}
