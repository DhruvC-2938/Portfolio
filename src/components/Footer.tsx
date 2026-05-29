import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-mono text-xs tracking-widest text-stone-400 mb-4">NAVIGATION</p>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-mono text-xs tracking-widest text-stone-400 mb-4">TECH STACK</p>
            <ul className="space-y-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'C++'].map((item) => (
                <li key={item}>
                  <span className="text-stone-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-mono text-xs tracking-widest text-stone-400 mb-4">SOCIAL</p>
            <ul className="space-y-2">
              {[
                { name: 'GitHub', url: 'https://github.com/dhruvchavda' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/dhruvchavda' },
                { name: 'Instagram', url: 'https://instagram.com/dhruv_chavda' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-mono text-xs tracking-widest text-stone-400 mb-4">INFO</p>
            <p className="text-stone-400 text-sm">Designed and built by Dhruv Chavda</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-mono text-xs text-stone-500">
            DC © {currentYear} — All rights reserved
          </p>
          <p className="text-mono text-xs text-stone-500">
            CRAFTED WITH CODE & CREATIVITY
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
