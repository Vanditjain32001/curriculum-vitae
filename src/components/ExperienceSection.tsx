"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#0b0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-2xl">
            Demonstrated engineering leadership, production reliability, and high-velocity microservice delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-6 sm:space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-8 space-y-5 sm:space-y-6 hover:border-slate-700 transition-all shadow-xl"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                {exp.summary}
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {exp.achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{ach.title}</span>
                    </div>
                    <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed pl-6">
                      {ach.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">
                  Stack Deployed:
                </span>
                {exp.techUsed.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Card in Timeline */}
          <div className="rounded-2xl bg-slate-900/30 border border-slate-800/80 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs sm:text-sm text-purple-400 font-semibold">
                  {EDUCATION.institution} &bull; {EDUCATION.location}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs sm:text-sm text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full self-start sm:self-center border border-slate-700/60">
              {EDUCATION.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
