"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Resilient Systems Together
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            Whether you&apos;re looking to scale backend microservices, design event-driven streaming pipelines in Go, 
            or explore AI-augmented development velocity — let&apos;s talk.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Email Address</h3>
              <p className="text-xs font-mono text-slate-300 break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-slate-950 transition-colors"
              >
                <span>Write</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Direct Line</h3>
              <p className="text-xs font-mono text-slate-300">
                {PERSONAL_INFO.phone}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-cyan-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs font-semibold text-slate-950 transition-colors"
              >
                <span>Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Socials Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Location &amp; Profiles</h3>
              <p className="text-xs font-mono text-slate-300">
                {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
