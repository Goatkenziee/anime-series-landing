"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const characters = [
  {
    name: "Shadow Kael",
    title: "The Awakened",
    description: "A warrior reborn from the void, wielding darkness as both shield and blade.",
    color: "from-purple-600 to-blue-600",
    glow: "shadow-purple-600/30",
  },
  {
    name: "Luna Flare",
    title: "The Phoenix",
    description: "Master of celestial fire, her flames can purify even the darkest corruption.",
    color: "from-orange-500 to-red-600",
    glow: "shadow-orange-600/30",
  },
  {
    name: "Zephyr Storm",
    title: "The Tempest",
    description: "Commander of winds and lightning, his speed rivals the gods themselves.",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/30",
  },
  {
    name: "Terra Iron",
    title: "The Unbreakable",
    description: "Forged from the core of dying stars, his defense is absolute.",
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/30",
  },
];

export function AnimeCharacters() {
  return (
    <section className="relative py-20 md:py-32" id="characters">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="gradient-text">Legendary Warriors</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center text-base text-gray-400 sm:text-lg md:text-xl"
        >
          Each hero brings a unique power to the battlefield
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-gray-900 to-black p-6 transition-all hover:shadow-2xl">
                {/* Glow effect */}
                <div className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${char.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30`} />
                <div className="relative">
                  <div className={`mb-4 h-24 w-24 rounded-full bg-gradient-to-br ${char.color} p-[2px]`}>
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-4xl">
                      {char.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-white">{char.name}</h3>
                  <p className={`mb-3 text-sm font-semibold bg-gradient-to-r ${char.color} bg-clip-text text-transparent`}>
                    {char.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {char.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
