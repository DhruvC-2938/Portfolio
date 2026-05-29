import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Website */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="overflow-x-hidden bg-stone-50"
        >

          {/* Progress Line */}
          <div
  className="
    hidden lg:block
    fixed
    left-24
    top-1/2
    -translate-y-1/2
    h-64
    w-[2px]
    bg-white/10
    z-40
    rounded-full
    overflow-hidden
    mix-blend-difference
  "
>
            <motion.div
              className="
                w-full
                bg-[#d16a4d]
                origin-top
              "
              style={{
                scaleY: scrollYProgress,
                height: '100%',
              }}
            />
          </div>

          {/* Components */}
          <Sidebar />
          <Navbar />

          <main>
            <Hero />
<SectionDivider />

<About />
<SectionDivider />

<Skills />
<SectionDivider />

<Projects />
<SectionDivider />

<GitHub />
<SectionDivider />

<Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;