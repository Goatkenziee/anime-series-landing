"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#" },
  { name: "Episodes", href: "#" },
  { name: "Characters", href: "#" },
  { name: "Merch", href: "#" },
  { name: "Community", href: "#" },
];

export function AnimeFooter() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent mb-3">
                SOUL BLAZE
              </h3>
              <p className="text-gray-400 text-sm max-w-xs">
                An original anime series. Power awakens within us all.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow the Saga</h4>
            <div className="flex gap-3">
              {["Twitter", "Discord", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500/20 hover:text-orange-400 transition-all text-sm"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Soul Blaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
