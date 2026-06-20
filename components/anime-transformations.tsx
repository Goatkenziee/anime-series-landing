"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, Star } from "lucide-react";

const transformations = [
  {
    name: "Base Form",
    power: 5000,
    color: "from-blue-400 to-cyan-400",
    description: "The starting point of every warrior's journey.",
    aura: "rgba(96, 165, 250, 0.15)",
  },
  {
    name: "Super Form",
    power: 15000,
    color: "from-yellow-400 to-orange-400",
    description: "A surge of power that multiplies strength threefold.",
    aura: "rgba(251, 191, 36, 0.2)",
  },
  {
    name: "Ultra Instinct",
    power: 35000,
    color: "from-purple-400 to-pink-400",
    description: "The body moves before the mind can think. Absolute precision.",
    aura: "rgba(192, 132, 252, 0.25)",
  },
  {
    name: "Cosmic Awakening",
    power: 80000,
    color: "from-red-400 to-purple-600",
    description: "The ultimate evolution — harnessing the power of the cosmos itself.",
    aura: "rgba(239, 68, 68, 0.3)",
  },
];

export function AnimeTransformations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const active = transformations[activeIndex];

  return (
    <section id="transformations" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Unlock new levels of power through ancient techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Visual Display */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-gray-900 to-gray-950"
          >
            {/* Aura effect */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${active.aura}, transparent 70%)`,
              }}
            />

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`w-32 h-32 rounded-full bg-gradient-to-br ${active.color} blur-3xl animate-energy-pulse`}
              />
            </div>

            {/* Power level in center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-5xl md:text-7xl font-bold text-white">{active.power.toLocaleString()}</p>
              <p className="text-sm text-gray-400 mt-2">Power Level</p>
            </div>
          </motion.div>

          {/* Transformation List */}
          <div className="space-y-3">
            {transformations.map((t, i) => (
              <motion.button
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                  i === activeIndex
                    ? "border-purple-500/50 bg-purple-500/10"
                    : "border-border bg-card hover:border-purple-500/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${t.color}`} />
                    <span className="font-semibold text-white">{t.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-400">{t.power.toLocaleString()}</span>
                    {i === activeIndex && <ChevronRight className="w-4 h-4 text-purple-400" />}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1 ml-6">{t.description}</p>
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button asChild>
                <a href="#episodes">
                  Unlock Your Power
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
