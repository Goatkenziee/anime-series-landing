"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SynopsisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="synopsis"
      className="relative py-24 px-4 sm:px-8 lg:px-16"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">THE STORY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              The World
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              In a world where shadows hide more than just light, an ancient
              realm awakens. The Shadow Realm — a dimension of pure darkness and
              untold power — has begun to merge with our own, threatening to
              consume everything in its path.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As rifts tear through reality, ordinary people discover
              extraordinary abilities. But with great power comes an even
              greater price.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-400">
              The Conflict
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Four unlikely heroes must unite to stop the Shadow Realm from
              engulfing their world. Each holds a fragment of an ancient power
              that, when combined, could seal the dimensional rifts forever.
            </p>
            <p className="text-gray-400 leading-relaxed">
              But a dark force lurks within the shadows, pulling strings from
              the darkness. The battle for existence has only just begun.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "12", label: "Episodes" },
            { value: "4", label: "Main Heroes" },
            { value: "3", label: "Realms" },
            { value: "2025", label: "Release" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/5"
            >
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
