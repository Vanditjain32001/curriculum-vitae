"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Code2, MapPin, Layers, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#090d16] text-slate-100 border-b border-slate-800/80"
    >
      {/* Cinematic Dark Twilight Mountain Landscape Background */}
      <div
        className="absolute inset-0 bg-cover bg-bottom pointer-events-none select-none opacity-80 sm:opacity-90 transition-opacity duration-1000"
        style={{ backgroundImage: "url('/hero-mountain-bg.png')" }}
      />

      {/* Smooth vignette dissolve gradients to blend seamlessly into navbar and next sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-transparent to-[#0b0f17] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/85 via-[#090d16]/35 to-transparent pointer-events-none" />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[300px] sm:h-[400px] bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[300px] sm:w-[450px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Bio, Stats & CTAs (Exact Original Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Minimal Kicker */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full" />
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

          {/* Right Column: Floating Rounded Card with Suit Mountain Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end w-full">
            {/* Outer ambient glow aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/10 rounded-[40px] blur-2xl -z-10" />

            {/* Smooth Floating Card as seen in reference photo */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/5] rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] group backdrop-blur-sm bg-slate-900/40">
              <Image
                src="/hero-portrait-perfect.png"
                alt="Vandit Jain"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Inner glass highlight */}
              <div className="absolute inset-0 rounded-[32px] sm:rounded-[36px] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
