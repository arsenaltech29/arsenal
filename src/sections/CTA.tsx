import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Instagram, Copy } from "lucide-react";

export default function CTA() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const templateRef = useRef<HTMLDivElement>(null);

    const emailTemplate = `Subject: Brand Elevation Inquiry - [YOUR BRAND NAME]

Hi Arsenal,

I'm reaching out to explore how you can help elevate my brand through your premium creative services.

**Brand Details:**
- Brand Name: [Your Brand Name]
- Product/Service: [What you sell/offer]
- Website: [Your website URL or "N/A" if not yet live]

**What I'm Looking For:**
[Describe what you need - e.g., "Product photography for our new collection", "Complete brand identity redesign", "Social media campaign assets", etc.]

**Additional Context:**
[Any other details that might be helpful]

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Contact Number]`;

    const copyTemplate = () => {
        navigator.clipboard.writeText(emailTemplate);
        alert("Email template copied to clipboard!");
    };

    return (
        <section
            ref={ref}
            id="contact"
            className="relative py-32 overflow-hidden"
        >
            {/* Cinematic background */}
            <div className="absolute inset-0 bg-gradient-to-b from-arsenal-dark to-arsenal-blue/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-arsenal-blue/5 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-arsenal-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-arsenal-gold/20 to-transparent" />

            {/* Ambient orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-arsenal-accent/8 rounded-full blur-[80px] pulse-glow" />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-arsenal-gold/6 rounded-full blur-[100px] pulse-glow"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                    >
                        <div className="w-6 h-px bg-arsenal-accent" />
                        <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-accent">
                            Get In Touch
                        </span>
                        <div className="w-6 h-px bg-arsenal-accent" />
                    </motion.div>

                    <motion.h2
                        className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-none mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="text-white">READY TO</span>
                        <span className="block gradient-text-gold">
                            LEVEL UP?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-arsenal-silver text-lg max-w-lg mx-auto font-body leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        Your brand's transformation starts with a conversation.
                        Reach out to us directly and let's create magic
                        together.
                    </motion.p>
                </div>

                {/* Contact Details */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    {/* Email Card */}
                    <div className="glass rounded-2xl p-8 flex flex-col items-center text-center hover:border-arsenal-accent/30 transition-all">
                        <Mail size={40} className="text-arsenal-accent mb-4" />
                        <h3 className="font-display text-2xl text-white mb-2">
                            Email
                        </h3>
                        <a
                            href="mailto:arsenal.reachout@gmail.com"
                            className="text-arsenal-gold hover:text-arsenal-gold/80 transition-colors font-body text-lg break-all"
                        >
                            arsenal.reachout@gmail.com
                        </a>
                        <p className="text-arsenal-silver text-sm mt-3">
                            Response within 24 hours
                        </p>
                    </div>

                    {/* Instagram Card */}
                    <div className="glass rounded-2xl p-8 flex flex-col items-center text-center hover:border-arsenal-accent/30 transition-all">
                        <Instagram
                            size={40}
                            className="text-arsenal-accent mb-4"
                        />
                        <h3 className="font-display text-2xl text-white mb-2">
                            Instagram
                        </h3>
                        <a
                            href="https://instagram.com/vedxnt_2912"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-arsenal-gold hover:text-arsenal-gold/80 transition-colors font-body text-lg"
                        >
                            @vedxnt_2912
                        </a>
                        <p className="text-arsenal-silver text-sm mt-3">
                            Follow for updates & showcases
                        </p>
                    </div>
                </motion.div>

                {/* Email Template */}
                <motion.div
                    className="glass rounded-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className="font-display text-2xl text-white mb-4 flex items-center gap-3">
                        <span className="w-8 h-px bg-arsenal-accent" />
                        Email Template
                    </h3>
                    <p className="text-arsenal-silver text-sm mb-4">
                        Copy and paste this template, fill in your details, and
                        send it to the email above:
                    </p>

                    <div
                        ref={templateRef}
                        className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4 overflow-auto max-h-96 font-mono text-xs text-arsenal-silver leading-relaxed"
                    >
                        <pre className="whitespace-pre-wrap break-words">
                            {emailTemplate}
                        </pre>
                    </div>

                    <button
                        onClick={copyTemplate}
                        className="group flex items-center gap-3 px-8 py-3 bg-arsenal-accent hover:bg-blue-500 text-white font-body text-sm tracking-widest uppercase transition-all duration-300 rounded-lg relative overflow-hidden"
                    >
                        <span className="relative z-10">Copy Template</span>
                        <Copy
                            size={16}
                            className="relative z-10 group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                </motion.div>

                {/* Bottom mottos */}
                <motion.div
                    className="mt-16 grid md:grid-cols-3 gap-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                >
                    {[
                        { icon: "⚡", text: "Level Up with Arsenal" },
                        { icon: "✦", text: "Better quality at lower rates" },
                        { icon: "◆", text: "Pure magic of technology" },
                    ].map((item) => (
                        <div
                            key={item.text}
                            className="flex items-center justify-center gap-2"
                        >
                            <span className="text-arsenal-gold text-sm">
                                {item.icon}
                            </span>
                            <span className="text-xs tracking-widest uppercase font-mono text-white/30">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
