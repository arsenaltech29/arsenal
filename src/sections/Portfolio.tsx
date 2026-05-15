import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const portfolioImages = [
    { id: 1, src: "/jewelry.jpg", alt: "Jewelry Project" },
    { id: 2, src: "/watermelon.PNG", alt: "Watermelon Project" },
    { id: 3, src: "/purse.PNG", alt: "Purse Project" },
    { id: 4, src: "/keychain.jpg", alt: "Keychain Project" },
    { id: 5, src: "/chips.jpg", alt: "Chips Project" },
    { id: 6, src: "/showergel.jpg", alt: "Shower Gel Project" },
    { id: 7, src: "/headphones.PNG", alt: "Headphones Project" },
    { id: 8, src: "/perfume.jpg", alt: "Perfume Project" },
    { id: 9, src: "/burger.jpg", alt: "Burger Project" },
];

interface ImageModal {
    id: number;
    src: string;
    alt: string;
    naturalWidth?: number;
    naturalHeight?: number;
}

export default function Portfolio() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [selectedImage, setSelectedImage] = useState<ImageModal | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    useEffect(() => {
        if (selectedImage) {
            const img = new Image();
            img.onload = () => {
                setImageDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                });
            };
            img.src = selectedImage.src;
        }
    }, [selectedImage]);

    const handleImageClick = (image: ImageModal) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setImageDimensions(null);
    };

    return (
        <section ref={ref} id="work" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-arsenal-dark" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-arsenal-gold/3 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                        >
                            <div className="w-6 h-px bg-arsenal-gold" />
                            <span className="text-xs tracking-[0.3em] uppercase font-mono text-arsenal-gold">
                                Our Work
                            </span>
                        </motion.div>

                        <motion.h2
                            className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 }}
                        >
                            THE
                            <span className="block gradient-text">
                                SHOWCASE
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-arsenal-silver max-w-xs font-body text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        A glimpse at the creative excellence we bring to every
                        project. Click any image to view in full detail.
                    </motion.p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolioImages.map((image, i) => (
                        <motion.div
                            key={image.id}
                            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square bg-arsenal-dark/50"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            onClick={() => handleImageClick(image)}
                            data-hover
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                            {/* Accent glow on hover */}
                            <div className="absolute inset-0 border border-arsenal-accent/0 group-hover:border-arsenal-accent/40 rounded-xl transition-all duration-300" />

                            {/* View indicator */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-white/60 ml-1" />
                                    </div>
                                    <span className="text-white/60 text-xs font-mono tracking-widest uppercase">
                                        View
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dynamic Modal - Responsive to image dimensions */}
            <AnimatePresence>
                {selectedImage && imageDimensions && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

                        <motion.div
                            className="relative z-10 rounded-2xl overflow-hidden glass max-w-[90vw] max-h-[90vh]"
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                aspectRatio: `${imageDimensions.width} / ${imageDimensions.height}`,
                            }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-full object-contain"
                            />

                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-200 backdrop-blur-md hover:scale-110"
                                onClick={closeModal}
                                data-hover
                            >
                                <X size={20} className="text-white" />
                            </button>

                            {/* Image info */}
                            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/60 font-mono">
                                {imageDimensions.width} ×{" "}
                                {imageDimensions.height}px
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
