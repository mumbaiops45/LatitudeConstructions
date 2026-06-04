"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { values, areas, stats } from "../data/data"
import CoreValue from "../components/CoreValue";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Reveal({ children, className = "", custom = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Page = () => {

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroGlowY = useTransform(heroProgress, [0, 1], [0, 160]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);


  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(storyProgress, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      <section
        ref={heroRef}
        className="relative overflow-hidden px-6 pt-32 pb-20 text-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
      >

        <motion.div
          style={{ y: heroGlowY }}
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[160px]"
        />


        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />

        <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-xs uppercase tracking-[0.35em] text-emerald-400"
          >
            About Latitude Constructions
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl text-white"
          >
            A Decade of{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Building Trust
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-zinc-300"
          >
            Premium, eco-conscious construction for farmhouses, villas, and homes
            across Bangalore & Hosur.
          </motion.p>
        </motion.div>
      </section>



      <section ref={storyRef} className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built on Integrity & Sustainability
            </h2>

            <div className="mt-6 space-y-5 text-black leading-relaxed">
              <p>
                Founded in 2014, Latitude Constructions began with a simple
                belief: that every family deserves a home built with integrity,
                quality, and respect for the environment. What started as a small
                residential construction firm in Bangalore has grown into a
                trusted name for farmhouses, villas, and eco-friendly builds.
              </p>
              <p>
                Over the past decade, we've expanded our expertise from
                residential projects to include commercial spaces, layout
                developments, and full interior design services. Our deep
                understanding of Bangalore and Hosur's terrain, climate, and
                building regulations gives us a unique edge.
              </p>
              <p>
                Today, Latitude Constructions is synonymous with eco-conscious
                craftsmanship — integrating rainwater harvesting, solar panels,
                natural ventilation, and sustainable materials into every build
                we undertake. Our team of experienced civil engineers, site
                supervisors, and skilled workers operates with a single goal: to
                hand you the keys to a home that exceeds your expectations, on
                time and within budget.
              </p>
            </div>
          </Reveal>

          <Reveal custom={1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />
              <motion.img
                style={{ y: imageY }}
                src="/builtintegrity.jpg"
                alt="Latitude Constructions project"
                className="relative w-full rounded-3xl border border-emerald-500/20 object-cover shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
              />
            </div>
          </Reveal>
        </div>


        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={i} custom={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-emerald-500/20 bg-white/[0.03] p-5 text-center backdrop-blur-xl transition-colors hover:border-emerald-500/40"
              >
                <p className="text-xl font-bold text-emerald-400">{s.value}</p>
                <p className="mt-1 text-xs text-zinc-400">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
            Our Purpose
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Mission & Vision</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal custom={0}>
            <motion.div
              whileHover={{ y: -6 }}
              className="h-full rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-emerald-400">
                Our Vision
              </h3>
              <p className="mt-5 text-black leading-relaxed">
                To be a leading force in the construction industry by championing
                eco-friendly design, sustainable building practices, and
                innovation — creating spaces that people are proud to call home
                while leaving a smaller footprint on the planet.
              </p>
              <p className="mt-4 text-black leading-relaxed">
                We envision a future where every building project contributes
                positively to its environment, community, and the families who
                inhabit it.
              </p>
            </motion.div>
          </Reveal>

          <Reveal custom={1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="h-full rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-emerald-400">
                Our Mission
              </h3>
              <p className="mt-5 text-black leading-relaxed">
                To provide environmentally sustainable, innovative, and customized
                construction solutions that meet the unique needs of each client —
                delivering projects with unwavering quality, complete
                transparency, and on-time precision.
              </p>
              <p className="mt-4 text-black leading-relaxed">
                We are committed to building long-term relationships through
                honest dealings, milestone-based financial clarity, and weekly
                progress communication.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

    
        <CoreValue/>


      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
            Where We Build
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Service Areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-black">
            We proudly serve clients across Bangalore, Hosur, and the surrounding
            regions of Karnataka and Tamil Nadu.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5  sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={i} custom={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-6 backdrop-blur-xl transition-all duration-300 ease-outhover:border-emerald-500/60 hover:bg-emerald-500/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
              >
                <p className="text-lg font-semibold text-emerald-400">{a.name}</p>
                <p className="mt-2 text-sm text-zinc-400">{a.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>  


      <section className="mx-auto max-w-7xl px-6 pb-28 pt-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-12 text-center backdrop-blur-xl">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />

            <h2 className="relative z-10 text-3xl font-bold md:text-4xl">
              Ready to Build Your Dream Home?
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-black">
              Get a free consultation and site visit. We cover Bangalore, Hosur,
              Jowlagiri & Denkanikottai.
            </p>

            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="tel:8951639116"
                className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-[#070A08] transition-colors hover:bg-emerald-400"
              >
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/918951639116"
                 target="_blank"
                className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-[#070A08] transition-colors hover:bg-emerald-400"
              >
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/contact#enquiry"
                className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-[#070A08] transition-colors hover:bg-emerald-400"
              >
                Send Enquiry
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Page;