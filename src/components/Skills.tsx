import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Code2, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
      gradient: 'from-blue-50 to-sky-50',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: [
        'C++',
        'Python',
        'Data Structures',
        'Algorithms',
        'Problem Solving',
      ],
      gradient: 'from-red-50 to-orange-50',
      iconColor: 'text-[#c84d2f]',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Figma',
        'Vite',
        'Node.js',
      ],
      gradient: 'from-violet-50 to-purple-50',
      iconColor: 'text-violet-500',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-[#fafaf8] overflow-hidden"
    >
      {/* Background Text */}
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
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">
            Skills & Expertise
          </p>

          <h2 className="text-display text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 leading-tight max-w-3xl">
            Technologies &
            <br />
            Tools I Use
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                  duration: 0.6,
                  delay: catIndex * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`
                  bg-gradient-to-br ${category.gradient}
                  rounded-[32px]
                  border border-stone-200
                  p-8
                  shadow-[0_15px_40px_rgba(0,0,0,0.05)]
                `}
              >
                <div className="flex items-center gap-4 mb-8">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-white
                      shadow-md
                      flex items-center justify-center
                    "
                  >
                    <Icon
                      size={26}
                      className={category.iconColor}
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-stone-900">
                      {category.title}
                    </h3>

                    <p className="text-stone-500">
                      {category.skills.length} Technologies
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/95
                        border
                        border-stone-200
                        text-stone-700
                        text-sm
                        font-medium
                        shadow-sm
                        hover:shadow-md
                        hover:scale-105
                        transition-all
                        duration-200
                        cursor-default
                      "
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-20
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-stone-900
            via-stone-800
            to-black
            p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-64
              w-64
              rounded-full
              bg-[#c84d2f]/20
              blur-2xl
            "
          />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
              Currently Learning
            </p>

            <p className="text-stone-400 mb-8 max-w-2xl">
              Continuously learning modern technologies,
              system architecture, and building products
              that scale.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                'Next.js',
                'System Design',
                'Cloud Computing',
                'AI / ML',
                'Backend Development',
              ].map((tech) => (
                <div
                  key={tech}
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    text-white
                    font-medium
                    hover:bg-white/15
                    hover:border-[#c84d2f]
                    hover:scale-105
                    transition-all
                    duration-200
                  "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;