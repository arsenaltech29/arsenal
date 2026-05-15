import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = {
    Services: [
        "Brand Identity",
        "Product Creatives",
        "Ad Creatives",
        "Brand Enhancement",
    ],
    Company: ["About", "Our Work", "Why Arsenal", "Testimonials", "Contact"],
    Connect: [
        "Instagram",
        "Twitter / X",
        "LinkedIn",
        "arsenal.reachout@gmail.com",
    ],
};

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[#050505]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-7 h-7 relative">
                                <div className="absolute inset-0 border-2 border-white rotate-45 rounded-sm" />
                                <div className="absolute inset-1 bg-arsenal-accent rotate-45 rounded-sm" />
                            </div>
                            <span className="font-display text-2xl tracking-widest text-white">
                                ARSENAL
                            </span>
                        </div>

                        <p className="text-arsenal-silver text-sm leading-relaxed mb-6 font-body max-w-xs">
                            Premium creative branding for ambitious brands. No
                            photoshoots, no edits — just pure magic.
                        </p>

                        <div className="flex gap-3">
                            {[Instagram, Twitter, Linkedin, Mail].map(
                                (Icon, i) => (
                                    <motion.button
                                        key={i}
                                        className="w-9 h-9 glass rounded-lg flex items-center justify-center text-arsenal-silver hover:text-white hover:border-arsenal-accent/30 transition-all duration-300"
                                        whileHover={{ y: -2 }}
                                        data-hover
                                    >
                                        <Icon size={15} />
                                    </motion.button>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-xs tracking-[0.3em] uppercase font-mono text-white/30 mb-5">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <button className="text-sm text-arsenal-silver hover:text-white transition-colors duration-200 font-body group flex items-center gap-1">
                                            {item}
                                            <ArrowUpRight
                                                size={10}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/20 font-mono tracking-wide">
                        © 2025 Arsenal Creative Studio. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-white/20 tracking-widest">
                            LEVEL UP WITH ARSENAL
                        </span>
                        <motion.button
                            onClick={scrollTop}
                            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-all"
                            whileHover={{ y: -2 }}
                            data-hover
                        >
                            ↑
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
