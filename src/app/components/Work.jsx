
"use client"

import React from 'react'
import { projects, whyUs } from '../data/data'
import { motion } from 'framer-motion'


const C = {

    bg: '#080d08',
    bgAlt: '#0b120b',
    card: '#0f160f',
    cardHover: '#141e14',
    surface: '#131a13',


    border: '#1c2a1c',
    borderMd: '#243c24',
    borderHi: 'rgba(92,184,46,0.38)',


    green: '#5cb82e',
    greenLight: '#78d44a',
    greenDark: '#3a7a1c',
    greenDim: 'rgba(92,184,46,0.08)',
    greenGlow: 'rgba(92,184,46,0.22)',


    gold: '#c9a84c',
    goldLight: '#e0c070',
    goldDim: 'rgba(201,168,76,0.14)',

    text1: '#eaf2ea',
    text2: '#eaf2ea',
    text3: '#fffff',
    textInvert: '#080d08',


    overlay: 'rgba(5,10,5,0.88)',
}


function Label({ children }) {
    return (
        <motion.div variants={fadeIn} custom={0}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 36, background: `linear-gradient(to right, ${C.green}, transparent)` }} />
            <span style={{
                fontSize: 11, letterSpacing: '0.32em',
                textTransform: 'uppercase', color: C.green,
            }}>{children}</span>
        </motion.div>
    )
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (d = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: d } }),
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 56 },
    visible: (d = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
}



const Work = () => {
    return (
        <div>

            <section className="relative overflow-hidden bg-[#0b120c] py-8 px-6">

                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <span className="inline-block rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-green-400 backdrop-blur-md">
                            Our Work
                        </span>

                        <h2 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
                            Farmhouses & Villas
                            <br />
                            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-yellow-200 bg-clip-text text-transparent">
                                We&apos;ve Built
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                            A glimpse into our craftsmanship — projects where luxury meets
                            timeless architecture.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -8 }}
                                className={"group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"}
                            >

                                <div className="relative h-[420px] overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />


                                    <div className="absolute left-0 top-0 h-28 w-28 rounded-br-[40px] bg-gradient-to-br from-green-400/40 to-transparent blur-sm" />


                                    <div className="absolute bottom-0 left-0 w-full p-7">
                                        <span className="inline-flex rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-green-300 backdrop-blur-md">
                                            {p.tag}
                                        </span>

                                        <h3 className="mt-4 text-2xl font-semibold text-white">
                                            {p.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-300">
                                            {p.loc}
                                        </p>

                                        <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-green-400 to-yellow-200 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/portfolio"
                            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-green-400/30 hover:bg-green-500/10 hover:text-white"
                        >
                            View All Projects
                            <span className="text-green-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-16 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-[500px_1fr] gap-20">
                        <div className="lg:sticky lg:top-24 h-fit">
                            <Label>Why Us</Label>
                            <motion.h2
                                variants={fadeUp}
                                className="mt-6 mb-6 text-4xl md:text-5xl font-light leading-tight text-black"
                            >
                                Built on Trust,
                                <br />
                                Delivered with
                                <br />
                                <span className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">
                                    Integrity
                                </span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                custom={0.1}
                                className="max-w-xl text-[15px] leading-8 text-zinc-500"
                            >
                                We don't just build structures — we build lasting
                                relationships through quality, transparency, and
                                unwavering commitment to your dream.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                custom={0.2}
                                className="mt-10"
                            >
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-105"
                                >
                                    Start Your Project →
                                </a>
                            </motion.div>
                        </div>


                        <div className="space-y-6">
                            {whyUs.map((w, i) => (
                                <motion.div
                                    key={w.title}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.1,
                                    }}
                                    whileHover={{

                                    }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gray-200 p-8 shadow-sm transition-all 
                                    duration-500 
                                    hover: border-[2px]
                                    hover:border-green-400">
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-2xl text-white shadow-lg">
                                            {w.icon}
                                        </div>
                                        <h3 className="mb-4 text-2xl font-semibold text-black">
                                            {w.title}
                                        </h3>
                                        <p className="text-[15px] leading-8 text-zinc-600">
                                            {w.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>



            <section className="relative overflow-hidden py-24 bg-[#070A08] text-white">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">

                    <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-sm">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                            Packages & Pricing
                        </span>
                    </div>

                    <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Farmhouse Construction Cost in{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                            Bangalore & Hosur
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                        Transparent pricing from{" "}
                        <span className="font-semibold text-emerald-400">₹2,100/sqft</span>.
                        Minimum 1,200 sq.ft. No hidden charges. Premium materials. Zero surprises.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">
                        <span className="text-sm text-emerald-300 font-medium">
                            Starting from ₹2,100/sqft
                        </span>
                    </div>
                </div>

                <div className="mx-auto mt-[80px] max-w-[1100px] px-[24px]">
                    <div className="grid place-items-center gap-[32px] lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="
        group
        relative
        flex
        min-h-[760px]
        w-[500px]
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-zinc-200
        bg-gray-100
        px-[40px]
        py-[40px]
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-400
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      "
                        >
                            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                                    Standard
                                </span>

                                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                                    Value Choice
                                </span>
                            </div>

                            <h3 className="mt-[24px] text-3xl font-bold text-zinc-900">
                                Standard Package
                            </h3>

                            <p className="mt-[12px] text-sm leading-relaxed text-zinc-600">
                                A balanced package designed for homeowners seeking quality
                                construction with durable materials and modern finishes.
                            </p>

                            <div className="mt-[32px]">
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold tracking-tight text-zinc-900">
                                        ₹2,100
                                    </span>

                                    <span className="pb-2 text-zinc-500">/ sq.ft</span>
                                </div>

                                <p className="mt-2 text-sm text-zinc-500">
                                    Typical range ₹2,100 – ₹2,300
                                </p>
                            </div>

                            <div className="my-[32px] h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

                            <div className="mb-[20px] text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                                What's Included
                            </div>

                            <ul className="flex-1 space-y-[20px]">
                                {[
                                    "10 ft ceiling height",
                                    "Vitrified tile flooring",
                                    "UPVC 2-Track windows (4'×3')",
                                    "Honne wood main door frame",
                                    "Asian Tractor Emulsion paint",
                                    "Weekly progress updates",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-[16px] text-zinc-700"
                                    >
                                        <div className="mt-1.5 h-[10px] w-[10px] rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />

                                        <span className="text-[15px] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/contact"
                                className="
          mt-[40px]
          flex
          h-[56px]
          items-center
          justify-center
          rounded-2xl
          bg-zinc-900
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-emerald-600
          hover:shadow-lg
          hover:shadow-emerald-500/20
        "
                            >
                                Get Free Quote
                            </a>
                        </motion.div>

                        {/* Premium Package */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="
        group
        relative
        flex
        min-h-[760px]
        w-[500px]
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-emerald-500/30
        bg-gradient-to-br
        from-[#0C1A14]
        via-[#0A1410]
        to-[#070B09]
        px-[40px]
        py-[40px]
        text-white
        shadow-[0_0_80px_rgba(16,185,129,0.15)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
      "
                        >
                            <div className="absolute inset-0 bg-emerald-500/5" />
                            <div className="absolute -top-24 right-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
                            <div className="absolute -bottom-24 left-0 h-60 w-60 rounded-full bg-green-500/10 blur-3xl" />

                            {/* <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                <div className="rounded-full bg-gradient-to-r from-emerald-400 to-green-300 px-6 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-lg">
                                    Recommended
                                </div>
                            </div> */}

                            <div className="relative flex h-full flex-col">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                                        Premium
                                    </span>

                                    <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
                                        Most Popular
                                    </span>
                                </div>

                                <h3 className="mt-[24px] text-3xl font-bold">
                                    Premium Package
                                </h3>

                                <p className="mt-[12px] text-sm leading-relaxed text-zinc-400">
                                    Luxury-grade materials, superior craftsmanship, premium fittings
                                    and complete architectural support for your dream home.
                                </p>

                                <div className="mt-[32px]">
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold tracking-tight text-emerald-400">
                                            ₹2,500
                                        </span>

                                        <span className="pb-2 text-zinc-400">/ sq.ft</span>
                                    </div>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        High-end finishes & architectural upgrades included
                                    </p>
                                </div>

                                <div className="my-[32px] h-px bg-emerald-500/20" />

                                <div className="mb-[20px] text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                                    Premium Inclusions
                                </div>

                                <ul className="flex-1 space-y-[20px]">
                                    {[
                                        "11 ft ceiling height",
                                        "GVT tiles up to ₹65/sqft",
                                        "UPVC 3-Track Sara windows",
                                        "Teak wood main door frame",
                                        "Full architectural service",
                                        "Premium electrical wiring setup",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-[16px] text-zinc-200"
                                        >
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15">
                                                <svg
                                                    className="h-4 w-4 text-emerald-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>

                                            <span className="text-[15px] leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="/contact"
                                    className="
            mt-[40px]
            flex
            h-[56px]
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-emerald-400
            to-green-500
            text-sm
            font-bold
            text-black
            shadow-[0_20px_40px_rgba(16,185,129,0.35)]
            transition-all
            duration-300
            hover:scale-[1.02]
          "
                                >
                                    Get Free Quote
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default Work
