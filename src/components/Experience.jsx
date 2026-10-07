import { ArrowUpRight } from 'lucide-react'

function Experience() {
  const experiences = [
    {
      period: 'CURRENT',
      isCurrent: true,
      category: 'Professional Experience',
      organization: 'Thinkbuild',
      role: 'Web Development Intern',
      description:
        'Currently working on web development projects as an intern, including the development of ADSPARK, a creative advertising and digital marketing studio website.',
    },
    {
      period: 'LEADERSHIP',
      isCurrent: false,
      category: 'Leadership & Event Management',
      organization: "Engineers' Day",
      role: 'Event Coordinator',
      description:
        'Coordinated participants, helped manage event activities, and worked with the organizing team to ensure the event was conducted smoothly.',
    },
    {
      period: 'COMMUNITY',
      isCurrent: false,
      category: 'Community Engagement',
      organization: 'Pandit Deen Dayal Upadhyay Rojgar Yojna',
      role: 'Volunteer',
      description:
        'Assisted with student registration, collected and maintained participant information, guided students through the registration process, and coordinated with team members to support the event.',
    },
    {
      period: 'HACKATHON',
      isCurrent: false,
      category: 'Hackathon / Technical Event',
      organization: 'NASA Space Apps Challenge',
      role: 'Participant',
      description:
        'Participated in the NASA Space Apps Challenge as part of a collaborative team, working on a solution to a real-world challenge.',
    },
  ]

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 bg-[#F7F6F2] px-6 py-12 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2.5 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            EXPERIENCE &amp; LEADERSHIP
          </p>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            03
          </span>
        </div>

        {/* Section Intro */}
        <div className="grid gap-5 py-4 sm:py-5 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <h2
            id="experience-heading"
            className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-[34px] text-[#111111] dark:text-[#F5F3ED]"
          >
            Experience &amp; Leadership
          </h2>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
            Professional development experience alongside collaborative projects, hackathons, and student-led event coordination.
          </p>
        </div>

        {/* Structured Editorial Timeline / List */}
        <div className="border-t border-[#D8D6CF] dark:border-[#33322E]">
          {experiences.map((item, idx) => (
            <div
              key={`${item.organization}-${idx}`}
              className="grid gap-3.5 border-b border-[#D8D6CF] py-4 transition-colors duration-200 hover:bg-[#EFECE6]/20 dark:border-[#33322E] dark:hover:bg-[#171613] md:grid-cols-[150px_240px_1fr] md:items-start md:gap-5 lg:grid-cols-[170px_280px_1fr] lg:gap-6 sm:py-4.5"
            >
              {/* Status / Period Tag */}
              <div>
                {item.isCurrent ? (
                  <span className="inline-flex items-center gap-1.5 border border-[#111111] bg-[#111111] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#F7F6F2] dark:border-[#F5F3ED] dark:bg-[#F5F3ED] dark:text-[#11110F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600" />
                    {item.period}
                  </span>
                ) : (
                  <span className="text-xs font-mono tracking-widest text-[#88857E] dark:text-[#706E66]">
                    {item.period}
                  </span>
                )}
                <p className="mt-1 text-xs text-[#88857E] dark:text-[#706E66]">
                  {item.category}
                </p>
              </div>

              {/* Organization & Role */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111111] dark:text-[#F5F3ED]">
                  {item.organization}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[#66645F] dark:text-[#A5A39C]">
                  {item.role}
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm sm:text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link to Education */}
        <div className="mt-4 sm:mt-5">
          <a
            href="#education"
            className="group inline-flex items-center gap-2 border-b border-[#111111] pb-1 text-sm font-medium text-[#111111] transition-colors hover:opacity-70 dark:border-[#F5F3ED] dark:text-[#F5F3ED]"
          >
            <span>View education &amp; projects</span>
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

export default Experience
