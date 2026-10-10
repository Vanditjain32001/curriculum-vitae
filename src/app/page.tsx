"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { TerminalModal } from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Interactive Terminal CLI Emulator */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
