"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Packages", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

             
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </div>

             
              <div className="hidden items-center gap-2 md:flex lg:gap-4">

                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : "text-zinc-300 hover:text-emerald-300 hover:bg-white/5",
                      "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 backdrop-blur"
                    )}
                  >
                    {item.name}
                  </a>
                ))}

                
                <button className="ml-2 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40">
                  Get Started
                </button>
              </div>

             
              <div className="md:hidden">
                <DisclosureButton className="rounded-xl p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

         
          <DisclosurePanel className="border-t border-white/10 bg-black/90 backdrop-blur-2xl md:hidden">
            <div className="space-y-3 px-4 py-5">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "text-zinc-300 hover:bg-white/5 hover:text-emerald-300",
                    "block rounded-xl px-4 py-3 text-base font-medium transition"
                  )}
                >
                  {item.name}
                </a>
              ))}

           
              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 py-3 font-semibold text-black shadow-lg transition hover:scale-[1.02]">
                Get Started
              </button>

            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}