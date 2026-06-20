"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1a]/50 to-[#0a0a1a] z-[1]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 text-xs tracking-widest uppercase bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-orange-400">
            Coming Soon
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
        >
          <span className="gradient-text text-glow">SHADOW</span>
          <br />
          <span className="text-white text-glow-blue">REALM</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Beyond the veil of reality, a war for existence has begun. 
          <span className="text-orange-400">Choose your destiny.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#synopsis"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Explore the Realm
          </a>
          <a
            href="#characters"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Meet the Heroes
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-orange-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
