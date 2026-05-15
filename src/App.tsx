import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import MarqueeBand from './sections/MarqueeBand';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import WhyArsenal from './sections/WhyArsenal';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // GSAP scroll reveal for all sections
    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 15%',
          },
        }
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-arsenal-dark min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ParticleField />
      <Navbar />

      <main>
        <Hero />
        <MarqueeBand />
        <About />
        <MarqueeBand direction="right" accent />
        <Services />
        <Portfolio />
        <WhyArsenal />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
