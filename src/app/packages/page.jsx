"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, LayoutGrid, Zap, Wrench, PanelsTopLeft, DoorOpen, DoorClosed, Bath, ChefHat, Droplets, } from "lucide-react";
import { packages, included, excluded, milestones } from "../data/data"


const wallOptions = [
    { emoji: '🧱', name: 'Solid Blocks', price: '₹2,500', desc: 'Premium solid block construction' },
    { emoji: '🏺', name: 'Mud Interlocking', price: '₹2,600', desc: 'Premium eco-friendly interlocking blocks' },
    { emoji: '🔴', name: 'Red Bricks', price: '₹2,700', desc: 'Premium traditional red brick construction' },
]

const specificationss = [
    {
        title: "Ceiling Height",
        value: "11 Feet",
        icon: Building2,
    },
    {
        title: "Foundation Height",
        value: "3 Feet Above Ground",
        icon: Landmark,
    },
    {
        title: "Flooring",
        value: "GVT Tiles up to ₹65/sqft (2×4 format)",
        icon: LayoutGrid,
    },
    {
        title: "Electrical Wiring",
        value: "V.Guard / Polycab",
        icon: Zap,
    },
    {
        title: "Plumbing Pipes",
        value: "Supreme Pipes",
        icon: Zap,
    },
    {
        title: "CP Fittings",
        value: "Cera (Premium)",
        icon: Wrench,
    },
    {
        title: "Windows",
        value: "UPVC 3-Track Sara (4' × 4')",
        icon: PanelsTopLeft,
    },
    {
        title: "Main Door Frame",
        value: "Honne Wood Frame",
        icon: DoorOpen,
    },
    {
        title: "Internal Door Frames",
        value: "Sal Wood Frame",
        icon: DoorClosed,
    },
    {
        title: "Bathroom Doors",
        value: "WPVC Doors",
        icon: Bath,
    },
    {
        title: "Kitchen Sink",
        value: "Granite Finish",
        icon: ChefHat,
    },
    {
        title: "Kitchen Counter",
        value: "Black Granite",
        icon: ChefHat,
    },
    {
        title: "Water Tank",
        value: "1000L Double Layer PVC",
        icon: Droplets,
    },
    {
        title: "Interior Paint",
        value: "Asian Apcolite Premium Emulsion",
        icon: Droplets,
    },
    {
        title: "Exterior Paint",
        value: "Asian Apex Paint",
        icon: Droplets,
    },
    {
        title: "Bay Windows",
        value: "2 No.",
        icon: Droplets,
    },
    {
        title: "Agreement Service",
        value: "Full 6-Stage Service Included",
        icon: Droplets,
    },
    {
        title: "Agreement Advance",
        value: "₹1,00,000",
        icon: Droplets,
    }
]

const specifications = [
    {
        title: "Ceiling Height",
        value: "10 Feet",
        icon: Building2,
    },
    {
        title: "Foundation Height",
        value: "2 Feet Above Ground",
        icon: Landmark,
    },
    {
        title: "Flooring",
        value: "Vitrified Tiles",
        icon: LayoutGrid,
    },
    {
        title: "Electrical Wiring",
        value: "HIFI / Anchor",
        icon: Zap,
    },
    {
        title: "Plumbing Pipes",
        value: "Supreme Pipes",
        icon: Zap,
    },
    {
        title: "CP Fittings",
        value: "Parryware",
        icon: Wrench,
    },
    {
        title: "Windows",
        value: "UPVC 2 Track (4' × 3')",
        icon: PanelsTopLeft,
    },
    {
        title: "Main Door Frame",
        value: "Honne Wood Frame",
        icon: DoorOpen,
    },
    {
        title: "Internal Door Frames",
        value: "Sal Wood Frame",
        icon: DoorClosed,
    },
    {
        title: "Bathroom Doors",
        value: "PVC Doors",
        icon: Bath,
    },
    {
        title: "Kitchen Counter",
        value: "Granite Finish",
        icon: ChefHat,
    },
    {
        title: "Water Tank",
        value: "1000L Double Layer PVC",
        icon: Droplets,
    },
    {
        title: "Interior Paint",
        value: "Asian Tractor Emulsion",
        icon: Droplets,
    },
    {
        title: "Exterior Paint",
        value: "Asian Paint",
        icon: Droplets,
    },
    {
        title: "Bay Windows",
        value: "1 No.",
        icon: Droplets,
    },
    {
        title: "Agreement Advance",
        value: "₹25,000",
        icon: Droplets,
    },
];



const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }


export default function Page() {

    return (
        <main className="bg-slate-50 overflow-hidden">

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
                            Construction
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                            Packages & Pricing
                        </span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Experience transparent pricing, premium-grade materials,
                        expert craftsmanship, and zero hidden costs for your dream
                        construction project.
                    </motion.p>



                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="bg-amber-50 border border-amber-300 rounded-3xl p-6 shadow-lg mb-20">
                    <p className="text-amber-900 font-medium">
                        Important Notice: Minimum built up area is 1,200 sq.ft for
                        standard package rates. Projects below 1,200 sq.ft require a
                        custom quotation.
                    </p>
                </div>


                <div className="text-center mb-12">
                    <p className="text-emerald-600 font-semibold uppercase tracking-widest">
                        Pricing Plans
                    </p>

                    <h2 className="text-4xl md:text-4xl font-bold mt-4">
                        Standard Construction Packages
                    </h2>

                    <p>Choose your wall construction material — each option is priced accordingly. All options include the full standard specification list below.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 mb-6 gap-8">
                    {packages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                            }}
                            className="bg-white rounded-[32px] p-8 shadow-xl border  border-gray-100"
                        >
                            <h3 className="text-xl font-bold">{item.title}</h3>

                            <div className="my-6">
                                <span className="text-2xl font-bold text-emerald-500">
                                    {item.price}
                                </span>

                                <span className="text-gray-500"> / sqft</span>
                            </div>

                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="relative py-24 overflow-hidden bg-[#071326]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f2c5f,transparent_60%)]" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6" />

                        <h2 className="text-5xl md:text-6xl font-bold text-white">
                            Full{" "}
                            <span className="text-amber-400">
                                Specifications
                            </span>
                        </h2>

                        <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
                            Detailed technical specifications and package information.
                        </p>
                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">
                        {specifications.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                    }}
                                    className="  group  relative overflow-hidden  rounded-3xl  border  border-green-500/20  bg-gradient-to-br from-white/10   to-white/5 backdrop-blur-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all  duration-500 hover:border-green-400/50 hover:shadow-[0_20px_60px_rgba(34,197,94,0.20)] "
                                >

                                    <div
                                        className="  absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-green-500/10  via-emerald-500/5  to-transparent "
                                    />

                                    <div
                                        className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 group-hover:w-full "
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className="  w-20  h-20 rounded-3xl bg-green-500/10   border   border-green-500/20  flex  items-center  justify-center  mb-6  group-hover:bg-green-500/20 transition-all duration-500 "
                                        >
                                            <Icon
                                                size={34}
                                                className="text-green-400"
                                            />
                                        </div>

                                        <h3 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-4 mb-5" />
                                        <p className="text-xl  text-green-300">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>


                    <div className="flex justify-center mt-16">
                        <a
                            href="/contact"
                            className="  group  relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-green-500    via-emerald-500    to-green-600    px-10    py-5    text-lg    font-semibold   text-white  shadow-[0_0_40px_rgba(34,197,94,0.30)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_70px_rgba(34,197,94,0.50)]"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                            <span className="relative">
                                Get a Standard Package Quote
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="
            mt-14
            rounded-full
            border
            border-amber-400/20
            bg-white/5
            backdrop-blur-xl
            px-8
            py-5
            text-center
          "
                    >
                        <p className="text-slate-300">
                            ✨ Quality Materials • Expert Construction • Timely Delivery • Transparent Process
                        </p>
                    </motion.div>

                </div>
            </section>

            <section className="relative overflow-hidden bg-gray-100 py-24">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

                    <motion.div
                        animate={{ y: [0, 40, 0], opacity: [0.25, 0.45, 0.25] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-emerald-600/15 blur-[100px]"
                    />

                    <motion.div
                        animate={{ y: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]"
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-24 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-white/[0.03] shadow-[0_30px_80px_-30px_rgba(16,185,129,0.35)] backdrop-blur-xl"
                    >
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

                        <div className="flex flex-col gap-8 px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12">

                            <div className="flex items-center gap-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-3xl shadow-lg shadow-emerald-500/30">
                                    ⭐
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
                                        Premium Package
                                    </h2>
                                    <p className="mt-1 text-black">Luxury construction specifications</p>
                                </div>
                            </div>

                            <div className="md:text-right">
                                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-slate-900">
                                    Starting From
                                </p>
                                <h3 className="text-4xl font-bold leading-none text-emerald-400">
                                    ₹2,500 – ₹2,700
                                </h3>
                                <p className="mt-1 text-sm text-slate-900">per sq.ft</p>
                            </div>

                        </div>

                        <div className="border-y border-white/10 bg-white/[0.02] px-8 py-8 md:px-12">
                            <p className="max-w-4xl text-lg leading-relaxed text-slate-900">
                                Our premium package includes all standard features plus significant upgrades in materials, finishes, and full architectural service. Select your preferred wall construction system below.
                            </p>
                        </div>

                        <div className="px-8 py-10 md:px-12">
                            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Choose your wall construction system
                            </p>

                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 gap-6 md:grid-cols-3"
                            >
                                {wallOptions.map((w) => (
                                    <motion.div
                                        key={w.name}
                                        variants={fadeUp}
                                        whileHover={{ y: -8 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="group relative overflow-hidden rounded-3xl border  border-green-500/20   bg-gradient-to-br from-white/10   to-white/5 backdrop-blur-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-green-400/50   hover:shadow-[0_20px_60px_rgba(34,197,94,0.20)]"
                                    >
                                        <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                                            {w.emoji}
                                        </div>

                                        <h3 className="text-xl font-bold text-black">{w.name}</h3>

                                        <div className="my-4 flex items-baseline  gap-1">
                                            <span className="text-2xl font-bold text-emerald-400">
                                                {w.price}
                                            </span>
                                            <span className="text-lg text-slate-900">/sqft</span>
                                        </div>

                                        <p className="text-sm leading-relaxed text-slate-900">
                                            {w.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

                        <h2 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
                            Full <span className="text-emerald-400">Specifications</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-slate-900">
                            Premium materials. Superior craftsmanship. Built for lasting value.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {specificationss.map((item) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-xl hover:bg-emerald-50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="relative">
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 transition-colors duration-300 group-hover:bg-emerald-400/20">
                                            <Icon size={28} className="text-emerald-400" />
                                        </div>

                                        <h3 className="text-lg font-semibold text-black">
                                            {item.title}
                                        </h3>

                                        <div className="mb-4 mt-3 h-[2px] w-12 bg-emerald-400" />

                                        <p className="text-base font-medium text-emerald-300">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-14 rounded-full border border-emerald-400/20 bg-white/5 px-8 py-5 text-center backdrop-blur-xl"
                    >
                        <p className="text-sm text-slate-900 md:text-base">
                            ✨ Quality Materials &nbsp;•&nbsp; Expert Construction &nbsp;•&nbsp; Timely Delivery &nbsp;•&nbsp; Transparent Process
                        </p>
                    </motion.div>

                </div>
            </section>


            <section className="mt-24 px-10">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold">
                        What's Included & What's Not
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-3xl font-bold text-green-700 mb-8">
                            Included
                        </h3>

                        <div className="space-y-4">
                            {included.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span>✅</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-red-50 rounded-3xl p-8 shadow-lg">
                        <h3 className="text-3xl font-bold text-red-700 mb-8">
                            Not Included
                        </h3>

                        <div className="space-y-4">
                            {excluded.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span>❌</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <section className="mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            Milestone Based Payment Schedule
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-1 bg-emerald-500" />

                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative pl-16 mb-10"
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>

                                <div className="bg-white p-6 rounded-3xl shadow-lg">
                                    <div className="flex flex-wrap justify-between gap-4">
                                        <div>
                                            <h3 className="font-bold text-xl">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                        </div>

                                        <div className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-bold h-fit">
                                            {item.percent}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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

        </main>
    );
}