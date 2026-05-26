
import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-zinc-300">

     
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">

        
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">

          
          <div className="lg:col-span-4">

            <div className="flex items-center gap-4">

              <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src="/logo.jpeg"
                  alt="Latitude Constructions"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Latitude Constructions
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Brick by Brick, We Build Your Dream Home
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Farmhouse construction specialists serving Bangalore outskirts,
              Hosur, Thally, Denkanikottai, Shoolagiri, Hoskote & Devanahalli since 2014.
            </p>

            
            <div className="mt-8 flex items-center gap-4">

              <a
                href="https://wa.me/918951639116"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition hover:scale-110 hover:bg-emerald-500/20"
              >
                <FaWhatsapp className="text-emerald-400" />
              </a>

              <a
                href="mailto:latitudeconstructions080@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition hover:scale-110 hover:bg-emerald-500/20"
              >
                <FaEnvelope className="text-emerald-400" />
              </a>

              <a
                href="tel:+918951639116"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition hover:scale-110 hover:bg-emerald-500/20"
              >
                <FaPhoneAlt className="text-emerald-400 text-sm" />
              </a>

            </div>
          </div>

       
          <div className="lg:col-span-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

          
            <div>
              <h3 className="relative mb-6 inline-block text-lg font-medium text-white">
                Quick Links
                <span className="absolute -bottom-2 left-0 h-[2px] w-10 rounded-full bg-emerald-500" />
              </h3>

              <ul className="space-y-3 text-sm">
                {["Home", "About Us", "Services", "Packages & Pricing", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block text-zinc-400 transition hover:translate-x-1 hover:text-emerald-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h3 className="relative mb-6 inline-block text-lg font-medium text-white">
                Services
                <span className="absolute -bottom-2 left-0 h-[2px] w-10 rounded-full bg-emerald-500" />
              </h3>

              <ul className="space-y-3 text-sm">
                {[
                  "Farmhouse Construction",
                  "Eco-Friendly Construction",
                  "Residential Turnkey",
                  "Commercial Projects",
                  "Interior Design",
                  "Renovation",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block text-zinc-400 transition hover:translate-x-1 hover:text-emerald-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h3 className="relative mb-6 inline-block text-lg font-medium text-white">
                Contact
                <span className="absolute -bottom-2 left-0 h-[2px] w-10 rounded-full bg-emerald-500" />
              </h3>

              <div className="space-y-5 text-sm">

                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 text-emerald-400" />
                  <span className="text-zinc-400">+91 89516 39116</span>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="mt-1 text-emerald-400" />
                  <span className="break-all text-zinc-400">
                    latitudeconstructions080@gmail.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-emerald-400" />
                  <span className="leading-6 text-zinc-400">
                    No.76/1B, Shivsakthi Nagar, <br />
                    ESI Ring Road, Hosur - 635109
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Latitude Constructions. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-3 text-center lg:flex-row">

            <span>
              Serving: Hosur • Thally • Denkanikottai • Shoolagiri • Hoskote • Devanahalli
            </span>

            <a
              href="https://nakshatranamahacreations.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-400"
            >
              Developed by Nakshatra Namah Creations
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;