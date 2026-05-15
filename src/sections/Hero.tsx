import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.radius = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.6 + 0.15;
    }

    update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
            this.vx *= -1;
            this.x = Math.max(
                this.radius,
                Math.min(canvasWidth - this.radius, this.x),
            );
        }

        if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
            this.vy *= -1;
            this.y = Math.max(
                this.radius,
                Math.min(canvasHeight - this.radius, this.y),
            );
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#f0f0f0";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            particlesRef.current = Array.from(
                { length: 300 },
                () => new Particle(canvas.width, canvas.height),
            );
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const animate = () => {
            ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);
            });

            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationIdRef.current !== null) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ position: "relative" }}
        >
            {/* Particle Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ display: "block" }}
            />

            {/* Background layers */}
            <div className="absolute inset-0">
                {/* Deep blue gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-arsenal-blue/30 via-arsenal-dark to-arsenal-dark" />
                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-arsenal-accent/5 blur-[120px]" />
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-arsenal-gold/4 blur-[80px]" />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-px bg-arsenal-accent" />
                    <span className="text-xs tracking-[0.35em] uppercase font-mono text-arsenal-accent">
                        Premium Creative Agency
                    </span>
                </div>

                {/* Main title */}
                <div className="mb-2">
                    <h1 className="font-display leading-none">
                        <div className="text-[clamp(5rem,14vw,13rem)] text-white tracking-wide block mb-[-0.1em]">
                            LEVEL
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-[clamp(5rem,14vw,13rem)] gradient-text-gold tracking-wide block">
                                UP
                            </div>
                        </div>
                        <div className="text-[clamp(5rem,14vw,13rem)] text-white tracking-wide block">
                            YOUR
                            <span className="ml-4 gradient-text-blue">
                                BRAND
                            </span>
                        </div>
                    </h1>
                </div>

                <div className="mt-6 mb-12 max-w-xl">
                    <p className="text-arsenal-silver text-lg leading-relaxed font-body">
                        No models. No photoshoots. No endless edits.{" "}
                        <span className="text-white">
                            Pure magic of technology
                        </span>{" "}
                        — premium branding visuals at rates that make sense for
                        ambitious brands.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <button
                        className="group flex items-center gap-3 px-8 py-4 bg-arsenal-accent hover:bg-blue-500 text-white font-body text-sm tracking-widest uppercase transition-all duration-300 rounded-sm relative overflow-hidden"
                        data-hover
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        <span className="relative z-10">
                            Start Your Transformation
                        </span>
                        <ArrowRight
                            size={16}
                            className="relative z-10 group-hover:translate-x-1 transition-transform"
                        />
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    </button>

                    <button
                        className="flex items-center gap-3 px-8 py-4 border border-white/15 hover:border-white/40 text-white/70 hover:text-white font-body text-sm tracking-widest uppercase transition-all duration-300 rounded-sm group"
                        data-hover
                        onClick={() =>
                            document
                                .getElementById("work")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-all">
                            <Play size={12} className="ml-0.5" />
                        </div>
                        View Our Work
                    </button>
                </div>

                {/* Stats row */}
                <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { num: "500+", label: "Brands Elevated" },
                        { num: "98%", label: "Client Satisfaction" },
                        { num: "3x", label: "Faster Delivery" },
                        { num: "60%", label: "Lower Cost" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1">
                            <span className="font-display text-4xl gradient-text-gold">
                                {stat.num}
                            </span>
                            <span className="text-xs tracking-widest uppercase text-arsenal-silver font-body">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
                    Scroll
                </span>
            </div>
        </section>
    );
}
