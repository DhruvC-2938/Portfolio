import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'ResumeScope AI',
    image: '/projects/resumescope.png',
    bg: 'bg-[#EEF4FF]',
    description:
      'AI-powered resume analysis platform built with Google AI Studio integration. It evaluates resumes, identifies strengths and skill gaps, and generates actionable recommendations to improve ATS compatibility and profile quality.',
    tech: ['Google AI Studio', 'React', 'TypeScript', 'Tailwind'],
    live:
      'https://resumescope-f3y7r8ib5-2025dhruvc-dotcoms-projects.vercel.app/',
    github:
      'https://github.com/DhruvC-2938/resumescope-ai.git',
  },

  {
    title: 'Math Quiz Battle Arena',
    image: '/projects/mathquiz.png',
    bg: 'bg-[#F3F0FF]',
    description:
      'Interactive web application where users can test their math skills through timed quizzes, compete on leaderboards, and participate in discussion forums.',
    tech: ['React', 'Firebase', 'JavaScript'],
    live: 'https://mathquizbattlearena.netlify.app/',
    github:
      'https://github.com/DhruvC-2938/Math_Quiz_Battle_Arena.git',
  },

  {
    title: 'Digital Marketing Website',
    image: '/projects/digitalmarketing.png',
    bg: 'bg-[#FFF5EC]',
    description:
      "A modern digital marketing website inspired by Neil Patel's platform with responsive layouts and conversion-focused design.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    live:
      'https://dhruvc-2938.github.io/Digital-Marketing---Neil-Patel/',
    github:
      'https://github.com/DhruvC-2938/Digital-Marketing---Neil-Patel.git',
  },

  {
    title: 'Flip Card Game',
    image: '/projects/flipcard.png',
    bg: 'bg-[#F0FAF4]',
    description:
      'A visually engaging memory card game built using HTML, CSS and JavaScript featuring advanced animations, timer-based gameplay and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live:
      'https://dhruvc-2938.github.io/Flip_Card_Game_html/',
    github:
      'https://github.com/DhruvC-2938/Flip_Card_Game_html.git',
  },
];

const Projects = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
  id="projects"
  ref={ref}
  className="relative py-32 bg-stone-50 overflow-hidden"
>
  <div
  className="
    absolute
    right-10
    -top-8
    text-[50px]
    xl:text-[180px]
    font-black
    text-stone-200
    pointer-events-none
    select-none
    hidden lg:block
  "
>
  WORK
</div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
          className="mb-28"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-5">
            Featured Work
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.05]">
            Projects I've
            <br />
            Built So Far.
          </h2>
        </motion.div>

        {/* Projects */}

        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className={`
                ${project.bg}
                rounded-[40px]
                overflow-hidden
                border border-stone-200
              `}
            >
              <div
                className={`
                  grid lg:grid-cols-2 gap-12
                  items-center
                  p-8 lg:p-14
                  ${
                    index % 2 !== 0
                      ? 'lg:[&>*:first-child]:order-2'
                      : ''
                  }
                `}
              >

                {/* Content */}

                <div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                    {project.title}
                  </h3>

                  <p className="text-lg text-stone-600 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-white/80
                          border border-stone-200
                          text-sm
                          font-medium
                          text-stone-700
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-7 py-3
                        rounded-full
                        bg-[#b53a25]
                        text-white
                        font-medium
                        hover:scale-105
                        transition
                      "
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-7 py-3
                        rounded-full
                        border border-stone-300
                        bg-white/60
                        backdrop-blur-xl
                        text-stone-900
                        font-medium
                        hover:bg-white
                        transition
                      "
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

                {/* Browser Mockup */}

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <div
                    className="
                      bg-white
                      rounded-[24px]
                      overflow-hidden
                      shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                    "
                  >

                    {/* Browser Top */}

                    <div
                      className="
                        h-12
                        border-b
                        border-stone-200
                        flex
                        items-center
                        px-5
                        gap-2
                      "
                    >
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    {/* Screenshot */}

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;