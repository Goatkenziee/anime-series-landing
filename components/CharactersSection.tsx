"use client";

import React from "react";
import { motion } from "framer-motion";

interface Character {
  name: string;
  title: string;
  description: string;
  color: string;
  power: string;
}

const characters: Character[] = [
  {
    name: "RAIKEN",
    title: "The Chrono Warden",
    description:
      "A lone warrior who awakens the power to manipulate time itself. Torn between destiny and free will, Raiken must master the Chrono Strike before the Void consumes all reality.",
    color: "from-orange-400 to-red-500",
    power: "Time Manipulation",
  },
  {
    name: "SERAPHINA",
    title: "The Void Seer",
    description:
      "A mysterious oracle who sees across timelines. Her visions guide the heroes, but her past holds a dark secret that could unravel everything they fight for.",
    color: "from-purple-400 to-pink-500",
    power: "Timeline Vision",
  },
  {
    name: "GORATH",
    title: "The Chrono Breaker",
    description:
      "A fallen titan who shattered the first timeline. Gorath commands the Void energy and seeks to unmake all of creation — one era at a time.",
    color: "from-cyan-400 to-blue-500",
    power: "Void Energy",
  },
  {
    name: "LYRA",
    title: "The Speed Phantom",
    description:
      "A rogue time-runner who moves faster than light itself. Lyra fights on her own terms, but when the multiverse is at stake, even a lone wolf must join the pack.",
    color: "from-yellow-400 to-amber-500",
    power: "Hypervelocity",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CharactersSection = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8" id="characters">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-gradient inline-block text-4xl font-black sm:text-5xl lg:text-6xl">
          CHARACTERS
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Every legend needs its heroes — and its villains. Meet the warriors
          who will decide the fate of time itself.
        </p>
      </motion.div>

      {/* Character cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {characters.map((char) => (
          <motion.div
            key={char.name}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
          >
            {/* Color accent bar */}
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${char.color}`}
            />

            {/* Character avatar placeholder */}
            <div
              className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${char.color} text-2xl font-black text-black shadow-lg`}
            >
              {char.name[0]}
            </div>

            {/* Name & Title */}
            <h3 className="text-center text-xl font-bold text-white">
              {char.name}
            </h3>
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-orange-400">
              {char.title}
            </p>

            {/* Power badge */}
            <div className="mb-3 text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                {char.power}
              </span>
            </div>

            {/* Description */}
            <p className="text-center text-sm leading-relaxed text-gray-400">
              {char.description}
            </p>

            {/* Hover glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/5 to-transparent" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CharactersSection;
