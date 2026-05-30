

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";



const CARRIAGES = [
    { id: "badge", delay: 0.0 },
    { id: "heading", delay: 0.35 },
    { id: "desc", delay: 0.75 },
    { id: "stats", delay: 1.1 },
    { id: "buttons", delay: 1.45 },
];


const TRAIN_EASE = [0.16, 1, 0.3, 1];

const carriageVariants = {
    hidden: {
        x: -80,
        opacity: 0,
    },
    visible: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.85,
            delay,
            ease: TRAIN_EASE,
        },
    }),
};



export default function Hero() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);



    const [trackScale, setTrackScale] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), 100);
        const t2 = setTimeout(() => setTrackScale(1), 300);
        return () => { clearTimeout(t); clearTimeout(t2); };
    }, []);

    return (
        <section
            ref={ref}
            className="relative min-h-screen bg-[#070707] overflow-hidden flex items-center"
        >
            <style>{`
        
        /* Track connector dots pulse once on appear */
        @keyframes dotPulse {
          0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          60%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .dot-pulse { animation: dotPulse 0.6s ease-out forwards; }

        /* Carriage hover: subtle float */
        .carriage:hover { transform: translateX(4px); }
        .carriage { transition: transform 0.4s ease; }
      `}</style>


            <motion.div style={{ y: yBg }} className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,#0f2a1a_0%,#070707_65%)]" />

                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#22c55a22_1px,transparent_1px),linear-gradient(90deg,#22c55a22_1px,transparent_1px)] bg-[size:80px_80px]" />

                <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="100%" x2="40%" y2="0" stroke="#22c55e" strokeWidth="1" />
                    <line x1="20%" y1="100%" x2="70%" y2="0" stroke="#22c55e" strokeWidth="1" />
                </svg>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 w-full"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


                    <motion.div style={{ y: yText }} className="relative font-body">

                        <motion.div
                            className="carriage mb-6 pl-0"
                            variants={carriageVariants}
                            initial="hidden"
                            animate={started ? "visible" : "hidden"}
                            custom={CARRIAGES[0].delay}
                        >
                            <div className="inline-flex items-center gap-2">

                                <motion.div
                                    animate={started ? { x: ["-200%", "0%"] } : {}}
                                    transition={{ delay: 0.05, duration: 0.7, ease: TRAIN_EASE }}
                                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                                />
                                <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-green-400/80 font-medium">
                                    Luxury Farmhouse Developers
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="carriage mb-6"
                            variants={carriageVariants}
                            initial="hidden"
                            animate={started ? "visible" : "hidden"}
                            custom={CARRIAGES[1].delay}
                        >
                            <h1 className="font-display text-[48px] sm:text-[58px] lg:text-[68px] xl:text-[80px] font-light leading-[1.05] tracking-[-0.01em] text-white">
                                Crafting
                                <br />
                                Architectural
                                <br />
                                <span className="italic text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(135deg, #4ade80 0%, #86efac 60%, #d1fae5 100%)" }}
                                >
                                    Masterpieces
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            className="carriage mb-8 sm:mb-10"
                            variants={carriageVariants}
                            initial="hidden"
                            animate={started ? "visible" : "hidden"}
                            custom={CARRIAGES[2].delay}
                        >
                            <p className="max-w-md text-zinc-400 leading-7 sm:leading-8 text-sm sm:text-base lg:text-[17px] font-light border-l border-green-500/20 pl-4">
                                We design premium eco-luxury farmhouses across Bangalore &amp; Hosur with
                                architectural precision, natural harmony, and timeless craftsmanship.
                            </p>
                        </motion.div>

                        <motion.div
                            className="carriage mb-10 sm:mb-12"
                            variants={carriageVariants}
                            initial="hidden"
                            animate={started ? "visible" : "hidden"}
                            custom={CARRIAGES[3].delay}
                        >
                            <div className="flex gap-8 sm:gap-10 lg:gap-12">
                                {[
                                    { value: "12+", label: "Years" },
                                    { value: "150+", label: "Projects" },
                                    { value: "₹2100", label: "/ sq.ft" },
                                ].map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={started ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: CARRIAGES[3].delay + 0.1 + i * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -4 }}
                                        className="group cursor-default"
                                    >
                                        <p className="font-display text-3xl sm:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-300">
                                            {s.value}
                                        </p>
                                        <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 tracking-wide">{s.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="carriage"
                            variants={carriageVariants}
                            initial="hidden"
                            animate={started ? "visible" : "hidden"}
                            custom={CARRIAGES[4].delay}
                        >

                            <div className="flex flex-row flex-nowrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.03, backgroundClip: "#4ade80" }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap"
                                >
                                    Free Consulation
                                    <span className="text-base">→</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{
                                        scale: 1.03,
                                        borderColor: "rgba(74,222,128,0.5)",
                                        color: "#000000",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    href="/projects"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border bg-white border-white/10 text-black text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap"
                                >
                                    View Work
                                    <span className="text-base">→</span>
                                </motion.a>

                            </div>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={started ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.6, duration: 1.1, ease: TRAIN_EASE }}
                        className="relative mt-8 lg:mt-0"
                    >

                        <motion.div
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-6 sm:-inset-10 bg-green-500/8 blur-[80px] sm:blur-[120px] rounded-[50px]"
                        />
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="relative rounded-2xl sm:rounded-[28px] overflow-hidden border border-white/[0.07]"
                        >
                            <img
                                src="/brickhome.jpg"
                                alt="Eco Luxury Villa"
                                className="h-[360px] sm:h-[460px] lg:h-[520px] w-full object-cover"
                                style={{ transform: "scale(1.03)" }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-green-400/30 to-transparent" />
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={started ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 2.0, duration: 0.6 }}
                                className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 flex items-end justify-between"
                            >
                                <div>
                                    <p className="font-body text-[9px] sm:text-[10px] tracking-[0.35em] text-green-400/80 uppercase mb-1">
                                        Featured Project
                                    </p>
                                    <h3 className="font-display text-lg sm:text-2xl text-white font-light">
                                        Eco Luxury Villa
                                    </h3>
                                </div>
                                <div className="flex-shrink-0 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm">
                                    <span className="font-body text-[10px] text-white/50 tracking-wide">Bangalore</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={started ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ delay: 2.2, duration: 0.6, ease: "backOut" }}
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-10 bg-[#0d1a0d] border border-white/[0.07] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="font-body text-[9px] sm:text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Active Projects</span>
                            </div>
                            <p className="font-display text-2xl sm:text-3xl text-white font-light">24</p>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
        </section>
    );
}