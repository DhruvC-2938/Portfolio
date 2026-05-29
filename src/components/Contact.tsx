import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const contacts = [
    {
      title: 'GitHub',
      value: 'github.com/DhruvC-2938',
      link: 'https://github.com/DhruvC-2938',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/dhruvchavda2938',
      link: 'https://www.linkedin.com/in/dhruvchavda2938/',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Text */}

      <div
  className="
    absolute
    right-10
    -top-6
    text-[40px]
    xl:text-[160px]
    font-black
    text-stone-200/50
    pointer-events-none
    select-none
    hidden lg:block
  "
>
  CONTACT
</div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-green-50
                border
                border-green-200
                text-green-700
                text-sm
                mb-8
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available For Opportunities
            </div>

            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.05] mb-8">
              Let's Create
              <br />
              Something
              <br />
              Meaningful.
            </h2>

            <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-xl">
              Whether it's a project, internship opportunity,
              startup idea, or simply a conversation about
              technology, I'm always open to connecting with
              passionate people.
            </p>

            <a
              href="mailto:chavdadhruv29308@gmail.com"
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
              Start A Conversation →
            </a>

            <motion.a
  href="mailto:chavdadhruv29308@gmail.com"
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20,
  }}
  className="
    mt-12
    block
    bg-stone-50
    border
    border-stone-200
    rounded-[28px]
    p-6
  "
>
  <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-2">
    Preferred Contact
  </p>

  <div className="flex items-center justify-between">
    <p className="text-lg font-semibold text-stone-900">
      chavdadhruv29308@gmail.com
    </p>

    <span className="text-[#b53a25] text-xl">
      →
    </span>
  </div>

  <p className="mt-3 text-sm text-stone-500">
    Usually responds within 24 hours.
  </p>
</motion.a>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-5 lg:mt-48 mt-10"
          >
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  block
                  bg-stone-50
                  border
                  border-stone-200
                  rounded-[28px]
                  p-6
                  transition-all
                "
              >
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-2">
                  {item.title}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-stone-900">
                    {item.value}
                  </p>

                  <span className="text-[#b53a25] text-xl">
                    →
                  </span>
                </div>
              </motion.a>
            ))}

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="
                bg-gradient-to-br
                from-[#b53a25]/5
                to-[#b53a25]/10
                border
                border-[#b53a25]/20
                rounded-[28px]
                p-6
              "
            >
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4">
                Availability
              </p>

              <div className="space-y-3 text-stone-700">
                <p>✓ Open For Internships</p>
                <p>✓ Open Source Collaboration</p>
                <p>✓ Freelance Projects</p>
                <p>✓ Remote Opportunities</p>
              </div>

              <div className="mt-5 text-sm text-stone-500">
                📍 Mumbai, India
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
            delay: 0.2,
          }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <p
            className="
              text-2xl
              lg:text-4xl
              italic
              text-stone-700
              leading-relaxed
            "
          >
            "Every great product starts with a simple conversation."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;