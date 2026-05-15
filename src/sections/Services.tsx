import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Camera, Megaphone, Palette } from "lucide-react";

const services = [
    {
        icon: Palette,
        number: "01",
        title: "Brand Identity",
        subtitle: "Complete Visual Language",
        desc: "Logos, typography systems, color palettes, brand guidelines, and the full visual DNA that makes your brand unmistakable. We build identities that speak before a word is read.",
        tags: ["Logo Design", "Style Guide", "Typography", "Color System"],
        color: "from-blue-900/20 to-transparent",
        accent: "#1e6fff",
    },
    {
        icon: Camera,
        number: "02",
        title: "Product Creatives",
        subtitle: "Studio-Grade Visuals",
        desc: "Cinematic product imagery without a single photoshoot. Our technology crafts photo-realistic product visuals that outperform traditional photography in quality, flexibility, and cost.",
        tags: [
            "Product Shots",
            "3D Renders",
            "Lifestyle Scenes",
            "Packaging Views",
        ],
        color: "from-amber-900/20 to-transparent",
        accent: "#c9a84c",
    },
    {
        icon: Megaphone,
        number: "03",
        title: "Ad Creatives",
        subtitle: "Performance-Driven Design",
        desc: "High-converting ad creatives for every platform. Built on creative strategy, scroll science, and visual psychology — ads that click and convert at scale.",
        tags: ["Meta Ads", "Google Display", "Video Ads", "A/B Variants"],
        color: "from-violet-900/20 to-transparent",
        accent: "#8b5cf6",
    },
    {
        icon: Box,
        number: "04",
        title: "Brand Enhancement",
        subtitle: "Elevate the Existing",
        desc: "Already have a brand but feel it's fallen behind? We audit, refine, and modernize your existing visual identity to match your current ambition and market positioning.",
        tags: ["Brand Audit", "Visual Refresh", "Modernization", "Consistency"],
        color: "from-green-900/20 to-transparent",
        accent: "#22c55e",
    },
];

export default function Services() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section
            ref={ref}
            id="services"
            className="relative py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-arsenal-dark via-[#080c14] to-arsenal-dark" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                    >
                        <div className="w-6 h-px bg-arsenal-accent" />
                        <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-accent">
                            What We Do
                        </span>
                        <div className="w-6 h-px bg-arsenal-accent" />
                    </motion.div>

                    <motion.h2
                        className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        OUR <span className="gradient-text-blue">ARSENAL</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-arsenal-silver max-w-xl mx-auto font-body"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        Every service is built for brands that demand more —
                        more impact, more consistency, more value.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.number}
                            className={`relative rounded-2xl overflow-hidden glass card-hover cursor-pointer`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            data-hover
                        >
                            {/* Gradient bg */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 transition-opacity duration-500 ${hovered === i ? "opacity-100" : ""}`}
                            />

                            {/* Glow border on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                                style={{
                                    boxShadow: `inset 0 0 0 1px ${svc.accent}${hovered === i ? "40" : "15"}`,
                                    opacity: hovered === i ? 1 : 0.5,
                                }}
                            />

                            <div className="relative p-7">
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                                        style={{
                                            background: `${svc.accent}20`,
                                            border: `1px solid ${svc.accent}30`,
                                        }}
                                    >
                                        <svc.icon
                                            size={20}
                                            style={{ color: svc.accent }}
                                        />
                                    </div>
                                    <span className="font-mono text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        {svc.number}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl text-white mb-1 tracking-wide">
                                    {svc.title}
                                </h3>
                                <p
                                    className="text-xs tracking-widest uppercase font-mono mb-4"
                                    style={{ color: svc.accent }}
                                >
                                    {svc.subtitle}
                                </p>
                                <p className="text-arsenal-silver text-sm leading-relaxed mb-6 font-body">
                                    {svc.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {svc.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono rounded-full border transition-all duration-300"
                                            style={{
                                                borderColor: `${svc.accent}30`,
                                                color:
                                                    hovered === i
                                                        ? svc.accent
                                                        : "#8a8a8a",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
