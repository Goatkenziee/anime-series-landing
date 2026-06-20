"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const characters = [
  {
    name: "RAIDEN",
    title: "The Shadow Warden",
    description:
      "A lone warrior wielding the ancient power of shadow manipulation. Raiden guards the boundary between worlds, but a dark secret threatens to consume him.",
    color: "from-purple-500 to-blue-500",
    glowColor: "shadow-purple-500/50",
    power: "Shadow Manipulation",
    rank: "S-Tier",
  },
  {
    name: "AKIRA",
    title: "The Thunder Empress",
    description:
      "Born from a lightning strike, Akira commands storms with a flick of her wrist. Her quest for the truth behind her origins leads her into the Shadow Realm.",
    color: "from-yellow-400 to-orange-500",
    glowColor: "shadow-yellow-500/50",
    power: "Storm Control",
    rank: "S-Tier",
  },
  {
    name: "ZER0",
    title: "The Void Assassin",
    description:
      "A mysterious figure from the Shadow Realm itself. Zer0's allegiance is unknown, but his blade never misses. Is he friend or foe?",
    color: "from-cyan-400 to-teal-500",
    glowColor: "shadow-cyan-500/50",
    power: "Void Step",
    rank: "A-Tier",
  },
  {
    name: "LYRA",
    title: "The Soul Weaver",
    description:
      "A healer with the rare ability to mend shattered souls. Lyra's gentle nature hides an unbreakable will, and her powers may be the key to saving the realm.",
    color: "from-pink-400 to-rose-500",
    glowColor: "shadow-pink-500/50",
    power: "Soul Weaving",
    rank: "A-Tier",
  },
];

export default function CharactersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="characters"
      className="relative py-24 px-4 sm:px-8 lg:px-16"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">CHARACTERS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the warriors who will shape the fate of the Shadow Realm
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${character.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              {/* Character card content */}
              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${character.color} mb-4 mx-auto flex items-center justify-center text-2xl font-bold shadow-lg ${character.glowColor}`}
                >
                  {character.name[0]}
                </div>

                <h3 className="text-xl font-bold text-center mb-1">
                  {character.name}
                </h3>
                <p className="text-sm text-orange-400 text-center mb-3">
                  {character.title}
                </p>

                <div className="flex justify-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    {character.power}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 text-orange-300">
                    {character.rank}
                  </span>
                </div>

                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  {character.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
