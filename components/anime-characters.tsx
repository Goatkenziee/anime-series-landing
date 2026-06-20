"use client";

import { motion } from "framer-motion";

const characters = [
  {
    name: "Ryo Kazama",
    title: "The Blazing One",
    element: "Fire",
    color: "from-orange-400 to-red-600",
    description: "A lone warrior who awakens the ancient flame within.",
  },
  {
    name: "Luna Tsukino",
    title: "The Moon Weaver",
    element: "Light",
    color: "from-purple-400 to-blue-600",
    description: "Master of illusion and guardian of celestial secrets.",
  },
  {
    name: "Kael Stormrider",
    title: "The Thunder Fist",
    element: "Lightning",
    color: "from-yellow-400 to-orange-600",
    description: "Brash and powerful, he channels the storm itself.",
  },
  {
    name: "Sakura Haruka",
    title: "The Gentle Blade",
    element: "Wind",
    color: "from-green-400 to-teal-600",
    description: "Swift as the breeze, deadly as the typhoon.",
  },
];

export function AnimeCharacters() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
            Characters
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
        >
          Each warrior carries a spark of the divine flame.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Element orb */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${char.color} flex items-center justify-center shadow-lg animate-float`}>
                <span className="text-3xl">
                  {char.element === "Fire"
                    ? "🔥"
                    : char.element === "Light"
                    ? "✨"
                    : char.element === "Lightning"
                    ? "⚡"
                    : "💨"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-1">
                {char.name}
              </h3>
              <p className="text-orange-400 text-sm text-center mb-3">
                {char.title}
              </p>
              <p className="text-gray-400 text-sm text-center">
                {char.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
