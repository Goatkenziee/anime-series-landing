"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Clock, Calendar } from "lucide-react";

const episodes = [
  {
    number: 1,
    title: "The Awakening",
    duration: "24 min",
    date: "Coming Soon",
    description: "Ryo Kenshin discovers his hidden power when an ancient evil threatens his village.",
    image: null,
  },
  {
    number: 2,
    title: "Clash of Titans",
    duration: "24 min",
    date: "Coming Soon",
    description: "An unexpected rival appears. The battle for supremacy begins.",
    image: null,
  },
  {
    number: 3,
    title: "The Dark Past",
    duration: "24 min",
    date: "Coming Soon",
    description: "Kaito Shadow's mysterious past is revealed, changing everything.",
    image: null,
  },
  {
    number: 4,
    title: "Cosmic Convergence",
    duration: "24 min",
    date: "Coming Soon",
    description: "The celestial alignment grants unimaginable power to those who dare to reach for it.",
    image: null,
  },
];

export function AnimeEpisodes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="episodes" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Episodes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The saga unfolds in four epic chapters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <Card className="group relative overflow-hidden p-0">
                {/* Episode Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-all group-hover:scale-110">
                      <Play className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-medium">
                      EP {String(ep.number).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Episode Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {ep.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {ep.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {ep.date}
                      </span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <a href="#">
                        <Play className="w-3.5 h-3.5 mr-1" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg">
            <a href="#">
              <Play className="w-5 h-5 mr-2" />
              Watch All Episodes
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
