import { ArrowUpRight } from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    number: '02',
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    number: '03',
    title: 'Database',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    number: '04',
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'Vercel',
      'Cloudinary',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 bg-[#F7F6F2] px-6 py-12 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2.5 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            Technical Competencies
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            02
          </span>
        </div>

        {/* Section Intro */}
        <div className="grid gap-5 py-4 sm:py-5 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <h2 className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-[34px] text-[#111111] dark:text-[#F5F3ED]">
            Technologies I use to build and deploy modern web applications.
          </h2>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
            My development workflow spans frontend interfaces, backend systems,
            databases and deployment infrastructure needed to deliver dependable,
            production-ready web solutions.
          </p>
        </div>

        {/* Typographic Skill Groups with subtle separators */}
        <div className="border-t border-[#D8D6CF] dark:border-[#33322E]">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-2.5 border-b border-[#D8D6CF] py-3 sm:py-3.5 transition-colors duration-200 hover:bg-[#EFECE6]/20 dark:border-[#33322E] dark:hover:bg-[#171613] md:grid-cols-[70px_200px_1fr] md:items-start"
            >
              {/* Category Number */}
              <span className="text-xs font-mono tracking-widest text-[#88857E] dark:text-[#706E66]">
                {group.number}
              </span>

              {/* Category Title */}
              <h3 className="text-base sm:text-lg font-medium text-[#111111] dark:text-[#F5F3ED]">
                {group.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm sm:text-base text-[#55534E] transition-colors hover:text-[#111111] dark:text-[#A5A39C] dark:hover:text-[#F5F3ED]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link to Experience */}
        <div className="mt-4 sm:mt-5">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 border-b border-[#111111] pb-1 text-sm font-medium text-[#111111] transition-colors hover:opacity-70 dark:border-[#F5F3ED] dark:text-[#F5F3ED]"
          >
            <span>Explore experience &amp; leadership</span>
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills