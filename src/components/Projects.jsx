import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { GithubIcon } from './Icons'

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-28 bg-[#F7F6F2] px-4 py-10 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Compact Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            Projects
          </p>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            05
          </span>
        </div>

        {/* Section Headline */}
        <div className="pt-3 pb-3.5 sm:pt-3.5 sm:pb-4">
          <h2
            id="projects-heading"
            className="text-xl font-medium tracking-tight text-[#111111] dark:text-[#F5F3ED] sm:text-2xl"
          >
            Selected Work
          </h2>
        </div>

        {/* Compact 4-column project gallery on desktop (1 row), 2x2 on tablet and mobile */}
        <div className="grid grid-cols-2 gap-x-3.5 gap-y-5 sm:gap-4.5 lg:grid-cols-4 lg:gap-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col justify-start"
            >
              {/* Clickable Thumbnail Preview Area (+10-15% increased size, ~4:3 ratio) */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="relative block aspect-[1.24/1] max-h-[190px] sm:max-h-[192px] lg:max-h-[190px] w-full overflow-hidden rounded-[3px] border border-[#D8D6CF] transition-colors duration-200 group-hover:border-[#88857E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:border-[#33322E] dark:group-hover:border-[#706E66] dark:focus-visible:ring-[#F5F3ED]"
              >
                <div
                  className={`flex h-full w-full items-center justify-center p-1.5 sm:p-2 ${
                    project.containerBg || 'bg-[#ECE8DF] dark:bg-[#1C1B18]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="eager"
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.018]"
                  />
                </div>
              </a>

              {/* Project Metadata: Readable, Compact & Editorial */}
              <div className="pt-2.5 sm:pt-3">
                {/* Title Row with Live Demo ↗ and GitHub icon */}
                <div className="flex items-center justify-between gap-1.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-flex items-center gap-1 text-[15px] font-semibold uppercase tracking-tight text-[#111111] transition-colors hover:text-[#66645F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:text-[#F5F3ED] dark:hover:text-[#A5A39C] dark:focus-visible:ring-[#F5F3ED] sm:text-base"
                  >
                    <span className="group-hover/title:underline">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.2}
                      className="text-[#88857E] transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 dark:text-[#706E66] group-hover/title:text-[#111111] dark:group-hover/title:text-[#F5F3ED]"
                    />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      title="View GitHub repository"
                      className="rounded-[3px] p-0.5 text-[#88857E] transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:text-[#706E66] dark:hover:text-[#F5F3ED] dark:focus-visible:ring-[#F5F3ED]"
                    >
                      <GithubIcon size={14} className="shrink-0" />
                    </a>
                  )}
                </div>

                {/* Short Descriptor: 14px */}
                <p className="mt-1 text-sm leading-snug text-[#55534E] dark:text-[#A5A39C]">
                  {project.description}
                </p>

                {/* Tech Stack in readable, muted font: 11-12px */}
                <p className="mt-1.5 font-mono text-[11px] leading-tight text-[#88857E] dark:text-[#706E66] sm:text-[12px]">
                  {project.technologies.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
