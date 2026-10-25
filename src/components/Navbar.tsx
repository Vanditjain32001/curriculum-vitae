"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Download, Menu, X, Moon, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-white/5 shadow-2xl py-3.5"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex items-center gap-1 group focus:outline-none"
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            Vandit<span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* CLI Terminal Pill Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-800/40 hover:bg-purple-900/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>CLI</span>
          </button>

          {/* Theme Indicator Pill */}
          <div
            className="flex items-center gap-2 p-1.5 px-2.5 rounded-full bg-slate-900/60 border border-white/5 text-slate-400"
            title="Dark mode active"
          >
            <Moon className="w-3.5 h-3.5 text-purple-400" />
            <Sun className="w-3.5 h-3.5 text-slate-600" />
          </div>

          {/* Highlighted Resume Pill CTA */}
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Vandit_Jain_Resume.pdf"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-500 hover:from-indigo-400 hover:via-purple-500 hover:to-purple-400 px-5 sm:px-6 py-2.5 rounded-full transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 active:scale-95 cursor-pointer"
            title="Download Resume PDF"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Vandit_Jain_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3.5 py-1.5 rounded-full shadow-sm shadow-purple-500/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 p-2 rounded-lg hover:bg-slate-800/80 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
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
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-purple-300 hover:bg-slate-800"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>CLI Terminal</span>
              </button>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Vandit_Jain_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-purple-500/20"
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
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
