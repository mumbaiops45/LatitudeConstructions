
"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react'
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


const F = {
    display: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
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
                textTransform: 'uppercase', fontWeight: 600, color: C.green,
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
                <span style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.55, color: C.text1 }}>{q}</span>
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
        fontStyle: 'italic',
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

            {/* <section
                ref={heroRef}
                className="relative flex min-h-screen items-center overflow-hidden px-16 py-25"
            >
                <motion.div
                    style={{ y: heroY, scale: heroScale }}
                    className="absolute inset-0"
                >

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,#0c2210_0%,#050505_65%)]" />


                    <motion.div
                        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#22c55a66_1px,transparent_1px),linear-gradient(90deg,#22c55a66_1px,transparent_1px)] bg-[size:100px_100px]"
                    />

                    <motion.div
                        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[6%] top-[10%] h-[500px] w-[500px] rounded-full bg-green-600/10 blur-3xl"
                    />

                    <motion.div
                        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[10%] right-[8%] h-[420px] w-[420px] rounded-full bg-emerald-700/10 blur-3xl"
                    />

                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-[30%] top-[35%] h-[280px] w-[280px] rounded-full bg-yellow-500/5 blur-3xl"
                    />


                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-yellow-400"
                    />
                </motion.div>


                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 w-full max-w-3xl text-left"
                >


                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-green-400/80"
                    >
                        <motion.div
                            animate={{ width: [20, 56, 20] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-px bg-gradient-to-r from-green-500 to-transparent"
                        />

                        <span className="whitespace-nowrap">
                            Farmhouse & Eco-Friendly Construction · Bangalore & Hosur
                        </span>

                        <motion.div
                            animate={{ width: [56, 20, 56] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-px bg-gradient-to-l from-green-500 to-transparent"
                        />
                    </motion.div>


                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="mb-8  text-[clamp(3rem,8vw,4.5rem)] font-light leading-[1.05] text-white"
                    >
                        {[
                            "Brick by Brick,",
                            "We Build Your",
                            "Dream House"
                        ].map((text, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
                                className="block"
                            >
                                {text.includes("Your") ? (
                                    <>
                                        We Build{" "}
                                        <span className="bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent ">
                                            Your
                                        </span>
                                    </>
                                ) : (
                                    text
                                )}
                            </motion.span>
                        ))}
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mb-12 max-w-lg text-left text-zinc-400"
                    >
                        Premium farmhouse construction & villa projects across Bangalore & Hosur.{" "}
                        From <span className="text-green-400 font-medium">₹2,100/sqft</span>.{" "}
                        Quality that speaks, timelines that deliver.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-start gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:8951639116"
                            className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-white shadow-lg shadow-green-500/20"
                        >
                            📞 Call Now — Free Consultation
                        </motion.a>

                        
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/918951639116"
                            className="rounded-full border border-green-500/40 bg-green-500/10 px-8 py-4 text-green-300 backdrop-blur"
                        >
                            💬 WhatsApp Us
                        </motion.a>


                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/projects"
                            className="rounded-full border border-white/10 px-8 py-4 text-zinc-300 hover:text-white"
                        >
                            View Our Work
                        </motion.a>

                    </motion.div>
                </motion.div>
            </section> */}

            <section
  ref={heroRef}
  className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-16 py-20"
>

  {/* ================= BACKGROUND ================= */}
  <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">

    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,#0c2210_0%,#050505_65%)]" />

    <motion.div
      animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#22c55a66_1px,transparent_1px),linear-gradient(90deg,#22c55a66_1px,transparent_1px)] bg-[size:100px_100px]"
    />

    {/* Floating blobs */}
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[6%] top-[10%] h-[500px] w-[500px] rounded-full bg-green-600/10 blur-3xl"
    />

    <motion.div
      animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[10%] right-[8%] h-[420px] w-[420px] rounded-full bg-emerald-700/10 blur-3xl"
    />

    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[30%] top-[35%] h-[280px] w-[280px] rounded-full bg-yellow-500/5 blur-3xl"
    />

    {/* top line */}
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-yellow-400"
    />
  </motion.div>

  {/* ================= CONTENT WRAPPER ================= */}
  <div className="relative z-10 flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-12">

    {/* ================= LEFT TEXT ================= */}
    <motion.div
      style={{ opacity: heroOpacity }}
      className="w-full lg:max-w-2xl text-left"
    >

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-green-400/80"
      >
        <div className="h-px w-14 bg-gradient-to-r from-green-500 to-transparent" />

        <span className="whitespace-nowrap">
          Farmhouse & Eco-Friendly Construction · Bangalore & Hosur
        </span>

        <div className="h-px w-14 bg-gradient-to-l from-green-500 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.h1 className="mb-8 text-[clamp(3rem,7vw,4.8rem)] font-light leading-[1.05] text-white">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="block">
          Brick by Brick,
        </motion.span>

        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block">
          We Build{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
            Your
          </span>
        </motion.span>

        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="block">
          Dream House
        </motion.span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10 max-w-lg text-zinc-400"
      >
        Premium farmhouse construction & villa projects across Bangalore & Hosur.
        From <span className="text-green-400 font-medium">₹2,100/sqft</span>.
        Quality that speaks, timelines that deliver.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="tel:8951639116"
          className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-white shadow-lg shadow-green-500/20 transition hover:scale-105"
        >
          📞 Call Now — Free Consultation
        </a>

        <a
          href="https://wa.me/918951639116"
          className="rounded-full border border-green-500/40 bg-green-500/10 px-8 py-4 text-green-300 backdrop-blur transition hover:scale-105"
        >
          💬 WhatsApp Us
        </a>

        <a
          href="/projects"
          className="rounded-full border border-white/10 px-8 py-4 text-zinc-300 transition hover:text-white hover:scale-105"
        >
          View Our Work
        </a>
      </motion.div>
    </motion.div>

    
    <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.02 }}   
  className="relative w-full max-w-md lg:max-w-lg"
>

 
  <div className="absolute inset-0 -z-10 blur-3xl bg-green-500/20 rounded-full scale-110" />

 
  <img
    src="/brickhome.jpg"
    alt="Hero"
    className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
  />

</motion.div>

  </div>
</section>




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
                            <div style={{ fontSize: 'clamp(2.6rem,4vw,3.6rem)', fontWeight: 600, color: C.green }}>
                                <AnimCounter to={s.n} suffix={s.s} />
                            </div>
                            <div style={{ color: C.text3, fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', marginTop: 5 }}>
                                {s.l}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            


            <section style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} style={{ marginBottom: 68 }}>
                    <Label>What We Do</Label>
                    <motion.h2 variants={fadeUp} custom={0.1}
                        style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', fontWeight: 300, lineHeight: 1.1, color: C.text1, marginBottom: 18 }}>
                        Complete Construction<br /><span style={gradText}>Solutions</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={0.2}
                        style={{ color: C.text3, fontSize: 15, maxWidth: 500, lineHeight: 1.8 }}>
                        From eco-friendly farmhouses to premium residential villas — we handle every aspect of your construction journey.
                    </motion.p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 20 }}>
                    {services.map(s => (
                        <motion.div key={s.title} variants={cardAnim}
                            whileHover={{ y: -9, transition: { duration: 0.3 } }}
                            className="cg"
                            style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 22, padding: '30px 28px 26px', cursor: 'pointer' }}
                        >

                            <div style={{
                                width: 52, height: 52, borderRadius: 14, marginBottom: 22,
                                background: `linear-gradient(135deg, ${C.greenDim}, transparent)`,
                                border: `1px solid ${C.border}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
                            }}>{s.icon}</div>
                            <h3 style={{ color: C.text1, fontSize: 21, fontWeight: 500, marginBottom: 10 }}>{s.title}</h3>
                            <p style={{ color: C.text3, fontSize: 13, lineHeight: 1.8 }}>{s.desc}</p>
                            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 8, color: `${C.green}77`, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                                Learn more
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.3 }} style={{ fontSize: 13, color: C.green }}>→</motion.span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <Reveal delay={0.3} style={{ marginTop: 52, textAlign: 'center' }}>
                    <a href="/services" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        color: C.text3, fontSize: 13, border: `1px solid ${C.border}`,
                        padding: '12px 30px', borderRadius: 50, textDecoration: 'none',
                    }}>
                        Explore All Services <span style={{ color: C.green }}>→</span>
                    </a>
                </Reveal>
            </section>

          

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

                    {/* Projects Grid */}
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
                                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                            >
                                {/* Image */}
                                <div className="relative h-[420px] overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                    {/* Top Glow */}
                                    <div className="absolute left-0 top-0 h-28 w-28 rounded-br-[40px] bg-gradient-to-br from-green-400/40 to-transparent blur-sm" />

                                    {/* Content */}
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

                                        {/* Animated Line */}
                                        <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-green-400 to-yellow-200 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Button */}
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
                            style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', fontWeight: 300, lineHeight: 1.1, color: C.text1, marginBottom: 14 }}>
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
                            <h3 style={{ color: C.text1, fontSize: 34, fontWeight: 500, marginBottom: 10 }}>Standard Package</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: C.green, fontSize: 42, fontWeight: 600 }}>₹2,100</span>
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
                                color: C.green, fontWeight: 500, padding: '14px 0',
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
                                color: C.textInvert, fontSize: 10, fontWeight: 700,
                                padding: '6px 22px', borderRadius: 50, letterSpacing: '0.22em',
                                textTransform: 'uppercase', whiteSpace: 'nowrap',
                            }}>Most Popular</div>
                            <div style={{
                                position: 'absolute', top: 0, left: 24, right: 24, height: 1,
                                background: `linear-gradient(to right, transparent, ${C.gold}88, transparent)`,
                            }} />
                            <div style={{ color: `${C.green}99`, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 18 }}>Premium</div>
                            <h3 style={{ color: C.text1, fontSize: 34, fontWeight: 500, marginBottom: 10 }}>Premium Package</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: C.green, fontSize: 42, fontWeight: 600 }}>₹2,500</span>
                                <span style={{ color: C.text3, fontSize: 14 }}>– ₹2,700 / sq.ft</span>
                            </div>
                            <p style={{ color: `${C.border}ee`, fontSize: 12, marginBottom: 28 }}>Solid Block / Mud Interlock / Red Bricks</p>
                            <div style={{ height: 1, background: `${C.green}22`, marginBottom: 24 }} />
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 34px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {["11 ft ceiling height", "GVT tiles up to ₹65/sqft (2×4 format)", "UPVC 3-Track Sara windows (4'×4')", "Teak wood main door frame", "Full 6-stage architecture service", "V.Guard / Polycab electrical wiring"].map(f => (
                                    <li key={f} style={{ display: 'flex', gap: 12, color: C.text1, fontSize: 13 }}>
                                        <span style={{ color: C.green, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>{f}
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" style={{
                                display: 'block', textAlign: 'center',
                                background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`,
                                color: C.textInvert, fontWeight: 700, padding: '14px 0',
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
            </section>

          


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
            </section>

          


            <section style={{ padding: '16px 24px', maxWidth: 760, margin: '0 auto' }}>
                <Reveal style={{ marginBottom: 52 }}>
                    <Label>FAQ</Label>
                    <h2 style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)', fontWeight: 300, color: C.text1, lineHeight: 1.1 }}>
                        Frequently Asked<br /><span style={gradText}>Questions</span>
                    </h2>
                </Reveal>
                {faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} i={i} />)}
            </section>


            <section style={{ position: 'relative', padding: '16px 24px', overflow: 'hidden' }}>
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
                        style={{ fontSize: 'clamp(2.6rem,6.5vw,3.8rem)', fontWeight: 300, color: C.text1, lineHeight: 1.06, marginBottom: 22 }}>
                        Ready to Build Your<br /><span style={gradText}>Dream Farmhouse?</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={0.1}
                        style={{ color: C.text3, fontSize: 16, lineHeight: 1.82, marginBottom: 52 }}>
                        Get a free consultation and site visit.<br />
                        We cover Bangalore, Hosur, Jowlagiri & Denkanikottai.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={0.2}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
                        <p href="tel:8951639116">
                            <a href="tel:8951639116" className="gpulse" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: `linear-gradient(135deg, ${C.greenDark}, ${C.green}, ${C.greenLight})`,
                                color: C.textInvert, fontWeight: 700, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none',
                            }}>📞 Call: 89516 39116</a>
                        </p>
                        <p href="https://wa.me/918951639116">
                            <a href="https://wa.me/918951639116" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: C.greenDim, border: `1px solid ${C.green}44`,
                                color: C.green, fontWeight: 500, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none', backdropFilter: 'blur(8px)',
                            }}>💬 WhatsApp Us</a>
                        </p>
                        <p href="/contact">
                            <a href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: 'transparent', border: `1px solid ${C.border}`,
                                color: C.text2, fontWeight: 500, padding: '17px 38px',
                                borderRadius: 50, fontSize: 15, textDecoration: 'none',
                            }}>Send Enquiry</a>
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}