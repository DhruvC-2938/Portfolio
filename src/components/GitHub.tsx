import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const GitHub = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="github"
      ref={ref}
      className="relative py-32 bg-stone-50 overflow-hidden"
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
        CODE
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-5">
            Beyond Projects
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.05]">
            Building.
            <br />
            Learning.
            <br />
            Growing.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-xl">
              Building projects is only part of the journey. I enjoy
              exploring new technologies, solving problems, and
              continuously improving my skills through hands-on
              development and experimentation.
            </p>

            <p className="text-lg text-stone-500 leading-relaxed mb-10 max-w-xl">
              Currently focused on modern frontend development,
              AI-powered applications, and creating digital
              experiences that are both functional and visually
              engaging.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Frontend Development',
                'AI Applications',
                'Problem Solving',
                'Modern UI Design',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#b53a25]" />
                  <span className="text-stone-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/DhruvC-2938"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#b53a25]
                text-white
                font-medium
                shadow-[0_10px_30px_rgba(181,58,37,0.25)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              View GitHub Profile ↗
            </a>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-0 lg:-mt-8">
              {[
                {
                  title: 'Projects Built',
                  value: '10+',
                },
                {
                  title: 'Years Coding',
                  value: '1+',
                  subtitle: 'Years & Counting',
                },
                {
                  title: 'Primary Stack',
                  value: 'React',
                },
                {
                  title: 'Current Focus',
                  value: 'AI + UI',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    bg-white
                    rounded-[28px]
                    border
                    border-stone-200
                    p-10
                    min-h-[180px]
                    shadow-sm
                  "
                >
                  <p className="text-stone-500 text-sm mb-4">
                    {item.title}
                  </p>

                  <h3 className="text-5xl font-bold text-stone-900">
                    {item.value}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-3 text-stone-500">
                      {item.subtitle}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Currently Exploring */}

            <motion.div
              whileHover={{ y: -5 }}
              className="
                bg-white
                rounded-[28px]
                border
                border-stone-200
                p-8
                shadow-sm
              "
            >
              <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-5">
                Currently Exploring
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Next.js',
                  'System Design',
                  'Framer Motion',
                  'AI Applications',
                  'Backend Development',
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-stone-100
                      text-stone-700
                      text-sm
                      font-medium
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <p
            className="
              text-2xl
              lg:text-3xl
              italic
              text-stone-700
              leading-relaxed
            "
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            "Great software is built through curiosity,
            consistency, and a willingness to keep learning."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHub;