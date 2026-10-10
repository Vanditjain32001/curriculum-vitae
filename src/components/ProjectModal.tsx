"use client";

import React, { useState, useEffect } from "react";
import { X, ExternalLink, ShieldCheck, Cpu, GitBranch, Layers, Activity, Smartphone, Globe, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "metrics">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300">
                {project.type}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {project.role}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                ● {project.statusBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 pt-3 border-b border-slate-800/80 bg-slate-900 overflow-x-auto no-scrollbar text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "overview"
                ? "border-emerald-400 text-emerald-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "architecture"
                ? "border-emerald-400 text-emerald-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab("challenges")}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "challenges"
                ? "border-emerald-400 text-emerald-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Engineering Challenges
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "metrics"
                ? "border-emerald-400 text-emerald-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Key Metrics & Links
          </button>
        </div>

        {/* Tab Content (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Project Deep-Dive
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/80 text-emerald-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>Data Flow & Component Interactions</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-emerald-300 leading-relaxed border border-slate-800/80">
                  {project.architectureOverview}
                </div>
              </div>

              {project.pipelineSteps && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Pipeline Execution Steps
                  </h4>
                  <div className="space-y-2">
                    {project.pipelineSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 text-xs sm:text-sm"
                      >
                        <span className="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Obstacles & Solutions
              </h4>
              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs font-mono">
                      <span>Challenge #{idx + 1}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "metrics" && (
            <div className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="text-lg font-bold font-mono text-emerald-400">{m.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Links and verification section */}
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verification & External Links
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-medium transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Website ({project.links.website.replace("https://", "")})</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}

                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>Google Play Store</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}

                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                    >
                      <Smartphone className="w-4 h-4 text-cyan-400" />
                      <span>Apple App Store</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}

                  {project.links.isConfidential && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Enterprise Platform (Internal ecosystem for Panasonic EV fleet operators)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
