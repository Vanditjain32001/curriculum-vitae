"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, Award } from "lucide-react";
import {
  GoIcon,
  KafkaIcon,
  PostgresIcon,
  RedisIcon,
  MongoIcon,
  DockerIcon,
  KubernetesIcon,
  LambdaIcon,
  CloudWatchIcon,
  ClaudeIcon,
  GrpcIcon,
  MicroservicesIcon,
  RestApiIcon,
  ConcurrencyIcon,
  PythonIcon,
  SnowflakeIcon,
  DynamoDbIcon,
  AwsIcon,
  DockerK8sIcon,
} from "./TechIcons";
import { SKILL_CATEGORIES, Skill } from "@/data/portfolioData";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(
    SKILL_CATEGORIES[0].skills[0]
  );

  const renderTechIcon = (iconId: string) => {
    switch (iconId) {
      case "go":
        return <GoIcon className="w-5 h-5 shrink-0" />;
      case "microservices":
        return <MicroservicesIcon className="w-5 h-5 shrink-0" />;
      case "grpc":
        return <GrpcIcon className="w-5 h-5 shrink-0" />;
      case "rest":
        return <RestApiIcon className="w-5 h-5 shrink-0" />;
      case "concurrency":
        return <ConcurrencyIcon className="w-5 h-5 shrink-0" />;
      case "python":
        return <PythonIcon className="w-5 h-5 shrink-0" />;
      case "kafka":
        return <KafkaIcon className="w-5 h-5 shrink-0" />;
      case "postgres":
        return <PostgresIcon className="w-5 h-5 shrink-0" />;
      case "redis":
        return <RedisIcon className="w-5 h-5 shrink-0" />;
      case "mongo":
        return <MongoIcon className="w-5 h-5 shrink-0" />;
      case "snowflake":
        return <SnowflakeIcon className="w-5 h-5 shrink-0" />;
      case "dynamodb":
        return <DynamoDbIcon className="w-5 h-5 shrink-0" />;
      case "docker-k8s":
        return <DockerK8sIcon className="w-5 h-5 shrink-0" />;
      case "docker":
        return <DockerIcon className="w-5 h-5 shrink-0" />;
      case "k8s":
        return <KubernetesIcon className="w-5 h-5 shrink-0" />;
      case "aws":
        return <AwsIcon className="w-5 h-5 shrink-0" />;
      case "lambda":
        return <LambdaIcon className="w-5 h-5 shrink-0" />;
      case "cloudwatch":
        return <CloudWatchIcon className="w-5 h-5 shrink-0" />;
      case "claude":
        return <ClaudeIcon className="w-5 h-5 shrink-0" />;
      default:
        return <GoIcon className="w-5 h-5 shrink-0" />;
    }
  };

  const visibleCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-[#0b0f17] border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header: API Endpoint style (Deepanshu inspired) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold">
                GET
              </span>
              <span className="text-xs font-mono text-cyan-400">/api/skills</span>
              <span className="text-slate-600">·</span>
              <span className="text-xs font-mono text-slate-400">
                3 Core Production Domains
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack &amp; Architecture
            </h2>
            <p className="text-slate-400 text-xs sm:text-base max-w-2xl font-normal">
              Production technologies powering low-latency Go microservices, distributed event streaming pipelines, and Anthropic-certified AI development velocity.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-500 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Click or hover any tech to inspect specs</span>
          </div>
        </div>

        {/* Sub-route Tabs (Deepanshu Inspired) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-mono">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "all"
                ? "bg-purple-950/80 border-purple-500/80 text-purple-300 font-semibold shadow-md shadow-purple-900/20"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            All Domains ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                activeTab === cat.id
                  ? "bg-purple-950/80 border-purple-500/80 text-purple-300 font-semibold shadow-md shadow-purple-900/20"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              <span className="text-purple-400 mr-1.5 font-bold">0{idx + 1}.</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* 3 Core Domains Grid */}
        <div
          className={`grid gap-5 ${
            visibleCategories.length === 1
              ? "grid-cols-1 max-w-2xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleCategories.map((catGroup, idx) => (
            <div
              key={catGroup.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-4 sm:p-5 flex flex-col space-y-4 hover:border-slate-700/80 transition-all shadow-lg"
            >
              {/* Domain Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-purple-400 font-bold">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {catGroup.category}
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-cyan-400/80">
                    {catGroup.endpoint}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {catGroup.skills.length} tools
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 gap-2 flex-1">
                {catGroup.skills.map((skill) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                        isSelected
                          ? "bg-slate-800/90 border-purple-500/70 shadow-md shadow-purple-500/10 -translate-y-0.5"
                          : "bg-slate-950/60 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {renderTechIcon(skill.iconId)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                            {skill.name}
                          </div>
                          {skill.certificates ? (
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <a
                                href="https://verify.skilljar.com/c/taxkqbwnri8c"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-gradient-to-r from-amber-950/90 to-purple-950/90 hover:from-amber-900 hover:to-purple-900 border border-amber-700/70 hover:border-amber-400 text-amber-200 inline-flex items-center gap-1 transition-all shadow-sm"
                                title="View Anthropic Academy Verified Credential: Claude Code in Action"
                              >
                                <Award className="w-3 h-3 text-amber-400 shrink-0" />
                                <span>Cert ↗</span>
                              </a>
                            </div>
                          ) : (
                            <div className="text-[11px] text-slate-400 truncate">
                              {skill.highlight}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {skill.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Tech Spec Inspector Bar (Deepanshu Inspired) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/95 via-purple-950/20 to-slate-900/95 border border-purple-800/40 shadow-xl flex flex-col space-y-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-sm">
                {renderTechIcon(selectedSkill.iconId)}
              </div>
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    {selectedSkill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                    Production Verified
                  </span>
                  {selectedSkill.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300">
                      {selectedSkill.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  {selectedSkill.highlight}
                </p>
              </div>
            </div>

            {selectedSkill.projects && (
              <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800 text-xs font-mono">
                <span className="text-slate-500">Production Use:</span>
                <span className="text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 font-semibold">
                  {selectedSkill.projects}
                </span>
              </div>
            )}
          </div>

          {/* Anthropic Academy Verified Credentials Row (if skill has certificates) */}
          {selectedSkill.certificates && selectedSkill.certificates.length > 0 && (
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 font-semibold">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Anthropic Academy Verified Credentials:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {selectedSkill.certificates.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-950/80 to-indigo-950/80 hover:from-purple-900 hover:to-indigo-900 border border-purple-700/60 hover:border-purple-400 text-xs font-mono text-purple-100 transition-all shadow-sm group/cert"
                    title={`View official credential for ${cert.title}`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="underline decoration-purple-400/50 underline-offset-2 font-medium">
                      {cert.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-purple-400 transition-transform group-hover/cert:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
