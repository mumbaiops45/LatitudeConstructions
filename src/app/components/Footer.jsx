import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#070c18] text-gray-300 overflow-hidden border-t border-white/10">

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative z-10">

  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14  overflow-hidden bg-white/10 border border-white/10 shadow-lg">
                <img
                  src="/logo.jpeg"
                  alt="Latitude Constructions"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                  Latitude Constructions
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Brick by Brick, We Build Your Dream Home
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-400 leading-7 max-w-md">
              Farmhouse construction specialists serving Bangalore outskirts,
              Hosur, Thally, Denkanikottai, Shoolagiri, Hoskote & Devanahalli since 2014.
            </p>

        
            <div className="flex items-center gap-4 mt-8">

              <a
                href="https://wa.me/918951639116"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-green-500/90 transition-all duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>

              <a
                href="mailto:latitudeconstructions080@gmail.com"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-pink-500/90 transition-all duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaEnvelope className="text-white text-lg" />
              </a>

              <a
                href="tel:+918951639116"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-indigo-500/90 transition-all duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaPhoneAlt className="text-white text-sm" />
              </a>
            </div>
          </div>


          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-white font-medium text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-indigo-500 rounded-full"></span>
              </h3>

              <ul className="space-y-3 text-sm">
                {["Home", "About Us", "Services", "Packages & Pricing", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-6 relative inline-block">
                Services
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-indigo-500 rounded-full"></span>
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
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-6 relative inline-block">
                Contact
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-indigo-500 rounded-full"></span>
              </h3>

              <div className="space-y-5 text-sm">

                <div className="flex gap-3">
                  <FaPhoneAlt className="text-indigo-400 mt-1" />
                  <span className="text-gray-400">+91 89516 39116</span>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="text-pink-400 mt-1" />
                  <span className="text-gray-400 break-all">
                    latitudeconstructions080@gmail.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-red-400 mt-1" />
                  <span className="text-gray-400 leading-6">
                    No.76/1B, Shivsakthi Nagar, <br />
                    ESI Ring Road, Hosur - 635109
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

       
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} Latitude Constructions. All rights reserved.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-3 text-xs text-gray-500 text-center">

            <span>
              Serving: Hosur • Thally • Denkanikottai • Shoolagiri • Hoskote • Devanahalli
            </span>

            <a
              href="https://nakshatranamahacreations.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
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