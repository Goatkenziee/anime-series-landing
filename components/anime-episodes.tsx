"use client";

import { motion } from "framer-motion";

const episodes = [
  {
    title: "The Awakening",
    episode: "Episode 1",
    description: "Ryo discovers a mysterious flame burning within his chest.",
    duration: "24 min",
    status: "Now Streaming",
  },
  {
    title: "Shadow of the Past",
    episode: "Episode 2",
    description: "Ancient enemies emerge from the darkness.",
    duration: "24 min",
    status: "Now Streaming",
  },
  {
    title: "Clash of Elements",
    episode: "Episode 3",
    description: "The tournament begins. Warriors from across realms gather.",
    duration: "24 min",
    status: "Coming Soon",
  },
  {
    title: "The Moon's Secret",
    episode: "Episode 4",
    description: "Luna uncovers a truth that could shatter the alliance.",
    duration: "24 min",
    status: "Coming Soon",
  },
  {
    title: "Inferno Rising",
    episode: "Episode 5",
    description: "Ryo pushes beyond his limits in a battle for survival.",
    duration: "24 min",
    status: "Coming Soon",
  },
  {
    title: "Final Stand",
    episode: "Episode 6",
    description: "The season finale — destinies collide in an epic showdown.",
    duration: "24 min",
    status: "Coming Soon",
  },
];

export function AnimeEpisodes() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Episodes
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
        >
          The saga unfolds in six blazing chapters.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Episode image placeholder */}
              <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                  <span className="text-2xl">▶</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-purple-400 font-medium">
                    {ep.episode}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      ep.status === "Now Streaming"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {ep.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {ep.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {ep.description}
                </p>
                <span className="text-xs text-gray-500">{ep.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
