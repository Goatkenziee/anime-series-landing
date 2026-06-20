"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              SHADOW REALM
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              An epic new anime series coming soon. Enter a world where shadows
              hold power and destiny awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Synopsis", "Characters", "Trailer"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-orange-400 text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {["Twitter", "YouTube", "Discord"].map((platform) => (
                <span
                  key={platform}
                  className="text-gray-500 hover:text-orange-400 text-sm cursor-pointer transition-colors duration-300"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Shadow Realm. All rights reserved.
            This is a fictional project.
          </p>
        </div>
      </div>
    </footer>
  );
}
