"use client";
import React from "react";
import { motion } from "framer-motion";
import {service} from "../data/data"
import { useRouter } from "next/navigation";




const icons = {
  leaf: "M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 1 0 4 0 4 0s0 3 0 4a9 9 0 0 1-6 5M11 20v-7",
  home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
  building: "M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M19 21V9h-4M9 8h2M9 12h2M9 16h2",
  sofa: "M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4H2v-4ZM4 17v2M20 17v2",
  hammer: "M14 7l5 5M3 21l8-8M11 9l3-3 4 4-3 3M14 6l4-4 3 3-4 4",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM16 8l-2 6-6 2 2-6 6-2Z",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d={icons[name]} />
    </svg>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Reveal({ children, className = "", custom = 0 }) {
  return (
    <motion.div className={className} custom={custom} variants={fadeUp}
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
}


function ServiceBlock({ s, index }) {
  const flip = index % 2 === 1;
   const router = useRouter();
  return (
    <Reveal>
      <div className="group relative overflow-hidden rounded-3xl border bg-gray-200 p-8 backdrop-blur-xl transition-all duration-500 hover:border-green-400/40 hover:shadow-[0_20px_70px_-30px_rgba(212,175,55,0.5)] md:p-12">
        
        <div className="pointer-events-none absolute -inset-40 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className={`grid items-start gap-10 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>

          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/25 bg-green-400/10 text-green-400">
                <Icon name={s.icon} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-green-400/80">
                  Service {s.num}
                </p>
                <h2 className="mt-1 text-2xl font-bold leading-tight text-black md:text-3xl">
                  {s.title}
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {s.desc.map((d, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-black">{d}</p>
              ))}
            </div>

            {s.reference && (
              <div className="mt-6 rounded-xl border border-green-400/15 bg-green-400/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-400/90">Reference Projects</p>
                <p className="mt-1  text-sm text-black">{s.reference}</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => router.push("/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-green-500/20 cursor-pointer transition-shadow hover:shadow-green-500/40">
              {s.cta}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </motion.button>
          </div>

         
          <ul className="space-y-3 rounded-2xl border border-white/5 bg-black/20 p-6">
            {s.points.map((p, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                className="flex items-start gap-3 text-sm text-black">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green-400/15 text-green-400">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                {p}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}


export default function Page() {
     

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0e13] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(212,175,55,0.12), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%,#000 40%,transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%,#000 40%,transparent 80%)",
        }} />
      </div>

      
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-center md:pt-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-green-400">
            Latitude Constructions
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl bg-gradient-to-b from-white to-white-500 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white">
            End-to-end construction solutions — from vision to handover keys.
          </p>
        </Reveal>
      </section>

    
      <section className="mx-auto max-w-7xl space-y-8 px-6 py-12">
        {service.map((s, i) => (
          <ServiceBlock key={s.num} s={s} index={i} />
        ))}
      </section>

     
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-green-400/20 bg-emerald-400 to-transparent p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400/20 blur-3xl" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Build Your Dream Home?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-black">
              Get a free consultation and site visit. We cover Bangalore, Hosur, Jowlagiri & Denkanikottai.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a href="tel:8951639116" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gradient-to-r from-green-400 to-green-400 px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-green-500/30">
                📞 Call Now
              </motion.a>
              <motion.a href="https://wa.me/918951639116" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-green-400/40">
                WhatsApp Us
              </motion.a>
              <motion.a href="#enquiry" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-green-400/40">
                Send Enquiry
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}