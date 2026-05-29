import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'C++',
    'Open Source',
    'UI/UX',
    'Problem Solving',
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden"
    >
      {/* Background Text */}
      <div
        className="
          absolute
          right-10
          top-10
          text-[90px]
          xl:text-[180px]
          font-black
          text-stone-200/50
          pointer-events-none
          select-none
          hidden lg:block
        "
      >
        ABOUT
      </div>

      <div
        className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12"
        ref={ref}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-mono text-xs tracking-[0.3em] text-stone-500 mb-6"
        >
          ABOUT
        </motion.p>

        {/* Changed lg:grid-cols-2 to xl:grid-cols-2 */}
        <div className="grid xl:grid-cols-2 gap-10 xl:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Fixed responsive heading */}
            <h2
              className="
                text-display
                text-4xl
                sm:text-5xl
                lg:text-[4.5rem]
xl:text-[5rem]
                font-bold
                text-stone-900
                leading-[0.95]
                mb-10
              "
            >
              Building Digital
              <br />
              Experiences With
              <br />
              Code & Creativity
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              I'm a B.Tech CSE student passionate about building modern web
              applications. My journey started with curiosity about how
              software shapes the world and evolved into creating beautiful,
              functional digital experiences.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Specializing in React and modern frontend technologies, I enjoy
              contributing to open source projects and staying at the forefront
              of web development. Beyond code, I'm fascinated by AI, startups,
              and innovative digital products.
            </p>

            <p
              className="italic text-xl text-stone-500 mb-10"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              "Great products are not built by code alone.
              They are built by understanding people."
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-stone-300
                    bg-white
                    text-sm
                    text-stone-700
                    hover:border-stone-500
                    transition-all
                    duration-200
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Image */}
            <div
              className="
    relative
    mt-4
    max-w-[560px]
    mx-auto
  "
            >
              <img
                src="/about.jpeg"
                alt="Developer Workspace"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-2xl
                  shadow-xl
                "
              />

              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
                absolute
  bottom-6
  left-1/2
  -translate-x-1/2
  w-fit
                bg-white
                shadow-xl
                rounded-2xl
                px-6
                py-5
                border
                border-stone-200
              "
            >
              <div className="flex gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-stone-900">
                    10+
                  </h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Projects
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-stone-900">
                    100+
                  </h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Contributions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Corner Label */}
            <div
              className="
                 absolute
  bottom-36
  right-8
                text-mono
                text-xs
                tracking-[0.3em]
                font-bold
                text-stone-400
                pointer-events-none
              "
            >
              BUILD • LEARN • CREATE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;