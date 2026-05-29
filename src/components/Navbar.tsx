import { useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);

  const { scrollY } = useScroll();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setMobileMenuOpen(false);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      if (latest > previous) {
        if (latest > 40) setCompact(true);
        if (latest > 180) setVisible(false);
      } else {
        if (latest < 120) {
          setVisible(true);

          if (latest < 40) {
            setCompact(false);
          } else {
            setCompact(true);
          }
        } else {
          setVisible(false);
          setCompact(true);
        }
      }
    }
  });

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -120,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-4 left-0 right-0 z-50 px-4"
      >
        <div className="max-w-7xl mx-auto">

          {/* Desktop Navbar */}
          <motion.div
            layout
            className={`
              hidden md:flex
              items-center
              justify-between
              rounded-full
              border
              border-white/10
              bg-black/20
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              transition-all
              duration-300

              ${
                compact
                  ? 'px-8 py-3'
                  : 'px-10 py-4'
              }
            `}
          >
            {/* Logo */}
            <h1
              className="text-[1.9rem] italic font-semibold text-white"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Dhruv.
            </h1>

            {/* Links */}
            <div className="flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  whileHover={{ y: -2 }}
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    font-medium
                    text-white/80
                    hover:text-white
                    transition-colors
                    cursor-pointer
                  "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                px-7
                py-3
                rounded-full
                bg-gradient-to-r
                from-[#8b1e1e]
                to-[#b22222]
                text-white
                text-[11px]
                uppercase
                tracking-[0.3em]
                font-semibold
                shadow-[0_8px_25px_rgba(158,28,28,0.35)]
              "
            >
              LET'S TALK →
            </motion.button>
          </motion.div>

          {/* Mobile Navbar */}
          <div
            className="
              md:hidden
              flex
              items-center
              justify-between
              px-5
              py-4
              rounded-full
              border
              border-white/10
              bg-black/20
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.25)]
            "
          >
            <h1
              className="text-2xl italic font-semibold text-white"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Dhruv.
            </h1>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="
                  md:hidden
                  mt-3
                  rounded-3xl
                  bg-black/90
                  backdrop-blur-xl
                  border
                  border-white/10
                  overflow-hidden
                "
              >
                <div className="p-6 space-y-5">

                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="
                        block
                        w-full
                        text-left
                        text-white/80
                        hover:text-white
                        transition-colors
                      "
                    >
                      {link.name}
                    </button>
                  ))}

                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="
                      w-full
                      py-3
                      rounded-full
                      bg-gradient-to-r
                      from-[#8b1e1e]
                      to-[#b22222]
                      text-white
                      font-semibold
                    "
                  >
                    LET'S TALK →
                  </button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;