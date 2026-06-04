'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion";

const Page = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        location: "",
        budget: "",
        message: "",
    });
    const parallaxRefs = useRef([])
    parallaxRefs.current = []
    const addParallax = (el) => { if (el && !parallaxRefs.current.includes(el)) parallaxRefs.current.push(el) }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formsubmit.co/ajax/latitudeconstructions080@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();


            setFormData({
                fullName: "",
                phone: "",
                email: "",
                service: "",
                location: "",
                budget: "",
                message: "",
            });

            alert("Enquiry submitted successfully!");

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
    };



    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
            { threshold: 0.15 }
        )
        document.querySelectorAll('.reveal, .underline-grow').forEach((el) => io.observe(el))

        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                const y = window.scrollY
                parallaxRefs.current.forEach((l) => {
                    const s = parseFloat(l.dataset.speed || '0.2')
                    l.style.transform = `translate3d(0, ${y * s}px, 0)`
                })
                ticking = false
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
    }, [])

    return (
        <div className="font-['Manrope',sans-serif] text-gray-800 bg-gray-100 antialiased overflow-x-hidden">
            <style>{`
        ::selection{background:#15803d;color:#fff}
        .grid-lines{background-image:linear-gradient(rgba(21,128,61,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(21,128,61,.06) 1px,transparent 1px);background-size:46px 46px}
        @keyframes rise{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:translateY(0)}}
        @keyframes glow{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:.7;transform:scale(1.12)}}
        @keyframes lineGrow{from{width:0}to{width:100%}}
        @keyframes floaty{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(5deg)}}
        .reveal{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.16,.84,.44,1),transform .9s cubic-bezier(.16,.84,.44,1)}
        .reveal.in{opacity:1;transform:none}
        .hero-rise{animation:rise 1s cubic-bezier(.16,.84,.44,1) both}
        .glow-orb{animation:glow 9s ease-in-out infinite}
        .floaty{animation:floaty 11s ease-in-out infinite}
        .underline-grow{position:relative}
        .underline-grow::after{content:"";position:absolute;left:0;bottom:-10px;height:3px;width:0;background:linear-gradient(90deg,#15803d,#22c55e)}
        .underline-grow.in::after{animation:lineGrow 1.1s .3s cubic-bezier(.16,.84,.44,1) forwards}
        .btn-primary{position:relative;overflow:hidden;background:#15803d;color:#fff;transition:.4s cubic-bezier(.16,.84,.44,1);box-shadow:0 10px 24px -10px rgba(21,128,61,.5)}
        .btn-primary::before{content:"";position:absolute;inset:0;transform:translateX(-101%);background:#166534;transition:transform .45s cubic-bezier(.16,.84,.44,1)}
        .btn-primary:hover::before{transform:translateX(0)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 30px -10px rgba(21,128,61,.55)}
        .btn-primary>span{position:relative;z-index:1}
        .btn-outline{transition:.4s cubic-bezier(.16,.84,.44,1)}
        .btn-outline:hover{background:#15803d;color:#fff;border-color:#15803d;transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(21,128,61,.45)}
        .lift{transition:transform .5s cubic-bezier(.16,.84,.44,1),border-color .5s,box-shadow .5s}
        .lift:hover{transform:translateY(-6px);border-color:rgba(21,128,61,.4);box-shadow:0 24px 50px -22px rgba(16,52,30,.35)}
        .field{transition:.3s cubic-bezier(.16,.84,.44,1)}
        .field:focus{outline:none;border-color:#15803d;background:#f0fdf4;box-shadow:0 0 0 4px rgba(21,128,61,.12)}
        select.field{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%2315803d' stroke-width='2'%3E%3Cpath d='M2 4l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center}
      `}</style>


            <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gray-100">
                <div ref={addParallax} data-speed="0.12" className="absolute inset-0 grid-lines opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-gray-100" />
                <div ref={addParallax} data-speed="0.26" className="glow-orb absolute -top-24 -right-16 w-[34rem] h-[34rem] rounded-full bg-green-500/15 blur-[120px]" />
                <div ref={addParallax} data-speed="0.18" style={{ animationDelay: '-3s' }} className="glow-orb absolute bottom-0 left-[-8rem] w-[26rem] h-[26rem] rounded-full bg-emerald-400/15 blur-[120px]" />
                <div ref={addParallax} data-speed="0.45" className="floaty absolute top-1/4 right-[12%] w-24 h-24 border-2 border-green-600/25 rotate-12 rounded-md" />
                <div ref={addParallax} data-speed="0.6" style={{ animationDelay: '-5s' }} className="floaty absolute bottom-[20%] right-[26%] w-12 h-12 border-2 border-green-600/20 rounded-full" />

                <div className="relative max-w-6xl mx-auto px-6 w-full">
                    <div className="hero-rise inline-flex items-center gap-2 bg-green-700/10 text-green-800 px-4 py-1.5 rounded-full text-xs tracking-[0.25em] uppercase font-semibold mb-6" style={{ animationDelay: '.05s' }}>
                        <span className="w-2 h-2 rounded-full bg-green-600" /> Latitude Constructions
                    </div>
                    <h1 className="hero-rise font-['Sora',sans-serif] text-gray-900 text-5xl sm:text-6xl md:text-7xl leading-[1.02] font-bold" style={{ animationDelay: '.2s' }}>
                        Get In <span className="text-green-700">Touch</span>
                    </h1>
                    <p className="hero-rise mt-7 max-w-xl text-lg text-gray-600 leading-relaxed" style={{ animationDelay: '.4s' }}>
                        Free consultation &amp; site visit — let&apos;s start building your dream from the ground up.
                    </p>
                    <div className="hero-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '.55s' }}>
                        <a href="#enquiry" className="btn-primary px-8 py-4 rounded-lg text-sm tracking-widest uppercase font-semibold"><span>Send an Enquiry</span></a>
                        <a href="tel:+918951639116" className="btn-outline bg-white border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg text-sm tracking-widest uppercase font-semibold">Call Now</a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2">
                    Scroll
                    <span className="w-px h-10 bg-gradient-to-b from-green-600 to-transparent" />
                </div>
            </section>


            <section className="relative py-28 px-6 bg-gray-100 overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-green-400/15 blur-[120px]" />
                    <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">

                    <div className="reveal ">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-green-600" />
                            <p className="text-green-700 tracking-[0.35em] text-xs uppercase font-semibold">Reach Us</p>
                        </div>
                        <h2 className="underline-grow font-['Sora',sans-serif] text-gray-900 text-4xl md:text-5xl font-bold inline-block">
                            Contact <span className="text-green-600">Information</span>
                        </h2>
                        <p className="mt-4 max-w-xl text-gray-500">
                            We'd love to hear about your project. Reach out through any of the channels below.
                        </p>
                    </div>

                </div>
            </section>



            <section id="enquiry" className="relative py-28 px-6 bg-white overflow-hidden">
                <div ref={addParallax} data-speed="0.16" className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-green-500/10 blur-[130px]" />
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 relative">

                    <form
                        onSubmit={handleSubmit}
                        className="reveal bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm"
                    >
                        <h2 className="font-['Sora',sans-serif] text-gray-900 text-4xl font-bold mb-8">
                            Send Us an <span className="text-green-700">Enquiry</span>
                        </h2>

                        <div className="space-y-5">


                            <div>
                                <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400"
                                    placeholder="Your name"
                                />
                            </div>


                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400"
                                        placeholder="+91"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400"
                                        placeholder="you@email.com"
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                    Service Interested In *
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900"
                                >
                                    <option value="">Select a service…</option>
                                    <option>Eco-Friendly Construction</option>
                                    <option>Residential Turnkey Project</option>
                                    <option>Commercial Construction</option>
                                    <option>Interior Design & Execution</option>
                                    <option>Renovation & Development</option>
                                    <option>Architecture & Approvals</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                    Project Location / Area *
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400"
                                    placeholder="City / locality"
                                />
                            </div>


                            <div>
                                <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                    Budget Range
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900"
                                >
                                    <option value="">Select your budget range…</option>
                                    <option>Below ₹30 Lakhs</option>
                                    <option>₹30 Lakhs – ₹50 Lakhs</option>
                                    <option>₹50 Lakhs – ₹1 Crore</option>
                                    <option>Above ₹1 Crore</option>
                                    <option>Not Decided Yet</option>
                                </select>
                            </div>


                            <div>
                                <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2">
                                    Message / Requirements
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="field w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>


                            <button
                                type="submit"
                                className="btn-primary w-full py-4 rounded-xl text-sm tracking-[0.2em] uppercase font-semibold mt-2"
                            >
                                <span>Send Enquiry</span>
                            </button>

                            <p className="text-sm text-gray-500 leading-relaxed pt-2">
                                After submitting, we'll get back to you within{" "}
                                <strong className="text-gray-900">24 hours.</strong> For urgent queries,
                                call or WhatsApp directly on{" "}
                                <strong className="text-green-700">+91 89516 39116.</strong>
                            </p>
                        </div>
                    </form>


                    <div className="flex flex-col gap-6">
                        <div className="reveal">
                            <p className="text-green-700 tracking-[0.35em] text-xs uppercase font-semibold mb-3">Our Office</p>
                            <h2 className="font-['Sora',sans-serif] text-gray-900 text-4xl md:text-5xl font-bold mb-4">Visit Our Office</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">Come visit us at our Hosur office — we&apos;d love to discuss your project in person.</p>
                        </div>

                        <div className="reveal lift bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm" style={{ transitionDelay: '80ms' }}>
                            <h3 className="font-['Sora',sans-serif] text-2xl font-semibold text-green-700 mb-4">Office — Hosur</h3>
                            <p className="text-gray-800 leading-relaxed mb-5">No.75/1B, Shivasakthi Nagar, ESI Ring Road, Hosur — 635109, Tamil Nadu, India</p>
                            <div className="space-y-2 text-gray-600">
                                <p><span className="text-green-700 font-semibold">Hours:</span> Mon–Sat, 9 AM – 6 PM</p>
                                <p><span className="text-green-700 font-semibold">Phone:</span> +91 89516 39116</p>
                                <p><span className="text-green-700 font-semibold">Email:</span> latitudeconstructions080@gmail.com</p>
                            </div>
                        </div>

                        <div className="reveal lift bg-gray-50 border border-gray-200 rounded-3xl p-8 relative overflow-hidden shadow-sm" style={{ transitionDelay: '160ms' }}>
                            <div className="grid-lines absolute inset-0 opacity-70" />
                            <div className="relative">
                                <h4 className="font-['Sora',sans-serif] text-xl font-semibold text-gray-900 mb-3">Find Us on Google Maps</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">Search &quot;Latitude Construction Hosur&quot; on Google Maps or call us for precise directions.</p>
                                <a href="https://www.google.com/maps/search/Latitude+Construction+Hosur" className="btn-outline inline-block bg-white border-2 border-green-700 text-green-700 px-6 py-3 rounded-xl text-sm tracking-widest uppercase font-semibold">Get Directions — Hosur Office</a>
                            </div>
                        </div>

                        <div
                            className="reveal lift relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white p-5 sm:p-7 md:p-8 flex flex-col justify-center gap-5 shadow-xl shadow-green-900/30"
                            style={{ transitionDelay: "160ms" }}
                        >
                            
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                            <p className="relative text-[11px] sm:text-xs uppercase tracking-[0.25em] text-green-100">
                                Get in touch
                            </p>

                          
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                                <a
                                    href="https://wa.me/918951639116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-xl border border-white/20 px-4 sm:px-5 py-4 sm:py-3.5 backdrop-blur-sm hover:bg-white hover:text-green-700 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2 font-semibold text-sm sm:text-[15px]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </span>

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                
                                <a
                                    href="tel:+918951639116"
                                    className="group flex items-center justify-between rounded-xl border border-white/20 px-4 sm:px-5 py-4 sm:py-3.5 backdrop-blur-sm hover:bg-white hover:text-green-700 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2 font-semibold text-sm sm:text-[15px]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        Call Now
                                    </span>

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
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


        </div>
    )
}

export default Page