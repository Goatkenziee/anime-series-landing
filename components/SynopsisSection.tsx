"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    era: "ERA 1 — THE AWAKENING",
    desc: "Raiken discovers he can slow time during a near-fatal battle. The Chrono energy within him awakens — and so do ancient enemies.",
    year: "Year 0",
  },
  {
    era: "ERA 2 — THE VOID RISES",
    desc: "Gorath escapes his prison dimension and begins shattering timelines. Seraphina appears with a warning: all of reality is at risk.",
    year: "Year 47",
  },
  {
    era: "ERA 3 — THE FINAL STRIKE",
    desc: "The last remaining timeline. Raiken must master the ultimate Chrono Strike — a technique that could save everything... or erase it all.",
    year: "Year 112",
  },
];

const SynopsisSection = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8" id="synopsis">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-gradient inline-block text-4xl font-black sm:text-5xl lg:text-6xl">
          THE STORY
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          In a reality where time itself is a weapon, a young warrior discovers
          the power to bend the ages. But with every second he rewinds, the Void
          grows stronger. The countdown to the final timeline has begun.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500 via-purple-500 to-transparent sm:left-1/2 sm:-translate-x-px" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.era}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative mb-12 pl-12 sm:mb-16 sm:w-1/2 sm:pl-0 ${
              index % 2 === 0
                ? "sm:pr-12 sm:text-right"
                : "sm:ml-auto sm:pl-12"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-[10px] top-1 h-4 w-4 rounded-full border-2 border-orange-500 bg-[#0a0a1a] sm:left-auto ${
                index % 2 === 0
                  ? "sm:right-[-9px]"
                  : "sm:left-[-9px]"
              }`}
            />

            {/* Year badge */}
            <span className="mb-2 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
              {event.year}
            </span>

            <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
              {event.era}
            </h3>

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              {event.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto mt-20 max-w-2xl text-center"
      >
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <svg
            className="absolute -left-3 -top-3 h-8 w-8 text-orange-500/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="text-lg font-medium italic text-gray-300 sm:text-xl">
            &ldquo;Time is not a river. It is a blade — and I am the one who
            wields it.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-orange-400">
            — Raiken, The Chrono Warden
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SynopsisSection;
