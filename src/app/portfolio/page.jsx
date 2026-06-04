'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'


const stats = [
  { n: 40, s: '+', l: 'Completed Projects' },
  { n: 10, s: '+', l: 'Ongoing Projects' },
  { n: 3, s: '', l: 'Layout Development' },
  { n: 2, s: '', l: 'Apartment Complexes' },
]

const projects = [

  { img: '/shika.jpg', category: 'Farmhouse', status: 'ONGOING', title: 'Shika Farmhouse', location: 'Bangalore Region', desc: 'Eco-friendly farmhouse with natural aesthetics' },
  { img: '/Eco-friendly.jpg', category: 'Farmhouse', status: 'ONGOING', title: 'Lakshmi Farmhouse', location: 'Hosur Region', desc: 'Eco-friendly farmhouse, Hosur Region' },
  { img: '/Redbrick.jpg', category: 'Farmhouse', status: 'ONGOING', title: 'Modern Build', location: 'Jawalagiri', desc: 'Red brick modern farmhouse, Jawalagiri' },
  { img: '/Multi-unit.jpg', category: 'Farmhouse', status: 'ONGOING', title: 'Mr. Nityanandam', location: 'Jawalagiri', desc: 'Multi-unit farmhouse, Jawalagiri' },
  { img: '/Modernfarmhouse.jpg', category: 'Farmhouse', status: 'ONGOING', title: 'Mr. Om Band', location: 'Santhanapalli, Denkanikottai', desc: 'Modern farmhouse, Santhanapalli' },

  { img: '/mathew.jpg', category: 'Farmhouse', status: 'COMPLETED', title: 'Mr. Mathew', location: '', desc: '' },
  { img: '/Shibu.jpg', category: 'Farmhouse', status: 'COMPLETED', title: 'Mr. Shibu', location: '', desc: '' },
  { img: '/srinivas.jpeg', category: 'Farmhouse', status: 'COMPLETED', title: 'Mr. Srinivas', location: '', desc: '' },
  { img: '/satish.webp', category: 'Farmhouse', status: 'COMPLETED', title: 'Mr. Sathish', location: '', desc: '' },

  { img: '/Contemporary.jpg', category: 'Residential Villa', status: 'UNDER CONSTRUCTION', title: 'Mr. John Villa', location: 'Onnalvadi, Hosur', desc: 'Contemporary modern villa, Onnalvadi, Hosur' },
  { img: '/ashok.jpg', category: 'Residential Villa', status: 'COMPLETED', title: 'Mr. Ashok Villa', location: 'Thillai Nagar, Hosur', desc: '' },

  { img: '/8-acre.jpg', category: 'Layout', status: 'COMPLETED', title: 'RS Avenue', location: 'Hosur, Tamil Nadu', desc: '8-acre premium residential layout' },
  { img: '/5-acre.jpg', category: 'Layout', status: 'COMPLETED', title: 'MM Enclave', location: 'Devanahalli', desc: '5-acre residential layout development' },
  { img: '/1-acre.jpg', category: 'Layout', status: 'COMPLETED', title: 'Manaya Villas', location: '', desc: '1-acre premium villa layout' },

  { img: '/62flats.jpg', category: 'Apartment', status: 'COMPLETED', title: 'SJR Vogue Residences', location: 'Whitefield, Bangalore', desc: '62 flats — flooring, painting, fittings and handover' },
  { img: '/Multi-unitf.jpg', category: 'Apartment', status: 'COMPLETED', title: 'Mahaveer Apartment', location: 'Kanakpura Road, Bangalore', desc: 'Multi-unit apartment finishing and interior works' },
]

const filters = ['All Projects', 'Farmhouse', 'Residential Villa', 'Layout', 'Apartment']


const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

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


const StatusBadge = ({ status }) => {
  const styles = {
    ONGOING: 'bg-green-100 text-green-700 border-green-300',
    COMPLETED: 'bg-emerald-600 text-white border-emerald-600',
    'UNDER CONSTRUCTION': 'bg-green-50 text-green-600 border-green-200',
  }
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  )
}

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    variants={fadeUp}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-[0_24px_60px_-25px_rgba(22,163,74,0.5)]"
  >

    <div className="relative h-56 overflow-hidden">
      {project.type === 'video' ? (
        <video src={project.img} muted loop autoPlay playsInline className="h-full w-full object-cover" />
      ) : project.img ? (
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-100 to-gray-100 text-5xl">🏡</div>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
        {project.category}
      </span>
      <span className="absolute right-4 top-4">
        <StatusBadge status={project.status} />
      </span>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
      {project.location && (
        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-green-600">
          <MapPin size={14} /> {project.location}
        </p>
      )}
      {project.desc && <p className="mt-3 text-sm leading-relaxed text-gray-500">{project.desc}</p>}
    </div>
  </motion.div>
)


const Page = () => {
  const [active, setActive] = useState('All Projects')

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const filtered =
    active === 'All Projects' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <section className="relative overflow-hidden bg-gradient-to-br from-[#021b12] via-[#052e1f] to-black py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-16 h-24 w-24 rounded-full border border-green-400/20"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 h-36 w-36 rounded-full border border-emerald-500/20"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          >
            <span className="text-white">
              Our  &nbsp;
            </span>

            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            40+ projects delivered — farmhouses, villas, layouts, and more
          </motion.p>
        </div>
      </section>



      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0   bg-gray-50" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.l}
              variants={cardAnim}
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald-400 md:text-5xl lg:text-6xl">
                <AnimCounter to={s.n} suffix={s.s} />
              </div>

              <div className="mt-2 text-[11px] uppercase tracking-[0.26em] text-black">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-green-500" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Browse Our <span className="text-green-600">Projects</span>
          </h2>
        </motion.div>


        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${active === f
                ? 'border-green-600 bg-green-600 text-white shadow-lg shadow-green-600/30'
                : 'border-gray-300 bg-white text-gray-600 hover:border-green-400 hover:text-green-600'
                }`}
            >
              {f}
              {active === f && f === 'All Projects' && <ArrowRight size={15} />}
            </button>
          ))}
        </div>


        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-gray-400">No projects in this category yet.</p>
        )}
      </section>


       <section className="relative px-6 py-24 overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-[#040804] via-[#07140b] to-[#030503]" />
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/20 blur-[140px] rounded-full" />
                <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
                <div className="absolute top-[30%] left-[-120px] w-[500px] h-[500px] bg-green-900/30 blur-[150px] rounded-full" />

                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)",
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 max-w-3xl mx-auto text-center"
                >

                    <span className="text-xs tracking-[0.4em] uppercase text-emerald-300/80">
                        Get Started
                    </span>

                    <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                        Ready to Build Your <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-yellow-300 bg-clip-text text-transparent">
                            Dream Farmhouse?
                        </span>
                    </h2>

                    <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
                        Get a free consultation and site visit. <br />
                        We cover Bangalore, Hosur, Jowlagiri & Denkanikottai.
                    </p>


                    <div className="mt-12 flex flex-col sm:flex-row justify-center  gap-4 sm:gap-5">
                        <a
                            href="tel:+918951639116"
                            target="_blank"
                            
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 sm:px-8 sm:py-4 rounded-full text-white text-base sm:text-sm font-medium bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-500 shadow-lg shadow-emerald-900/30 hover:scale-105 transition-all duration-300"

                        >
                            📞 Call Now
                        </a>


                        <a
                            href="https://wa.me/918951639116"
                            target="_blank"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 sm:px-8 sm:py-4 rounded-full text-white text-base sm:text-sm font-medium bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-500 shadow-lg shadow-emerald-900/30 hover:scale-105 transition-all duration-300"
                        >
                            💬 WhatsApp Us
                        </a>


                        <a
                            href="/contact#enquiry"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 sm:px-8 sm:py-4 rounded-full text-white text-base sm:text-sm font-medium bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-500 shadow-lg shadow-emerald-900/30 hover:scale-105 transition-all duration-300"
                        >
                            Send Enquiry
                        </a>

                    </div>

                </motion.div>
            </section>


    </div>
  )
}

export default Page
