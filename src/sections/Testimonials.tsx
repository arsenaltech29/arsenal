import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote: "Be the brand that sets the standard. We're just starting, but we're building something exceptional. Level up your creative identity with Arsenal and become the case study we showcase next.",
        author: "Arsenal Creative",
        role: "Founding Partner",
        stat: "Your brand here",
        isCTA: true,
    },
];

const trustLogos = [
    "NOVA",
    "APEX",
    "AURA",
    "FLUX",
    "TERRA",
    "ECLIPSE",
    "PRISM",
    "VAULT",
    "NOVA",
    "APEX",
    "AURA",
    "FLUX",
    "TERRA",
    "ECLIPSE",
    "PRISM",
    "VAULT",
];

export default function Testimonials() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            id="testimonials"
            className="relative py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-arsenal-dark via-[#050810] to-arsenal-dark" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-arsenal-blue-mid/20 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                    >
                        <div className="w-6 h-px bg-arsenal-gold" />
                        <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-gold">
                            Your Success Story
                        </span>
                        <div className="w-6 h-px bg-arsenal-gold" />
                    </motion.div>

                    <motion.h2
                        className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        BE THE BRAND
                        <span className="block gradient-text-gold">
                            THAT LEVELS UP
                        </span>
                    </motion.h2>
                </div>

                {/* Testimonial section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative">
                        <motion.div
                            className="glass rounded-2xl p-10 md:p-14"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Quote
                                size={40}
                                className="text-arsenal-gold/30 mb-6"
                            />
                            <p className="text-white text-xl md:text-2xl leading-relaxed font-body mb-10 italic">
                                "{testimonials[0].quote}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <div>
                                    <p className="font-display text-lg text-white">
                                        {testimonials[0].author}
                                    </p>
                                    <p className="text-xs text-arsenal-silver font-mono tracking-wide">
                                        {testimonials[0].role}
                                    </p>
                                </div>
                                <div className="glass-dark px-6 py-3 rounded-full">
                                    <span className="text-sm font-mono text-arsenal-gold font-medium">
                                        {testimonials[0].stat}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA below testimonial */}
                        <motion.div
                            className="mt-8 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-arsenal-silver font-body mb-4">
                                Ready to be our next success story?
                            </p>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="group inline-flex items-center gap-3 px-8 py-3 bg-arsenal-accent hover:bg-blue-500 text-white font-body text-sm tracking-widest uppercase transition-all duration-300 rounded-lg relative overflow-hidden"
                                data-hover
                            >
                                <span className="relative z-10">
                                    Get In Touch
                                </span>
                                <ArrowRight
                                    size={16}
                                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                                />
                                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Trust ticker */}
                <motion.div
                    className="border-y border-white/5 py-6 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="ticker-track flex gap-16 whitespace-nowrap">
                        {trustLogos.map((logo, i) => (
                            <span
                                key={i}
                                className="font-display text-2xl tracking-[0.3em] text-white/10 hover:text-white/20 transition-colors cursor-default flex-shrink-0"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
