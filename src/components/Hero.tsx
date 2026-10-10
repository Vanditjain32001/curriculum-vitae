"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Code2, MapPin, Layers, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0b0f17] text-slate-100 border-b border-slate-800/80">
      {/* Soft atmospheric gradient glows */}
      <div className="absolute top-0 right-1/4 w-[350px] sm:w-[600px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-5 sm:left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[400px] bg-indigo-600/10 blur-[90px] sm:blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-5 sm:right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[300px] bg-cyan-600/10 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Bio, Stats & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 z-20">
            {/* Minimal Kicker */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 font-mono">
                About Me
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.65rem] font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.08] break-words">
                <span className="block">Hi, I&apos;m {PERSONAL_INFO.name},</span>
                <span className="block">
                  a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                    Software Engineer
                  </span>
                </span>
                <span className="block text-slate-200">based in India.</span>
              </h1>
            </div>

            {/* Summary description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Specializing in high-concurrency <strong className="text-white font-semibold">Golang microservices</strong>, 
              scalable event-driven pipelines (<strong className="text-purple-300 font-semibold">Kafka &amp; Redis</strong>), 
              and pioneering <strong className="text-cyan-300 font-semibold">AI-augmented engineering workflows</strong> to accelerate software delivery.
            </p>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 pt-1 sm:pt-2">
              <div className="relative min-w-0">
                <div className="mb-2 sm:mb-2.5 flex size-10 sm:size-11 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-purple-400 shadow-sm">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white">3+ Years</div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-snug">Professional Experience</div>
              </div>

              <div className="relative min-w-0 sm:pl-4 lg:pl-5 sm:before:absolute sm:before:inset-y-2 sm:before:left-0 sm:before:w-px sm:before:bg-slate-800">
                <div className="mb-2 sm:mb-2.5 flex size-10 sm:size-11 items-center justify-center rounded-xl border border-indigo-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-indigo-400 shadow-sm">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white">India</div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-snug">Based in New Delhi</div>
              </div>

              <div className="relative min-w-0 sm:pl-4 lg:pl-5 sm:before:absolute sm:before:inset-y-2 sm:before:left-0 sm:before:w-px sm:before:bg-slate-800">
                <div className="mb-2 sm:mb-2.5 flex size-10 sm:size-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-cyan-400 shadow-sm">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Backend</div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-snug">Go, Microservices, Postgres</div>
              </div>

              <div className="relative min-w-0 sm:pl-4 lg:pl-5 sm:before:absolute sm:before:inset-y-2 sm:before:left-0 sm:before:w-px sm:before:bg-slate-800">
                <div className="mb-2 sm:mb-2.5 flex size-10 sm:size-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-emerald-400 shadow-sm">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white">AI-Augmented</div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-snug">Fast SDLC Velocity</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-6 sm:px-7 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#projects"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-xl border border-slate-700 hover:border-purple-500/80 bg-slate-900/60 hover:bg-slate-800/80 px-5 sm:px-6 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>See Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: Elongated Natural Suit Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            {/* Outer ambient glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/20 rounded-[2rem] blur-xl sm:blur-2xl -z-10" />

            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] h-[460px] sm:h-[540px] lg:h-[630px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-[#0b0f17] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              {/* Natural Photograph in tailored suit */}
              <Image
                src="/vandit-suit-portrait.png"
                alt="Vandit Jain"
                width={1000}
                height={1220}
                priority
                className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Bottom smooth dark dissolve gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-transparent pointer-events-none"
              />

              {/* Bottom one-liner */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center shrink-0 text-purple-400">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <p className="text-[11px] sm:text-xs text-slate-200 leading-snug sm:leading-relaxed font-normal">
                  <strong className="text-white font-semibold">Curious problem solver &amp; continuous learner</strong> — turning complex challenges into resilient, scalable systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
