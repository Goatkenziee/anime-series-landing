"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Flame } from "lucide-react";

const transformations = [
  {
    name: "Void Ascension",
    desc: "Kael taps into the primordial darkness, gaining shadow-based abilities and enhanced speed.",
    icon: Sparkles,
    color: "from-purple-600 to-indigo-600",
  },
  {
    name: "Inferno Mode",
    desc: "Luna unleashes her full pyromantic potential, her body wreathed in celestial flames.",
    icon: Flame,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Tempest Form",
    desc: "Zephyr becomes one with the storm, moving at impossible speeds with lightning reflexes.",
    icon: Zap,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Titan Shell",
    desc: "Terra's body hardens to diamond-like density, becoming virtually indestructible.",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
  },
];

export function AnimeTransformations() {
  return (
    <section className="relative py-20 md:py-32" id="transformations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="gradient-text">Transformations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center text-base text-gray-400 sm:text-lg md:text-xl"
        >
          Each warrior can evolve beyond their limits
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2">
          {transformations.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 transition-all hover:border-purple-600/50 sm:p-8"
              >
                <div className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${t.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
                <div className="relative flex items-start gap-4 sm:gap-6">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} sm:h-16 sm:w-16`}>
                    <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{t.name}</h3>
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
