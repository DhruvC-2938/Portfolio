import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        animate={{
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.2,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <p className="text-mono text-xs tracking-widest text-stone-300 mb-6">
              DEVELOPER & CREATOR
            </p>

            {/* Animated Name */}
            <motion.h1 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="block"
              >
                Dhruv
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="block italic"
              >
                Chavda
              </motion.span>
            </motion.h1>

            <p className="text-lg text-stone-200/90 leading-relaxed mb-10 max-w-md">
              B.Tech CSE student crafting beautiful interfaces,
              contributing to open source, and solving problems with code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                onClick={scrollToWork}
                style={{ willChange: 'transform' }}
                className="
                  px-10 py-3.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#8b1e1e]
                  via-[#a32020]
                  to-[#c62828]
                  text-white
                  font-semibold
                  tracking-[0.15em]
                  uppercase
                  shadow-lg
                  hover:shadow-xl
                  transition-colors duration-300
                "
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
              >
                Explore Work →
              </motion.button>

              <motion.a
  href="https://github.com/DhruvC-2938"
  target="_blank"
  rel="noopener noreferrer"
  style={{ willChange: 'transform' }}
  className="
    flex
    items-center
    justify-center

    px-10 py-3.5
    rounded-full
    border border-white/20
    bg-white/5
    backdrop-blur-xl

    text-white
    font-medium
    tracking-[0.1em]

    hover:bg-white/10
    hover:border-white/40
    transition-colors
    duration-300
  "
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    type: 'spring',
    stiffness: 400,
    damping: 20,
  }}
>
  GitHub
</motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-20 pt-12 relative z-10"
        >
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { number: '10', label: 'Projects Built' },
              { number: '500+', label: 'Open Source Contributions' },
              { number: '2+', label: 'Years Coding' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <p className="text-mono text-xs text-stone-300 mb-2">
                  — {stat.label}
                </p>

                <p className="text-2xl font-display font-bold text-white">
                  {stat.number}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.4em]
            uppercase
            text-white/60
            mb-3
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            w-[1px]
            h-10
            bg-white/50
          "
        />
      </motion.div>
    </section>
  );
};

export default Hero;