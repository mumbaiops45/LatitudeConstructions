// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const values = [
//   { title: "Vision", desc: "We think long term and build with clarity." },
//   { title: "Innovation", desc: "We embrace creativity and new ideas." },
//   { title: "Integrity", desc: "We do what is right, always." },
//   { title: "Teamwork", desc: "We grow together as one unit." },
//   { title: "Excellence", desc: "We push for the best outcomes." },
//   { title: "Growth", desc: "We continuously evolve and improve." },
// ];

// export default function Page() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // rotate effect for a subtle background animation
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

//   return (
//     <div
//       ref={ref}
//       className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-white"
//     >
//       {/* Background subtle circle */}
//       <motion.div
//         style={{ rotate }}
//         className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10"
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center">
//         {values.map((v, i) => (
//           <section
//             key={i}
//             className="relative w-full flex justify-center items-center py-[100px]"
//           >
//             {/* Sticky Card */}
//             <motion.div
//               className="sticky top-1/2 -translate-y-1/2 w-96 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all hover:scale-105 hover:border-emerald-500/40 hover:bg-emerald-500/5"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.8, delay: i * 0.2 }}
//             >
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-lg">
//                 {i + 1}
//               </div>
//               <h2 className="text-2xl font-bold mb-2">{v.title}</h2>
//               <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
//             </motion.div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  { title: "Vision", desc: "We think long term and build with clarity." },
  { title: "Innovation", desc: "We embrace creativity and new ideas." },
  { title: "Integrity", desc: "We do what is right, always." },
  { title: "Teamwork", desc: "We grow together as one unit." },
  { title: "Excellence", desc: "We push for the best outcomes." },
  { title: "Growth", desc: "We continuously evolve and improve." },
];

export default function Page() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

 
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(values.length - 1) * 100}%`]
    
  );

  return (
    <div className="bg-zinc-950 text-white">
      {/* Scroll container */}
      <div ref={ref} className="relative h-[600vh]">
        
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Horizontal track */}
          <motion.div
            style={{ x }}
            className="flex h-full w-full"
          >
            {values.map((v, i) => (
              <div
                key={i}
                className="min-w-full h-screen flex items-center justify-center"
              >
                <motion.div
                  className="w-96 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-lg">
                    {i + 1}
                  </div>

                  <h2 className="text-2xl font-bold mb-2">
                    {v.title}
                  </h2>

                  <p className="text-zinc-400 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

