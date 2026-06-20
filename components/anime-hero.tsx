"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Sparkles, Play, ChevronDown } from "lucide-react";

export function AnimeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(arr);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-energy-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-[100px] animate-energy-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>New Series Premiering Soon</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="gradient-text">Epic Anime</span>
          <br />
          <span className="text-white">Series</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          A thrilling new saga inspired by the legacy of OneShot and Dragon Ball Z.
          Unleash your power, discover new transformations, and fight for destiny.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#episodes">
              <Play className="w-5 h-5 mr-2" />
              Watch Trailer
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#characters">
              Meet the Characters
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
