"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Swords, Zap, Shield, Flame } from "lucide-react";

const characters = [
  {
    name: "Ryo Kenshin",
    title: "The Awakened",
    icon: Swords,
    description: "A warrior blessed with the power of the ancient spirit. His determination knows no bounds.",
    color: "from-purple-500 to-blue-500",
    power: 9800,
  },
  {
    name: "Luna Starfire",
    title: "The Celestial Mage",
    icon: Zap,
    description: "Master of cosmic energy who can bend reality itself. Her power grows with every battle.",
    color: "from-pink-500 to-rose-500",
    power: 9500,
  },
  {
    name: "Kaito Shadow",
    title: "The Dark Protector",
    icon: Shield,
    description: "Once a villain, now Earth's greatest defender. His dark past fuels his righteous fury.",
    color: "from-indigo-500 to-purple-500",
    power: 9200,
  },
  {
    name: "Aria Blaze",
    title: "The Phoenix Warrior",
    icon: Flame,
    description: "Reborn from the ashes of defeat, she wields fire that can consume even the darkest evil.",
    color: "from-orange-500 to-red-500",
    power: 8900,
  },
];

export function AnimeCharacters() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="characters" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Legendary Warriors</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Each hero brings a unique power and backstory to the series.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => {
            const Icon = char.icon;
            return (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Card className="group relative overflow-hidden p-6 h-full">
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${char.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${char.color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-bold text-white mb-1">{char.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{char.title}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">{char.description}</p>

                  {/* Power Level */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-500">Power Level</span>
                      <span className={`font-bold bg-gradient-to-r ${char.color} bg-clip-text text-transparent`}>
                        {char.power.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(char.power / 10000) * 100}%` } : {}}
                        transition={{ delay: i * 0.15 + 0.5, duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${char.color}`}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
