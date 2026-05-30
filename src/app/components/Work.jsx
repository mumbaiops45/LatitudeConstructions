
"use client"

import React from 'react'
import { projects, whyUs } from '../data/data'
import {
    motion, useScroll, useTransform, useInView, AnimatePresence,
} from 'framer-motion'


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

const fadeUp = {
    hidden: { opacity: 0, y: 56 },
    visible: (d = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardAnim = {
    hidden: { opacity: 0, y: 44, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
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
                            href="/projects"
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


            <section className="px-16 py-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="mx-auto grid max-w-7xl items-start gap-20 lg:grid-cols-2"
                >

                    <div>
                        <Label>Why Us</Label>
                        <motion.h2
                            variants={fadeUp}
                            className="mb-6 mt-6 text-4xl font-light leading-tight text-black md:text-4xl"
                        >
                            Built on Trust,
                            <br />
                            Delivered with
                            <br />
                            <span className="bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent">
                                Integrity
                            </span>
                        </motion.h2>


                        <motion.p
                            variants={fadeUp}
                            custom={0.1}
                            className="mb-10 max-w-xl text-[15px] leading-8 text-zinc-400"
                        >
                            We don't just build structures — we build lasting relationships
                            through quality, transparency, and unwavering commitment to your
                            dream.
                        </motion.p>


                        <motion.div variants={fadeUp} custom={0.2}>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
                            >
                                Start Your Project →
                            </a>
                        </motion.div>
                    </div>


                    {/* <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid gap-5 sm:grid-cols-2"
                    >
                        {whyUs.map((w) => (
                            <motion.div
                                key={w.title}
                                variants={cardAnim}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gray-200 p-6 backdrop-blur-2xl"
                            >

                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
                                </div>


                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-2xl text-white">
                                    {w.icon}
                                </div>


                                <h3 className="mb-3 text-xl font-semibold text-black">
                                    {w.title}
                                </h3>

                                <p className="text-sm leading-7 text-black">
                                    {w.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div> */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid gap-5 sm:grid-cols-2"
                    >
                        {whyUs.map((w) => (
                            <motion.div
                                key={w.title}
                                variants={cardAnim}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-3xl p-[2px]"
                            >

                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 animate-[borderMove_2s_linear_infinite] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"></div>
                                </div>


                                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-200 p-6">


                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-2xl text-white">
                                        {w.icon}
                                    </div>

                                    <h3 className="mb-3 text-xl font-semibold text-black">
                                        {w.title}
                                    </h3>


                                    <p className="text-sm leading-7 text-black">
                                        {w.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>

                </motion.div>
            </section>

        </div>
    )
}

export default Work
