import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const comparisons = [
    { label: "Turnaround", traditional: "4-8 weeks", arsenal: "3-7 days" },
    { label: "Cost", traditional: "High", arsenal: "50 to 60% less" },
    { label: "Revisions", traditional: "2–3 rounds", arsenal: "Unlimited" },
    { label: "Consistency", traditional: "Variable", arsenal: "Guaranteed" },
    { label: "Photoshoots", traditional: "Required", arsenal: "Never needed" },
    { label: "After Edits", traditional: "Required", arsenal: "Never needed" },
    { label: "Paid Models", traditional: "Required", arsenal: "Never needed" },
    { label: "Scalability", traditional: "Slow", arsenal: "Instant" },
    { label: "Regret on Investment", traditional: "Maybe", arsenal: "Never" },
];

const reasons = [
    {
        number: "01",
        title: "Premium Without the Premium Price",
        desc: "We've removed the most expensive parts of traditional creative production without sacrificing a single pixel of quality. You get luxury-agency output at a price that makes business sense.",
    },
    {
        number: "02",
        title: "Technology as a Superpower",
        desc: "Our creative process leverages the most advanced creative technology available — tools that didn't exist five years ago, wielded by experts who understand both craft and strategy.",
    },
    {
        number: "03",
        title: "Brand-First Thinking",
        desc: "We don't create pretty visuals in isolation. Every asset is crafted with your full brand ecosystem in mind — ensuring consistency, coherence, and compounding impact.",
    },
    {
        number: "04",
        title: "Faster Growth, Proven Results",
        desc: "Brands that work with Arsenal see measurable results: higher engagement, stronger brand recall, improved ad performance, and faster market penetration.",
    },
];

export default function WhyArsenal() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            id="why-us"
            className="relative py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-arsenal-dark via-arsenal-blue/10 to-arsenal-dark" />
            <div className="absolute left-0 top-1/3 w-80 h-80 bg-arsenal-accent/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                    >
                        <div className="w-6 h-px bg-arsenal-accent" />
                        <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-accent">
                            Why Choose Us
                        </span>
                        <div className="w-6 h-px bg-arsenal-accent" />
                    </motion.div>

                    <motion.h2
                        className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        WHY <span className="gradient-text-gold">ARSENAL</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Reasons */}
                    <div className="flex flex-col gap-8">
                        {reasons.map((r, i) => (
                            <motion.div
                                key={r.number}
                                className="flex gap-6 group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <div className="flex-shrink-0">
                                    <span className="font-display text-5xl text-white/8 group-hover:text-arsenal-accent/30 transition-colors duration-500">
                                        {r.number}
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-heading text-xl font-semibold text-white mb-2 tracking-wide">
                                        {r.title}
                                    </h3>
                                    <p className="text-arsenal-silver font-body leading-relaxed text-sm">
                                        {r.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Comparison table */}
                    <motion.div
                        className="glass rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="grid grid-cols-3 border-b border-white/5">
                            <div className="py-4 px-5 text-xs tracking-widest uppercase font-mono text-white/30">
                                Metric
                            </div>
                            <div className="py-4 px-5 text-xs tracking-widest uppercase font-mono text-white/30 border-x border-white/5">
                                Traditional
                            </div>
                            <div className="py-4 px-5 text-xs tracking-widest uppercase font-mono text-arsenal-accent text-center">
                                Arsenal
                            </div>
                        </div>

                        {comparisons.map((row, i) => (
                            <motion.div
                                key={row.label}
                                className={`grid grid-cols-3 border-b border-white/5 last:border-none transition-colors duration-300 hover:bg-white/2`}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4 + i * 0.06 }}
                            >
                                <div className="py-4 px-5 text-sm font-body text-white/60">
                                    {row.label}
                                </div>
                                <div className="py-4 px-5 text-sm font-body text-white/30 border-x border-white/5 flex items-center gap-2">
                                    <XCircle
                                        size={12}
                                        className="text-red-500/50 flex-shrink-0"
                                    />
                                    {row.traditional}
                                </div>
                                <div className="py-4 px-5 text-sm font-body text-arsenal-accent flex items-center justify-center gap-2 font-medium">
                                    <CheckCircle
                                        size={12}
                                        className="text-arsenal-accent flex-shrink-0"
                                    />
                                    {row.arsenal}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
