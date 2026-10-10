"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowRight, Smartphone, Globe } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0b0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-[2.5px] w-6 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 font-mono">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Backend Systems &amp; Case Studies
            </h2>
            <p className="text-slate-400 text-xs sm:text-base max-w-2xl font-normal">
              Production microservices, telematics ingestion pipelines, dynamic pricing engines, 
              and scalable REST backbones engineered for enterprise scale.
            </p>
          </div>
        </div>

        {/* Project Cards Grid (Browser Mockup Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Window Header Bar */}
              <div className="h-9 sm:h-10 bg-slate-950/70 px-3 sm:px-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] inline-block" />
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 ml-1.5 sm:ml-2">
                    {project.id}.production
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
                  {project.statusBadge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">
                {/* Type & Role */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300">
                    {project.type}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-400 font-semibold">
                    {project.role}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300/80 font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80"
                    >
                      <div className="text-xs sm:text-base font-bold font-mono text-cyan-400">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 sm:p-6 bg-slate-950/60 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Deep Dive Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                >
                  <span>View Architecture &amp; Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* External Links */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                      title="Visit Live Website"
                    >
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}

                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                      title="Google Play Store"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Play Store</span>
                    </a>
                  )}

                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                      title="Apple App Store"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>App Store</span>
                    </a>
                  )}

                  {project.links.isConfidential && (
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                      Enterprise / Internal
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
