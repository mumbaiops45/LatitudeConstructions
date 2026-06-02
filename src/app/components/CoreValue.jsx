
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
    { title: "Vision", desc: "We think long term and build with clarity." },
    { title: "Innovation", desc: "We embrace creativity and new ideas." },
    { title: "Integrity", desc: "We do what is right, always." },
    { title: "Teamwork", desc: "We grow together as one unit." },
    { title: "Excellence", desc: "We push for the best outcomes." },
    { title: "Growth", desc: "We continuously evolve and improve." },
];

export default function CoreValue() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });


    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(values.length - 1) * 100}%`]

    );



    return (

        <div className=" bg-gradient-to-br from-[#0f172a] via-[#16342b] to-[#0b2a22]">
            <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
                <p className="text-sm uppercase tracking-widest text-zinc-400">
                    What We Stand For
                </p>

                <h1 className="mt-4 text-4xl text-emerald-400 md:text-6xl font-semibold">
                    Our Core Values
                </h1>

                <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                    Six principles that guide every decision we make — from the materials
                    we source to the way we treat our clients.
                </p>
            </div>
            <div ref={ref} className="relative h-[600vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex h-full w-full"
                    >
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="min-w-full h-screen flex  items-center justify-center"
                            >
                                <motion.div
                                    className="w-96 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-lg">
                                        {i + 1}
                                    </div>

                                    <h2 className="text-2xl text-emerald-400 font-bold mb-2">
                                        {v.title}
                                    </h2>

                                    <p className="text-zinc-400 leading-relaxed">
                                        {v.desc}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>

    );
}
