
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion,  useInView} from 'framer-motion'




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



export default function Home() {

    const stats = [
        { n: 40, s: '+', l: 'Completed Projects' },
        { n: 4.9, s: '★', l: 'Average Rating' },
        { n: 10, s: '+', l: 'Years Experience' },
        { n: 100, s: '%', l: 'On-Time Delivery' },
    ]


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

        </div>
    )
}