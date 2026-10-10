"use client";

import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Bio */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-black tracking-tight text-white">
                Vandit<span className="text-purple-400">.</span>
              </span>
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/50">
                Backend Engineer
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              Go &bull; Distributed Microservices &bull; Event Streaming &bull; AI-Augmented SDLC
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-purple-400 border border-slate-800 transition-colors cursor-pointer"
              title="Open Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-purple-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 font-bold" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            &copy; 2026 Vandit Jain. All rights reserved.
          </div>
          <div>
            Built with Next.js 16, TypeScript &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
