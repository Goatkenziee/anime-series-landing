"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Youtube, Heart } from "lucide-react";

export function AnimeFooter() {
  return (
    <footer className="relative border-t border-gray-800 bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="gradient-text">Epic Anime Series</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              A new saga awaits. Are you ready?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 sm:gap-6"
          >
            {[
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Github, href: "#" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-purple-600 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-600/20 sm:h-12 sm:w-12"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-1 text-xs text-gray-600 sm:text-sm"
          >
            Made with <Heart className="h-3 w-3 text-red-500" /> for anime fans everywhere
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
