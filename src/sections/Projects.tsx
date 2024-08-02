import { Badge, PrimaryHeading } from '../common'
import projects from '../data/projects.json'
import { ArrowUpRightIcon } from '../icons'

const ProjectCard = ({
  name,
  summary,
  url,
  thumbnail,
  tags,
}: {
  name: string
  summary: string
  url: string
  thumbnail: string
  tags?: string[]
}) => {
  return (
    <a
      className="group relative"
      href={url}
      target="_blank"
      aria-label="View project"
    >
      <div className="bg-primary-200 absolute inset-0 rounded border-2 border-black" />
      <div className="relative flex gap-4 rounded border-2 border-black bg-white p-4 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <figure
          className="aspect-[4/3] h-24 rounded bg-neutral-400 bg-cover bg-center sm:h-40"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <div className="flex flex-col items-start gap-2">
          {tags && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge className="text-sm" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <h2 className="text-xl font-bold uppercase underline decoration-dotted group-hover:decoration-solid sm:text-2xl">
            {name}
          </h2>
          <p className="text-sm sm:text-base">{summary}</p>
          <button className="bg-primary-200 inline-flex items-center gap-0.5 rounded border-2 border-black px-4 py-2 text-sm uppercase group-hover:underline sm:text-base">
            <ArrowUpRightIcon className="size-4" aria-label="View project" />
            View
          </button>
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section className="px-4" id="projects">
      <div className="container mx-auto py-32">
        <PrimaryHeading className="mb-8">Projects</PrimaryHeading>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              summary={project.summary}
              url={project.url}
              thumbnail={project.thumbnail}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
