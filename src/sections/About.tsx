import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Star, TrendingUp } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Pure Technology', desc: 'We harness cutting-edge creative technology to craft visuals that would normally require expensive photoshoots.' },
  { icon: Shield, title: 'Uncompromised Quality', desc: 'Every pixel is deliberate. Every visual is crafted to reflect your brand\'s highest potential.' },
  { icon: Star, title: 'Luxury at Your Rate', desc: 'Premium aesthetics shouldn\'t be reserved for Fortune 500 companies. We believe every brand deserves elite creative.' },
  { icon: TrendingUp, title: 'Growth-Focused', desc: 'Our creatives are built to convert, engage, and elevate — not just to look good.' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-arsenal-dark via-arsenal-blue/10 to-arsenal-dark" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-arsenal-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-px bg-arsenal-gold" />
              <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-gold">About Arsenal</span>
            </motion.div>

            <motion.h2
              className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              WHERE BRANDS
              <span className="block gradient-text-gold">BECOME ICONS</span>
            </motion.h2>

            <motion.p
              className="text-arsenal-silver text-lg leading-relaxed mb-6 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Arsenal is a premium creative powerhouse built for the next generation of brands. We exist at the intersection of luxury aesthetics and technological innovation — delivering brand visuals that stop scrolls, drive conversions, and build lasting identities.
            </motion.p>

            <motion.p
              className="text-arsenal-silver text-lg leading-relaxed mb-10 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The old way — expensive shoots, bloated agencies, month-long timelines — is dead. Arsenal delivers{' '}
              <span className="text-white font-medium">better quality, stronger uniqueness, and faster turnaround</span> at a fraction of traditional costs.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                '"no models, no photoshoots, no edits, just pure magic of tech"',
                '"Better quality and uniqueness at lower rates"',
              ].map((quote, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5">
                  <div className="w-1 h-1 rounded-full bg-arsenal-gold mt-2 flex-shrink-0" />
                  <span className="text-white/60 text-sm font-mono italic">{quote}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass rounded-xl p-6 card-hover group"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-arsenal-accent/10 border border-arsenal-accent/20 flex items-center justify-center mb-4 group-hover:bg-arsenal-accent/20 transition-colors">
                  <v.icon size={18} className="text-arsenal-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-wide">{v.title}</h3>
                <p className="text-arsenal-silver text-sm leading-relaxed font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
