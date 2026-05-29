import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 22);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#140909]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          bg-[#a62b1f]/20
          blur-3xl
        "
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center px-6 text-center w-full max-w-4xl">

        {/* Small Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mb-6
            text-[10px]
            sm:text-[11px]
            uppercase
            tracking-[0.3em]
            sm:tracking-[0.55em]
            text-[#d8c7c2]
          "
        >
          Portfolio — 2026
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="
            text-white
            text-[3.8rem]
            sm:text-[5rem]
            md:text-[7rem]
            font-black
            italic
            tracking-tight
            leading-[0.9]
          "
          style={{
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          <span className="block">Dhruv</span>
          <span className="block">Chavda</span>
        </motion.h1>

        {/* Progress Section */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center">

          {/* Percentage */}
          <motion.p
            className="
              mb-3
              text-xs
              sm:text-sm
              tracking-[0.3em]
              text-[#e6d6d0]
            "
          >
            {progress}%
          </motion.p>

          {/* Line */}
          <div
            className="
              relative
              w-[200px]
              sm:w-[240px]
              h-[2px]
              bg-white/10
              overflow-hidden
              rounded-full
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: 'easeOut',
              }}
              className="
                absolute
                left-0
                top-0
                h-full
                bg-gradient-to-r
                from-[#ff6a3d]
                to-[#b32020]
              "
            />
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Loader;