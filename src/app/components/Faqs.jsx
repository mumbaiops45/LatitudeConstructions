"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/data";
import { motion } from "framer-motion";



export default function FAQSection() {
    return (
        <>
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-14">
                    <span className="text-xs tracking-[0.35em] uppercase text-gray-500">
                        FAQ
                    </span>

                    <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-500 text-base sm:text-lg">
                        Clear answers about our farmhouse construction process, pricing, and timelines
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <FaqItem key={index} q={item.q} a={item.a} index={index} />
                    ))}
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


        </>
    );
}

function FaqItem({ q, a, index }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
            >
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                    <div className="flex items-start gap-4">
                        <span className="text-sm font-semibold text-gray-400 mt-0.5">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-[12px] sm:text-base font-medium text-gray-900 leading-snug">
                            {q}
                        </p>
                    </div>

                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${open ? "rotate-180" : ""
                            }`}
                    />
                </button>

                <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed pl-10">
                        {a}
                    </p>
                </div>
            </div>
        </>

    );
}