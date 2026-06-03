'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Send, MapPin, ArrowRight } from 'lucide-react'


const stats = [
  { value: '40+', label: 'Completed Projects' },
  { value: '10', label: 'Ongoing Projects' },
  { value: '3', label: 'Layout Developments' },
  { value: '2', label: 'Apartment Complexes' },
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
  { img: '/satish.webp',  category: 'Farmhouse', status: 'COMPLETED', title: 'Mr. Sathish', location: '', desc: '' },

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

      {/* <section ref={heroRef} className="relative flex h-screen items-center justify-center overflow-hidden">
      
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src="/hello.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-900/50 to-gray-100" />
        </motion.div>



        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Our <span className="text-green-300">Portfolio</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100 md:text-xl">
              40+ projects delivered — farmhouses, villas, layouts, and more
            </p>
          </motion.div>
        </motion.div>

       
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.25em] text-gray-200"
        >
          Scroll
        </motion.div>
      </section> */}

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
                              {/* <br /> */}
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

      
      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-md"
            >
              <p className="text-4xl font-bold text-green-600 md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-gray-500">{s.label}</p>
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
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === f
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

      
      <section className="relative overflow-hidden bg-green-600 px-6 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-green-400/40 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-emerald-300/30 blur-[100px]" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <h3 className="text-3xl font-bold text-white md:text-4xl">Ready to Build Your Dream Home?</h3>
          <p className="mx-auto mt-4 max-w-xl text-green-50">
            Get a free consultation and site visit. We cover Bangalore, Hosur, Jowlagiri & Denkanikottai.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:8951639116" className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-green-700 shadow-lg transition hover:scale-105">
              <Phone size={18} /> Call Now
            </a>
            <a href="https://wa.me/918951639116" className="flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-green-700">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-green-700">
              <Send size={18} /> Send Enquiry
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Page
