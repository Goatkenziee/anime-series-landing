"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const characters = [
  {
    name: "Ryo Tenshi",
    title: "The Chrono Wielder",
    color: "#ff6b35",
    gradient: "from-[#ff6b35] to-[#ff8c42]",
    description:
      "A prodigy who awakened the Chrono Strike within. Reckless, fierce, and driven by an unbreakable will to protect those he loves.",
    power: "Time Manipulation",
    symbol: "⏳",
  },
  {
    name: "Kai Stormveil",
    title: "The Void Walker",
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    description:
      "A mysterious warrior from a fractured dimension. Master of the Void Arts, he seeks redemption for a past he cannot remember.",
    power: "Dimensional Shift",
    symbol: "🌀",
  },
  {
    name: "Luna Aethel",
    title: "The Arcane Sentinel",
    color: "#06b6d4",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    description:
      "Last of the ancient Aethel bloodline, she wields crystalline arcane magic. Calm, calculating, and devastating in battle.",
    power: "Crystal Arcana",
    symbol: "💎",
  },
  {
    name: "Zarathos",
    title: "The Chronophage",
    color: "#ef4444",
    gradient: "from-[#ef4444] to-[#f87171]",
    description:
      "A being from beyond the timestream who consumes entire timelines. His arrival signals the beginning of the end.",
    power: "Timeline Devourer",
    symbol: "🌑",
  },
];

export default function CharactersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      id="characters"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b]/30 to-[#0a0a1a]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
            <span className="text-[#8b5cf6] text-sm font-semibold tracking-widest uppercase">
              The Warriors
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
          >
            Meet the{" "}
            <span className="text-gradient-purple">Legends</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            Every hero has a story. Every villain has a reason. These are the
            souls who will decide the fate of all realities.
          </motion.p>
        </div>

        {/* Character cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {characters.map((char, i) => (
            <CharacterCard key={char.name} character={char} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CharacterCard({
  character,
  index,
}: {
  character: (typeof characters)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${character.color} 0%, transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div className="relative p-6 sm:p-8">
        {/* Symbol + power badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl sm:text-4xl">{character.symbol}</span>
          <span
            className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium uppercase tracking-wider"
            style={{
              color: character.color,
              background: `${character.color}15`,
              border: `1px solid ${character.color}30`,
            }}
          >
            {character.power}
          </span>
        </div>

        {/* Avatar placeholder */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 rounded-full overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${character.gradient} opacity-30`}
          />
          <div className="absolute inset-2 rounded-full bg-[#0a0a1a] flex items-center justify-center">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${character.color}, transparent)`,
              }}
            />
          </div>
          {/* Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 opacity-50"
            style={{
              borderColor: character.color,
              boxShadow: `0 0 15px ${character.color}40`,
            }}
          />
        </div>

        {/* Name & Title */}
        <div className="text-center mb-4">
          <h3
            className="text-lg sm:text-xl font-black tracking-tight mb-1"
            style={{ color: character.color }}
          >
            {character.name}
          </h3>
          <p className="text-xs sm:text-sm text-white/40 font-medium">
            {character.title}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/40 leading-relaxed text-center">
          {character.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${character.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}
