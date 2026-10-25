"use client";

import React from "react";
import { Sparkles, Cpu, Users, Award, GraduationCap, CheckCircle } from "lucide-react";
import { EDUCATION } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0b0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Engineering Philosophy &amp; Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; Architectural Approach
          </h2>
        </div>

        {/* Top Split: Story & AI Edge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Core Values */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
            <div className="p-5 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-lg space-y-3.5 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span>Backend Engineering at Scale</span>
              </h3>
              <p>
                I am a strategic backend software engineer with <span className="text-white font-semibold">3+ years of experience</span> specializing 
                in high-throughput microservices, event-driven distributed systems, and real-time data pipelines in <strong className="text-purple-300 font-semibold">Golang</strong>.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Throughout my career at <span className="text-slate-200 font-medium">RemoteState</span> and enterprise client engagements (including Panasonic and Catena Clearing), 
                I have collaborated closely with Solution Architects, UX Designers, and Product Managers to turn ambitious product roadmaps into resilient, scalable SaaS engines.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                My architectural philosophy centers on <strong className="text-slate-200">low-latency execution</strong>, <strong className="text-slate-200">idempotent event processing</strong>, 
                and <strong className="text-slate-200">bulletproof observability</strong> using metrics, distributed tracing, and automated failover patterns like Circuit Breakers.
              </p>
            </div>

            {/* Leadership & Database */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Technical Leadership</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Mentoring junior developers through structured code reviews, architectural pairing, and fostering a relentless culture of engineering excellence.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Database Precision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  15% query performance improvements across production PostgreSQL and MongoDB through spatial indexing, query plan inspection, and caching strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: AI-Augmented SDLC & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* The AI Edge Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 via-purple-950/20 to-slate-900/90 border border-purple-800/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-wider font-semibold">
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span>Pioneering Advantage</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60 font-semibold">
                  AI-Augmented SDLC
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Accelerated Velocity via LLMs
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than treating AI as an afterthought, I actively pioneer AI-augmented engineering workflows (leveraging <strong className="text-purple-300">Gemini, Claude, and Codex</strong>) 
                to multiply engineering throughput.
              </p>

              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>Rapid JSON schema synthesis &amp; validation for 300+ external telematics vendors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>Automated test-case generation for complex concurrency race conditions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>Streamlined debugging of serverless AWS Lambda and containerized microservices.</span>
                </li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-md space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Academic Foundation</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {EDUCATION.degree}
              </h4>
              <p className="text-xs sm:text-sm text-purple-400 font-semibold">
                {EDUCATION.institution}
              </p>
              <div className="text-xs text-slate-400 flex items-center justify-between font-mono pt-1">
                <span>{EDUCATION.location}</span>
                <span className="text-slate-300 font-medium">{EDUCATION.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
