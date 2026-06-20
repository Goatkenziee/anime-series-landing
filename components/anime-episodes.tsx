"use client";

import { motion } from "framer-motion";
import { Play, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const episodes = [
  { num: 1, title: "The Awakening", desc: "Kael discovers the void within and takes his first step toward destiny.", duration: "24 min", rating: "9.2" },
  { num: 2, title: "Flames of Rebellion", desc: "Luna faces her past as ancient enemies resurface from the shadows.", duration: "22 min", rating: "9.0" },
  { num: 3, title: "Storm Rising", desc: "Zephyr battles his inner demons while a greater threat looms.", duration: "23 min", rating: "8.9" },
  { num: 4, title: "Iron Will", desc: "Terra's unbreakable spirit is tested when the realm faces its darkest hour.", duration: "25 min", rating: "9.4" },
  { num: 5, title: "Convergence", desc: "The four heroes unite as an ancient prophecy begins to unfold.", duration: "26 min", rating: "9.7" },
];

export function AnimeEpisodes() {
  return (
    <section className="relative py-20 md:py-32" id="episodes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="gradient-text">Episodes</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center text-base text-gray-400 sm:text-lg md:text-xl"
        >
          The saga unfolds across five epic chapters
        </motion.p>
        <div className="space-y-4">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900 to-black p-4 transition-all hover:border-purple-600/50 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-lg font-bold text-white">
                    {ep.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{ep.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{ep.desc}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {ep.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" /> {ep.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="shrink-0 gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30">
                  <Play className="h-4 w-4" />
                  <span className="hidden sm:inline">Watch Now</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
