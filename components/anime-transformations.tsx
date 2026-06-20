"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    name: "Base Form",
    power: 1000,
    color: "from-gray-400 to-gray-600",
    description: "The foundation — control and balance.",
  },
  {
    name: "Blaze Form",
    power: 5000,
    color: "from-orange-400 to-red-600",
    description: "Flames envelop the body. Power surges.",
  },
  {
    name: "Inferno Form",
    power: 15000,
    color: "from-red-500 to-purple-700",
    description: "The soul ignites. Reality bends.",
  },
  {
    name: "Soul Ascension",
    power: 50000,
    color: "from-purple-500 to-blue-700",
    description: "Transcend mortal limits. Become legend.",
  },
];

export function AnimeTransformations() {
  return (
    <section className="relative py-24 px-4">
      {/* Background energy aura */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-red-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Transformations
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
        >
          Each level unlocks unimaginable power.
        </motion.p>

        <div className="space-y-6">
          {transformations.map((form, i) => {
            const maxPower = 50000;
            const widthPercent = (form.power / maxPower) * 100;

            return (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{form.name}</h3>
                    <p className="text-gray-400 text-sm">{form.description}</p>
                  </div>
                  <span className="text-orange-400 font-mono font-bold text-lg">
                    {form.power.toLocaleString()}
                  </span>
                </div>

                {/* Power bar */}
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${form.color} shadow-lg`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
