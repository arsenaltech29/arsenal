import Hero from "../sections/Hero";
import MarqueeBand from "../sections/MarqueeBand";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import WhyArsenal from "../sections/WhyArsenal";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function Home() {
    return (
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
    );
}
