import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = ['About', 'Services', 'Work', 'Why Us', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const scrollTo = (section: string) => {
    const id = section.toLowerCase().replace(/\s/g, '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-3' : 'py-6'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 border-2 border-white rotate-45 rounded-sm" />
              <div className="absolute inset-1 bg-arsenal-accent rotate-45 rounded-sm" />
            </div>
            <span className="font-display text-2xl tracking-widest text-white">ARSENAL</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm font-body text-arsenal-silver hover:text-white transition-colors duration-300 tracking-widest uppercase relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-arsenal-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              className="px-5 py-2 text-xs tracking-widest uppercase font-body border border-white/20 hover:border-white/60 text-white/80 hover:text-white transition-all duration-300 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('Contact')}
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setMenuOpen(v => !v)}
            data-hover
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
        style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-display text-5xl tracking-widest text-white hover:text-arsenal-accent transition-colors"
              animate={{ y: menuOpen ? 0 : 20, opacity: menuOpen ? 1 : 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {link}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
