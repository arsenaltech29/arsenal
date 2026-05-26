import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioImages = [
    { id: 1, src: "/jewelry.jpg", alt: "Jewelry Project" },
    { id: 2, src: "/watermelon.PNG", alt: "Watermelon Project" },
    { id: 3, src: "/purse.PNG", alt: "Purse Project" },
    { id: 4, src: "/keychain.jpg", alt: "Keychain Project" },
    { id: 5, src: "/bowl1in.png", alt: "Bowl Project" },
    { id: 6, src: "/showergel.jpg", alt: "Shower Gel Project" },
    { id: 7, src: "/headphones.PNG", alt: "Headphones Project" },
    { id: 8, src: "/tableig.png", alt: "Table Project" },
    { id: 9, src: "/bowl2us.png", alt: "Bowl Project" },
    { id: 10, src: "/matcha.png", alt: "Matcha Project" },
    { id: 11, src: "/energydrink.png", alt: "Energy Drink Project" },
    { id: 12, src: "/chips.jpg", alt: "Chips Project" },
    { id: 13, src: "/chococoffee.png", alt: "Choco Coffee Project" },
    { id: 14, src: "/dessert.png", alt: "Dessert Project" },
    { id: 15, src: "/burger.jpg", alt: "Burger Project" },
    { id: 17, src: "/pista.png", alt: "Pista Project" },
    { id: 18, src: "/perfume.jpg", alt: "Perfume Project" },
    { id: 19, src: "/baggy.png", alt: "Baggy Project" },
    { id: 20, src: "/cafe-an.PNG", alt: "Cafe Project" },
    { id: 21, src: "/dress1.png", alt: "Dress Project" },
    { id: 22, src: "/lacoste.PNG", alt: "Lacoste Project" },
    { id: 23, src: "/puma.PNG", alt: "Puma Project" },
    { id: 24, src: "/purse-h.jpg", alt: "Purse Project" },
    { id: 25, src: "/shoes2.png", alt: "Shoes Project" },
];

interface ImageModal {
    id: number;
    src: string;
    alt: string;
    naturalWidth?: number;
    naturalHeight?: number;
}

export default function Collection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [selectedImage, setSelectedImage] = useState<ImageModal | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <section
            ref={ref}
            className="relative min-h-screen bg-arsenal-dark overflow-hidden pt-40 pb-32"
        >
            <div className="absolute inset-0 bg-arsenal-dark" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-arsenal-gold/3 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header with back button */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        to="/"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-arsenal-gold/50 hover:bg-arsenal-gold/10 transition-all duration-300 text-arsenal-gold"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
                        COMPLETE
                        <span className="block gradient-text">COLLECTION</span>
                    </h1>
                </div>

                <motion.p
                    className="text-arsenal-silver max-w-lg font-body text-sm leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    Explore our entire portfolio of creative works. Click any
                    image to view in full detail and discover the artistry
                    behind every creation.
                </motion.p>

                {/* Full Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolioImages.map((image, i) => (
                        <motion.div
                            key={image.id}
                            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square bg-arsenal-dark/50"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
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
