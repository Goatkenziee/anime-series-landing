"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Youtube, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Characters", href: "#characters" },
  { label: "Episodes", href: "#episodes" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function AnimeFooter() {
  return (
    <footer className="relative border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">Epic Anime Series</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              A thrilling new saga inspired by the legacy of OneShot and Dragon Ball Z.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Epic Anime Series. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for anime fans everywhere.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
