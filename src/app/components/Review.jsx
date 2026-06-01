
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { reviews, brands } from "../data/data"





function ReviewCard({ review, index, total, scrollYProgress }) {
    const segment = 1 / total;
    const start = index * segment;
    const lock = start + segment * 0.7;

    const x = useTransform(scrollYProgress, [start, lock], [400, 0]);
    const opacity = useTransform(scrollYProgress, [start, lock], [0, 1]);
    const scale = useTransform(scrollYProgress, [start, lock], [0.9, 1]);

    return (
        <motion.div
            style={{ x, opacity, scale }}
            className="flex flex-col justify-between rounded-3xl border 
                 bg-white p-7 backdrop-blur-xl
                 shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
        >
            <p className="text-base leading-relaxed text-black">
                “{review.text}”
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-base font-semibold text-emerald-400">{review.name}</p>
                <p className="text-sm text-zinc-400">{review.role}</p>
            </div>
        </motion.div>
    );
}

const Review = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <>
            <section
                ref={containerRef}
                className="relative bg-gray-100 text-black"

                style={{ height: `${(reviews.length + 1) * 100}vh` }}
            >

                <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">

                    <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
                    <div className="relative z-50 mb-16 px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                            Client Reviews
                        </p>
                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            What Our Clients Say
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                            Real experiences from homeowners who trusted us for premium construction.
                        </p>
                    </div>

                    <div className="grid w-full max-w-7xl   grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
                        {reviews.map((r, i) => (
                            <ReviewCard
                                key={i}
                                review={r}
                                index={i}
                                total={reviews.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </section>




            <section className="relative overflow-hidden bg-gradient-to-b from-[#050705] via-[#070A08] to-[#050705] text-white py-24 px-6">

                <div className="absolute inset-0">
                    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-120px] right-[-80px] w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full"></div>
                </div>


                <div className="relative max-w-3xl mx-auto text-center mb-16">
                    <p className="text-xs tracking-[0.4em] uppercase text-emerald-400 font-medium">
                        Quality Materials
                    </p>

                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                        Brands We Trust
                    </h2>

                    <p className="mt-5 text-sm md:text-base text-zinc-400 leading-relaxed">
                        We partner with India’s most trusted brands to ensure every structure is built with
                        uncompromised strength, durability, and elegance.
                    </p>
                </div>

                <div className="relative space-y-8 overflow-hidden">


                    <div className="flex w-max animate-scroll-left gap-6">
                        {[...brands, ...brands].map((brand, i) => (
                            <div
                                key={i}
                                className="min-w-[180px] rounded-2xl border border-white/10
                    bg-white backdrop-blur-xl
                    px-6 py-5 text-center cursor-pointer
                    hover:border-emerald-400/40
                    hover:bg-gray-200
                    transition-all duration-300"
                            >
                                <span className="text-black text-sm md:text-base font-medium">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>


                    <div className="flex w-max animate-scroll-right gap-6">
                        {[...brands, ...brands].map((brand, i) => (
                            <div
                                key={i}
                                className="min-w-[180px] rounded-2xl border border-white/10
                    bg-white backdrop-blur-xl
                    px-6 py-5 text-center cursor-pointer
                    hover:border-emerald-400/40
                    hover:bg-gray-200
                    transition-all duration-300"
                            >
                                <span className="text-black text-sm md:text-base font-medium">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;


