function About() {
  const focusAreas = [
    'Modern Web Applications',
    'Clean Interfaces',
    'Practical Functionality',
    'Responsive Design',
    'Full-Stack Development',
  ]

  const technologies = [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
  ]

  return (
    <section
      id="about"
      className="scroll-mt-28 bg-[#F7F6F2] px-6 py-12 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2.5 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            About
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            01
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-7 pt-5 sm:pt-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          {/* Narrative Column — First Person */}
          <div>
            <h2 className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-[34px] text-[#111111] dark:text-[#F5F3ED]">
              I build modern web applications with a focus on clean design,
              practical functionality and solid engineering.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
              I'm a B.Tech Computer Science &amp; Engineering student and Full-Stack Web
              Developer. I enjoy turning ideas into responsive, user-friendly digital
              experiences that combine thoughtful interfaces with dependable systems.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
              My work centers on building real-world web applications from frontend interfaces
              to backend services, emphasizing practical functionality and performance.
            </p>

            <div className="mt-5 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                Core Technology Focus
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#D8D6CF] bg-[#EFECE6]/40 px-2.5 py-1 text-xs font-medium text-[#111111] dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#F5F3ED]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Metadata Column */}
          <div className="lg:pt-0.5">
            <div className="border-t border-[#D8D6CF] dark:border-[#33322E]">
              {/* Education */}
              <div className="border-b border-[#D8D6CF] py-3 dark:border-[#33322E]">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                  Education
                </p>
                <p className="text-base font-medium text-[#111111] dark:text-[#F5F3ED]">
                  B.Tech — Computer Science &amp; Engineering
                </p>
                <p className="mt-0.5 text-sm text-[#66645F] dark:text-[#A5A39C]">
                  Sandip University
                </p>
              </div>

              {/* Focus Areas */}
              <div className="border-b border-[#D8D6CF] py-3 dark:border-[#33322E]">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                  Development Focus
                </p>
                <ul className="mt-1.5 space-y-1 text-sm text-[#55534E] dark:text-[#A5A39C]">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-[#111111] dark:bg-[#F5F3ED]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Status */}
              <div className="border-b border-[#D8D6CF] py-3 dark:border-[#33322E]">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                  Currently
                </p>
                <p className="text-base font-medium text-[#111111] dark:text-[#F5F3ED]">
                  Web Development Intern at Thinkbuild
                </p>
                <p className="mt-0.5 text-sm text-[#66645F] dark:text-[#A5A39C]">
                  Working on practical web development projects and gaining professional experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About