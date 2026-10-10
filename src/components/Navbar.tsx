"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3 text-slate-100"
          : "bg-transparent py-3.5 sm:py-5 text-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex items-center gap-1.5 group focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Vandit<span className="text-purple-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links in pill container */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 lg:px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 lg:px-3 py-1.5 rounded-full transition-colors hover:bg-slate-800/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Tablet & Desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
          {/* CLI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-800/50 hover:bg-purple-900/40 px-2.5 lg:px-3 py-1.5 rounded-lg transition-all cursor-pointer"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>&gt;_ CLI</span>
          </button>

          {/* Social Icons (Large Screens) */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden lg:flex text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden lg:flex text-slate-400 hover:text-purple-300 p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Highlighted Resume CTA */}
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Vandit_Jain_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-4 lg:px-5 py-2 rounded-xl transition-all shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer"
            title="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Vandit_Jain_Resume.pdf"
            className="flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1.5 rounded-lg shadow-sm shadow-purple-500/30"
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 p-2 rounded-lg hover:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1422]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-md hover:bg-slate-800/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-purple-300 hover:bg-slate-800"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>CLI Terminal</span>
              </button>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Vandit_Jain_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-purple-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
