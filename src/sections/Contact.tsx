import { twc } from 'react-twc'
import { twJoin } from 'tailwind-merge'
import { Hyperlink, PrimaryHeading } from '../common'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from '../icons'

const FormLabel = twc.label`text-white`
const inputClasses = 'rounded p-4 placeholder-neutral-600 outline-none'
const FormInput = twc.input`${inputClasses}`

const ContactForm = () => {
  return (
    <form
      className="grid gap-4"
      action="https://send.pageclip.co/guWO1sA2c3BYePS21yxYAjBd0okydEgI/contact"
      method="post"
    >
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
          rows={5}
          required
          minLength={20}
          placeholder="Hey!"
        />
      </div>
      <div className="flex justify-end">
        <button className="inline-flex items-center gap-0.5 rounded bg-violet-200 px-8 py-4 uppercase hover:underline">
          <ArrowUpRightIcon className="size-4" /> Send
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
          <p>
            Want to work with me? Send me a message or&nbsp;
            <Hyperlink
              href="https://www.linkedin.com/in/carinci/"
              target="_blank"
            >
              connect on LinkedIn
            </Hyperlink>
          </p>
        </div>
        <ContactForm />
        <div className="flex flex-col items-center gap-8 text-white">
          <div className="flex gap-4">
            <a href="https://github.com/carinci" target="_blank">
              <GitHubIcon className="size-7" />
            </a>
            <a href="https://linkedin.com/in/carinci" target="_blank">
              <LinkedInIcon className="size-7" />
            </a>
          </div>
          <Hyperlink className="text-sm" href="#">
            Back to top
          </Hyperlink>
        </div>
      </div>
    </section>
  )
}
