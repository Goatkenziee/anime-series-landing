"use client";

import React from "react";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Story", href: "#synopsis" },
  { label: "Characters", href: "#characters" },
  { label: "Trailer", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a1a] px-4 py-12 sm:px-6 lg:px-8">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Top row: logo + links */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-xs font-black text-black">
              CS
            </div>
            <span className="text-sm font-bold tracking-wider text-white transition-colors group-hover:text-orange-400">
              CHRONO STRIKE
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/5" />

        {/* Bottom row: copyright + social */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Chrono Strike. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Social icons */}
            {[
              { label: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              { label: "Discord", icon: "M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 16.59h.09a15.9 15.9 0 0 0 3.35 1.86s.37-.52.72-1.02a12.3 12.3 0 0 1-1.18-.56 4.6 4.6 0 0 0 .1-.07 9.28 9.28 0 0 0 7.32 0 4.6 4.6 0 0 0 .1.07 12.3 12.3 0 0 1-1.18.56l.72 1.02a15.9 15.9 0 0 0 3.35-1.86h.09a17.33 17.33 0 0 0-3-16.59 16 16 0 0 0-4.13-1.3zM9.71 13.91a1.7 1.7 0 0 1-1.57-1.75 1.7 1.7 0 0 1 1.57-1.76 1.7 1.7 0 0 1 1.58 1.76 1.7 1.7 0 0 1-1.58 1.75zm4.58 0a1.7 1.7 0 0 1-1.58-1.75 1.7 1.7 0 0 1 1.58-1.76 1.7 1.7 0 0 1 1.57 1.76 1.7 1.7 0 0 1-1.57 1.75z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
                aria-label={social.label}
              >
                <svg
                  className="h-4 w-4 fill-gray-500 transition-colors group-hover:fill-orange-400"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
