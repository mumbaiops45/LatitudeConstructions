"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { services } from "../data/data";

export default function Whywe() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });


    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 25,
        mass: 0.6,
    });

    return (
        <section ref={ref} className="relative bg-gray-100 text-black py-24">
            <div className="max-w-[1200px] mx-auto px-6 mb-20">
                <p className="text-xs tracking-[0.3em] uppercase text-emerald-400">
                    What We Do
                </p>

                <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mt-4">
                    Complete Construction{" "}
                    <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                        Solutions
                    </span>
                </h2>

                <p className="text-black mt-6 max-w-xl leading-7">
                    From eco-friendly farmhouses to premium villas — we handle every aspect of construction.
                </p>
            </div>

            <div className="relative h-[320vh]">
                <div className="sticky top-24 h-[80vh] flex items-center justify-center">
                    {services.map((s, i) => (
                        <ServiceCard
                            key={s.title}
                            s={s}
                            i={i}
                            progress={smoothScroll}
                            total={services.length}
                        />
                    ))}
                </div>
            </div>

            <div className="text-center mt-10">
                <a
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border bg-emerald-300 text-black border-white/10 px-8 py-3 text-sm hover:bg-emerald-400 hover:border-emerald-400/40 hover:text-black transition"
                >
                    Explore All Services <span className="text-emerald-400">→</span>
                </a>
            </div>
        </section>
    );
}

function ServiceCard({ s, i, progress, total }) {
    const start = i / total;
    const end = start + 1 / total;

    const y = useTransform(progress, [start, end], [260, -10]);
    const scale = useTransform(progress, [start, end], [0.92, 1]);
    // const opacity = useTransform(progress, [start, end], [0, 1]);
    const opacity = useTransform(
        progress,
        [start, start + (1 / total) * 0.15],   
        [0, 1]
    );

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                zIndex: i,
            }}
            className="absolute w-full max-w-[1100px] px-6"
        >
            <div className="relative bg-white text-black rounded-[30px]  overflow-hidden min-h-[420px]">
                <div className="h-[3px] w-full bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500" />

                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-10 sm:p-14">
                        <div className="w-[60px] h-[60px] rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl mb-6">
                            {s.icon}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                            {s.title}
                        </h3>

                        <p className="text-zinc-600 leading-8 text-base sm:text-lg">
                            {s.desc}
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-600">
                            Learn more
                            <span className="text-emerald-500 animate-pulse">→</span>
                        </div>
                    </div>

                    <div className="h-full min-h-[320px] md:min-h-[420px] overflow-hidden">
                        {s.image && (
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                            />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}