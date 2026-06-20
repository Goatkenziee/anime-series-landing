"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SynopsisSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="synopsis"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b]/50 to-[#0a0a1a]" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gradient-to-r from-[#ff6b35] to-transparent" />
          <span className="text-[#ff6b35] text-sm font-semibold tracking-widest uppercase">
            The Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8"
            >
              A World on the{" "}
              <span className="text-gradient-orange">Brink</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-6"
            >
              In a reality where time itself is a weapon, a young warrior
              discovers a power that defies the laws of existence. The
              Chrono Strike — an ancient technique said to bend the fabric
              of spacetime — awakens within them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-white/40 leading-relaxed mb-10"
            >
              As dark forces from beyond the dimensional veil converge, an
              unlikely alliance of warriors must master the Chrono Strike to
              prevent the collapse of all timelines. The fate of every
              universe that ever was — or ever could be — hangs in the
              balance.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 sm:gap-10"
            >
              {[
                { value: "12", label: "Episodes" },
                { value: "6", label: "Realms" },
                { value: "∞", label: "Possibilities" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 via-[#ff6b35]/10 to-[#06b6d4]/20 rounded-2xl border border-white/10" />

            {/* Abstract energy art */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Concentric rings */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border"
                    style={{
                      borderColor: `rgba(${i % 2 === 0 ? "139,92,246" : "255,107,53"}, ${0.2 - i * 0.04})`,
                      margin: `${i * 12}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* Center orb */}
                <motion.div
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#8b5cf6] blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white blur-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Orbiting particles */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background:
                        i === 0
                          ? "#ff6b35"
                          : i === 1
                          ? "#8b5cf6"
                          : "#06b6d4",
                      boxShadow: `0 0 10px ${
                        i === 0
                          ? "#ff6b35"
                          : i === 1
                          ? "#8b5cf6"
                          : "#06b6d4"
                      }`,
                    }}
                    animate={{
                      x: [
                        Math.cos((i * Math.PI * 2) / 3) * 80,
                        Math.cos((i * Math.PI * 2) / 3 + Math.PI) * 80,
                        Math.cos((i * Math.PI * 2) / 3) * 80,
                      ],
                      y: [
                        Math.sin((i * Math.PI * 2) / 3) * 80,
                        Math.sin((i * Math.PI * 2) / 3 + Math.PI) * 80,
                        Math.sin((i * Math.PI * 2) / 3) * 80,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
