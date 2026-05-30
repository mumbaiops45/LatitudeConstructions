
"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
    motion, useScroll, useTransform, useInView, AnimatePresence,
} from 'framer-motion'
import { services, projects, whyUs, reviews, brands, faqs } from '../data/data'



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



const fadeUp = {
    hidden: { opacity: 0, y: 56 },
    visible: (d = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
}
const fadeIn = {
    hidden: { opacity: 0 },
    visible: (d = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: d } }),
}
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const cardAnim = {
    hidden: { opacity: 0, y: 44, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
}


function AnimCounter({ to, suffix = '' }) {
    const [n, setN] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    useEffect(() => {
        if (!inView) return
        const num = parseFloat(to), steps = 72
        let cur = 0
        const t = setInterval(() => {
            cur += num / steps
            if (cur >= num) { setN(num); clearInterval(t) } else setN(Math.floor(cur))
        }, 2000 / steps)
        return () => clearInterval(t)
    }, [inView, to])
    return <span ref={ref}>{n}{suffix}</span>
}



function Reveal({ children, delay = 0, style = {}, className = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    return (
        <motion.div ref={ref} className={className} style={style}
            variants={fadeUp} custom={delay} initial="hidden"
            animate={inView ? 'visible' : 'hidden'}>
            {children}
        </motion.div>
    )
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

function FaqItem({ q, a, i }) {
    const [open, setOpen] = useState(false)
    return (
        <motion.div
            style={{ borderBottom: `1px solid ${C.border}` }}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
        >
            <button onClick={() => setOpen(o => !o)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', padding: '20px 0', textAlign: 'left', gap: 16,
                background: 'none', border: 'none', cursor: 'pointer',
            }}>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: C.text1 }}>{q}</span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.24 }}
                    style={{ color: C.green, fontSize: 22, flexShrink: 0, marginTop: 2, lineHeight: 1 }}>+</motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div key="a"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: 14, lineHeight: 1.82, color: C.text3, paddingBottom: 24 }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}


export default function Home() {

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])


    const stats = [
        { n: 40, s: '+', l: 'Completed Projects' },
        { n: 4.9, s: '★', l: 'Average Rating' },
        { n: 10, s: '+', l: 'Years Experience' },
        { n: 100, s: '%', l: 'On-Time Delivery' },
    ]


    const gradText = {
        background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenLight} 45%, ${C.gold} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    }

    const globalCSS = `
    

    /* Grain film */
    .grain {
      position: fixed; inset: 0; pointer-events: none; z-index: 999; opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* Blob decorative shapes */
    .blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(96px); }

    /* Hero line mask */
    .hmask { overflow: hidden; display: block; }

    /* Marquee */
    .mq { display: flex; gap: 2.5rem; animation: mqx 32s linear infinite; width: max-content; }
    .mq:hover { animation-play-state: paused; }
    @keyframes mqx { from { transform: translateX(0) } to { transform: translateX(-50%) } }

    /* Card hover glow pseudo */
    .cg { position: relative; transition: transform 0.32s ease, border-color 0.32s ease; }
    .cg::after {
      content: ''; position: absolute; inset: -1px; border-radius: inherit; opacity: 0; pointer-events: none;
      background: linear-gradient(135deg, transparent 25%, rgba(92,184,46,0.16) 50%, transparent 75%);
      transition: opacity 0.32s ease;
    }
    .cg:hover::after { opacity: 1; }

    /* Primary button glow pulse */
    @keyframes gpulse {
      0%,100% { box-shadow: 0 0 18px rgba(92,184,46,0.3), 0 0 36px rgba(92,184,46,0.1) }
      50%      { box-shadow: 0 0 28px rgba(92,184,46,0.55), 0 0 56px rgba(92,184,46,0.22) }
    }
    .gpulse { animation: gpulse 3s ease-in-out infinite; }

    /* Thin scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #080d08; }
    ::-webkit-scrollbar-thumb { background: #2a5a14; border-radius: 4px; }

    /* Responsive helpers */
    @media (max-width: 768px) {
      .why-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
      .proj-grid { grid-template-columns: 1fr !important; }
      .proj-grid > * { grid-column: span 1 !important; }
      .price-grid { grid-template-columns: 1fr !important; }
      .rev-grid  { grid-template-columns: 1fr !important; }
      .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
    }
  `

    return (
        <div style={{ background: C.bg, color: C.text1, overflowX: 'hidden' }}>
            <style>{globalCSS}</style>
            <div className="grain" /> 

            <section style={{ position: 'relative', padding: '40px 0', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(120deg, ${C.greenDim} 0%, rgba(92,184,46,0.11) 50%, ${C.goldDim} 100%)`,
                    borderTop: `1px solid ${C.green}22`, borderBottom: `1px solid ${C.green}22`,
                }} />
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="stat-grid"
                    style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
                    {stats.map(s => (
                        <motion.div key={s.l} variants={cardAnim} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'clamp(2.6rem,4vw,3.6rem)', color: C.green }}>
                                <AnimCounter to={s.n} suffix={s.s} />
                            </div>
                            <div style={{ color: C.text3, fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', marginTop: 5 }}>
                                {s.l}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

          {/* <Whywe/> */}

            {/* <section className="max-w-[1200px] mx-auto px-6 py-16 overflow-hidden">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="mb-16"
                >
                    <Label>What We Do</Label>

                    <motion.h2
                        variants={fadeUp}
                        custom={0.1}
                        className="text-[clamp(2.2rem,5vw,3rem)] leading-[1.1] text-white mb-5 font-semibold"
                    >
                        Complete Construction
                        <br />
                        <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        custom={0.2}
                        className="text-zinc-400 text-[15px] max-w-[500px] leading-8"
                    >
                        From eco-friendly farmhouses to premium residential villas —
                        we handle every aspect of your construction journey.
                    </motion.p>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5"
                >
                    {services.map((s) => (
                        <motion.div
                            key={s.title}
                            variants={cardAnim}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.35 }}
                            className=" group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] p-7 cursor-pointer transition-all duration-500 hover:border-emerald-400/40  hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
                        >


                            <span
                                className=" absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-700 group-hover:w-full" />

                            <span
                                className=" absolute right-0 bottom-0 h-[2px] w-0 bg-gradient-to-l from-transparent via-emerald-400 to-transparent transition-all duration-700 group-hover:w-full "
                            />

                            <div
                                className={` absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)]
          `}
                            />

                            <div
                                className=" relative z-10 w-[52px] h-[52px] rounded-[14px] mb-6 border border-white/10 bg-gradient-to-br from-emerald-500/20 to-transparent flex  items-center  justify-center  text-[26px]"
                            >
                                {s.icon}
                            </div>

                            <h3 className="relative z-10 text-white text-[21px] mb-3 font-semibold">
                                {s.title}
                            </h3>

                            <p className="relative z-10 text-zinc-400 text-[13px] leading-8">
                                {s.desc}
                            </p>


                            <div
                                className="relative z-10  mt-6  flex  items-center  gap-2  text-[11px] tracking-[0.24em] uppercase text-emerald-400/70 "
                            >
                                Learn more

                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.3 }}
                                    className="text-[13px] text-emerald-400"
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                <Reveal delay={0.3} className="mt-14 text-center">
                    <a
                        href="/services"
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-3 text-[13px] text-zinc-300 transition-all  duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:text-white" >
                        Explore All Services
                        <span className="text-emerald-400">→</span>
                    </a>
                </Reveal>
            </section> */}



            {/* <section className="relative overflow-hidden bg-[#0b120c] py-8 px-6">

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
            </section> */}





            {/* <section className="px-16 py-8">
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
                            className="mb-6 mt-6 text-4xl font-light leading-tight text-white md:text-6xl"
                        >
                            Built on Trust,
                            <br />
                            Delivered with
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
                            >
                                Start Your Project →
                            </a>
                        </motion.div>
                    </div>


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
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
                            >

                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
                                </div>


                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-2xl text-white">
                                    {w.icon}
                                </div>


                                <h3 className="mb-3 text-xl font-semibold text-white">
                                    {w.title}
                                </h3>

                                <p className="text-sm leading-7 text-zinc-400">
                                    {w.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>



            <section style={{ padding: '120px 24px', background: C.bgAlt }}>
                <div style={{ maxWidth: 1020, margin: '0 auto' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        style={{ textAlign: 'center', marginBottom: 68 }}>
                        <Label>Packages & Pricing</Label>
                        <motion.h2 variants={fadeUp}
                            style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', lineHeight: 1.1, color: C.text1, marginBottom: 14 }}>
                            Transparent Pricing,<br /><span style={gradText}>Zero Surprises</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={0.1}
                            style={{ color: C.text3, fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
                            Premium materials. Milestone payments. Starting from ₹2,100/sqft. Minimum 1,200 sq.ft.
                        </motion.p>
                    </motion.div>

                    <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>


                        <motion.div
                            initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                            className="cg"
                            style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 26, padding: 38 }}
                        >
                            <div style={{ color: C.text3, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 18 }}>Standard</div>
                            <h3 style={{ color: C.text1, fontSize: 34, marginBottom: 10 }}>Standard Package</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: C.green, fontSize: 42 }}>₹2,100</span>
                                <span style={{ color: C.text3, fontSize: 14 }}>– ₹2,300 / sq.ft</span>
                            </div>
                            <p style={{ color: `${C.border}ee`, fontSize: 12, marginBottom: 28 }}>Solid Blocks / Mud Interlock / Red Bricks</p>

                            <div style={{ height: 1, background: C.border, marginBottom: 24 }} />
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 34px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {["10 ft ceiling height", "Vitrified tile flooring", "UPVC 2-Track windows (4'×3')", "Honne wood main door frame", "Asian Tractor Emulsion interior paint", "Weekly progress photo updates"].map(f => (
                                    <li key={f} style={{ display: 'flex', gap: 12, color: C.text2, fontSize: 13 }}>
                                        <span style={{ color: C.text3, flexShrink: 0, marginTop: 1 }}>—</span>{f}
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" style={{
                                display: 'block', textAlign: 'center',
                                background: C.bg, border: `1px solid ${C.borderMd}`,
                                color: C.green, padding: '14px 0',
                                borderRadius: 14, fontSize: 14, textDecoration: 'none',
                            }}>Get Free Quote</a>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                position: 'relative', borderRadius: 26, padding: 38,
                                background: `linear-gradient(158deg, #0d2012 0%, ${C.bgAlt} 100%)`,
                                border: `1px solid ${C.borderHi}`,
                                boxShadow: `0 0 56px ${C.greenGlow}33, 0 0 100px ${C.greenGlow}18`,
                            }}
                        >

                            <div style={{
                                position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)',
                                background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`,
                                color: C.textInvert, fontSize: 10,
                                padding: '6px 22px', borderRadius: 50, letterSpacing: '0.22em',
                                textTransform: 'uppercase', whiteSpace: 'nowrap',
                            }}>Most Popular</div>
                            <div style={{
                                position: 'absolute', top: 0, left: 24, right: 24, height: 1,
                                background: `linear-gradient(to right, transparent, ${C.gold}88, transparent)`,
                            }} />
                            <div style={{ color: `${C.green}99`, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 18 }}>Premium</div>
                            <h3 style={{ color: C.text1, fontSize: 34, marginBottom: 10 }}>Premium Package</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: C.green, fontSize: 42, }}>₹2,500</span>
                                <span style={{ color: C.text3, fontSize: 14 }}>– ₹2,700 / sq.ft</span>
                            </div>
                            <p style={{ color: `${C.border}ee`, fontSize: 12, marginBottom: 28 }}>Solid Block / Mud Interlock / Red Bricks</p>
                            <div style={{ height: 1, background: `${C.green}22`, marginBottom: 24 }} />
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 34px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {["11 ft ceiling height", "GVT tiles up to ₹65/sqft (2×4 format)", "UPVC 3-Track Sara windows (4'×4')", "Teak wood main door frame", "Full 6-stage architecture service", "V.Guard / Polycab electrical wiring"].map(f => (
                                    <li key={f} style={{ display: 'flex', gap: 12, color: C.text1, fontSize: 13 }}>
                                        <span style={{ color: C.green, flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" style={{
                                display: 'block', textAlign: 'center',
                                background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`,
                                color: C.textInvert, padding: '14px 0',
                                borderRadius: 14, fontSize: 14, textDecoration: 'none',
                                boxShadow: `0 4px 22px ${C.greenGlow}`,
                            }}>Get Free Quote</a>
                        </motion.div>
                    </div>

                    <Reveal delay={0.2} style={{ marginTop: 28, textAlign: 'center' }}>
                        <a href="/packages" style={{ color: C.text3, fontSize: 13, textDecoration: 'underline', textUnderlineOffset: 4 }}>
                            View Full Package Details & Payment Schedule →
                        </a>
                    </Reveal>
                </div>
            </section> */}



{/* 
            <section className="relative overflow-hidden px-16 py-8">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="mb-20 text-center"
                    >

                        <motion.div variants={fadeUp}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-xl">
                                ● Client Reviews
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white md:text-6xl"
                        >
                            What Our{" "}
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Clients Say
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400"
                        >
                            We create premium digital experiences that combine modern design,
                            performance, and strategy to help brands grow faster.
                        </motion.p>

                    </motion.div>


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {reviews.map((r, index) => (
                            <motion.div
                                key={r.name}
                                variants={cardAnim}
                                whileHover={{ y: -10, scale: 1.03 }}
                                transition={{ duration: 0.35 }}
                                className="group relative min-h-[320px] overflow-hidden rounded-3xl p-[1px]"
                            >


                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 opacity-20 blur-sm transition-all duration-500 group-hover:opacity-60 group-hover:blur-md animate-gradient-x" />


                                <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-400/40 group-hover:bg-black/60">
                                    <div className="mb-5 flex items-center justify-between">

                                        <div className="flex gap-1">
                                            {Array.from({ length: r.stars }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-sm text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        <div className="text-6xl font-light leading-none text-white/5 transition group-hover:text-white/10">
                                            ”
                                        </div>

                                    </div>


                                    <p className="relative z-10 mb-8 text-sm leading-7 text-zinc-300">
                                        {r.text}
                                    </p>


                                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-base font-semibold text-black shadow-lg shadow-emerald-500/20">
                                                {r.name.charAt(0)}
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-white">
                                                    {r.name}
                                                </h4>
                                                <p className="mt-1 text-xs text-zinc-500">
                                                    {r.proj}
                                                </p>
                                            </div>

                                        </div>

                                        <div className="text-4xl font-bold text-white/5 transition group-hover:text-white/10">
                                            0{index + 1}
                                        </div>

                                    </div>

                                </div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </section>



            <section style={{ padding: '60px 0', background: C.bgAlt, overflow: 'hidden' }}>
                <Reveal style={{ textAlign: 'center', marginBottom: 28 }}>
                    <p style={{ color: C.text3, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
                        Quality Materials — Trusted Brands
                    </p>
                </Reveal>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to right, ${C.bgAlt}, transparent)`, zIndex: 10 }} />
                    <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to left, ${C.bgAlt}, transparent)`, zIndex: 10 }} />
                    <div className="mq">
                        {[...brands, ...brands].map((b, i) => (
                            <span key={i} style={{
                                color: C.text3, fontSize: 13, letterSpacing: '0.1em',
                                whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 10, cursor: 'default',
                            }}>
                                <span style={{ color: `${C.green}44`, fontSize: 8 }}>◆</span>
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </section> */}




            {/* <section style={{ padding: '16px 24px', maxWidth: 760, margin: '0 auto' }}>
                <Reveal style={{ marginBottom: 52 }}>
                    <Label>FAQ</Label>
                    <h2 style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', color: C.text1, lineHeight: 1.1 }}>
                        Frequently Asked<br /><span style={gradText}>Questions</span>
                    </h2>
                </Reveal>
                {faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} i={i} />)}
            </section> */}


            {/* <section style={{ position: 'relative', padding: '16px 24px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 88% 68% at 50% 50%, #0c2210 0%, ${C.bg} 72%)` }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.green}66, ${C.gold}55, ${C.green}66, transparent)` }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.green}33, transparent)` }} />
                <div className="blob" style={{ width: 520, height: 520, background: '#2a5a14', top: '-12%', left: '4%', opacity: 0.06 }} />
                <div className="blob" style={{ width: 420, height: 420, background: '#1a4a10', bottom: '-12%', right: '4%', opacity: 0.055 }} />
                <div className="blob" style={{ width: 300, height: 300, background: C.gold, top: '38%', right: '33%', opacity: 0.03 }} />
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.024,
                    backgroundImage: `linear-gradient(${C.green}55 1px, transparent 1px), linear-gradient(90deg, ${C.green}55 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }} />

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    style={{ position: 'relative', zIndex: 10, maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
                    <Label>Get Started</Label>
                    <motion.h2 variants={fadeUp}
                        style={{ fontSize: 'clamp(2.6rem,6.5vw,3.8rem)', color: C.text1, lineHeight: 1.06, marginBottom: 22 }}>
                        Ready to Build Your<br /><span style={gradText}>Dream Farmhouse?</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={0.1}
                        style={{ color: C.text3, fontSize: 16, lineHeight: 1.82, marginBottom: 52 }}>
                        Get a free consultation and site visit.<br />
                        We cover Bangalore, Hosur, Jowlagiri & Denkanikottai.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={0.2}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
                        <p href="tel:+918951639116">
                            <a href="tel:+918951639116" className="gpulse" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: `linear-gradient(135deg, ${C.greenDark}, ${C.green}, ${C.greenLight})`,
                                color: C.textInvert, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none',
                            }}>📞 Call: 89516 39116</a>
                        </p>
                        <p href="https://wa.me/918951639116">
                            <a href="https://wa.me/918951639116" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: C.greenDim, border: `1px solid ${C.green}44`,
                                color: C.green, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(8px)',
                            }}>💬 WhatsApp Us</a>
                        </p>
                        <p href="/contact">
                            <a href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: 'transparent', border: `1px solid ${C.border}`,
                                color: C.text2, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none',
                            }}>Send Enquiry</a>
                        </p>
                    </motion.div>
                </motion.div>
            </section> */}


        </div>
    )
}