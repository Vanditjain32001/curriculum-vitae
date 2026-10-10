"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            VJ-OS v3.0 (Go Microservices &amp; Telematics Architecture Engine)
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-semibold">&apos;help&apos;</span> to view available system commands.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-emerald-400 font-semibold">bio</span>: Elevator pitch &amp; background</div>
              <div><span className="text-emerald-400 font-semibold">skills</span>: Technical stack matrix</div>
              <div><span className="text-emerald-400 font-semibold">projects</span>: Summarize featured systems</div>
              <div><span className="text-emerald-400 font-semibold">catena</span>: Catena Clearing telematics spec</div>
              <div><span className="text-emerald-400 font-semibold">panasonic</span>: Panasonic EV fleet backend spec</div>
              <div><span className="text-emerald-400 font-semibold">precium</span>: Dynamic pricing engine spec</div>
              <div><span className="text-emerald-400 font-semibold">fitpass</span>: Fitness infrastructure spec</div>
              <div><span className="text-emerald-400 font-semibold">contact</span>: Direct email, phone &amp; links</div>
              <div><span className="text-emerald-400 font-semibold">resume</span>: Trigger PDF resume download</div>
              <div><span className="text-emerald-400 font-semibold">clear</span>: Flush console buffer</div>
              <div><span className="text-emerald-400 font-semibold">exit</span>: Close terminal window</div>
            </div>
          </div>
        );
        break;

      case "bio":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p>{PERSONAL_INFO.tagline}</p>
            <p className="text-slate-400">Based in {PERSONAL_INFO.location}. 3+ years building Go microservices, event streams, and AI-augmented SDLC delivery.</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p><strong className="text-emerald-400">Core Languages:</strong> Golang (Go), Python</p>
            <p><strong className="text-cyan-400">Backend &amp; Distributed Systems:</strong> Microservices Architecture, Apache Kafka, gRPC, RESTful APIs, Concurrency &amp; Worker Pools</p>
            <p><strong className="text-amber-400">Databases &amp; Caching:</strong> PostgreSQL, Redis, MongoDB</p>
            <p><strong className="text-teal-400">Cloud &amp; DevOps:</strong> AWS Lambda (Serverless), AWS CloudWatch (Observability), Docker, Kubernetes</p>
            <p><strong className="text-purple-400">AI-Augmented SDLC:</strong> Claude (Anthropic Certified: Claude Code 101, Claude Code in Action), Gemini, Codex</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            {PROJECTS.map((p) => (
              <div key={p.id}>
                <span className="text-emerald-400 font-bold">{p.title}</span> —{" "}
                <span className="text-slate-300">{p.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "catena":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Catena Clearing — Telematics Integration Platform</p>
            <p>190+ TSP provider feeds normalized into strict JSON schemas via high-concurrency Go workers.</p>
            <p className="text-cyan-300">Website: https://www.catenaclearing.io/</p>
          </div>
        );
        break;

      case "panasonic":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Panasonic E-Mobility — National EV Rental Platform</p>
            <p>Dual-application API ecosystem (rider/driver) + Operator dashboard for battery health telemetry.</p>
            <p className="text-emerald-300">Result: 20% latency reduction via DB indexing &amp; spatial algorithms.</p>
          </div>
        );
        break;

      case "precium":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Precium — Revenue Optimization Tool</p>
            <p>High-frequency dynamic pricing engine. Technical lead translating client rules into high-throughput microservices.</p>
            <p className="text-cyan-300">Website: https://precium.in/</p>
          </div>
        );
        break;

      case "fitpass":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">FITPASS — Fitness Infrastructure Platform</p>
            <p>Real-time computer vision posture analysis APIs and automated dietician consultation modules.</p>
            <p className="text-cyan-300">Website: https://fitpass.co.in/</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><strong className="text-emerald-400">Email:</strong> {PERSONAL_INFO.email}</p>
            <p><strong className="text-cyan-400">Phone:</strong> {PERSONAL_INFO.phone}</p>
            <p><strong className="text-blue-400">LinkedIn:</strong> {PERSONAL_INFO.linkedin}</p>
            <p><strong className="text-slate-200">GitHub:</strong> {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="text-xs text-emerald-400">
            Triggering download of Vandit_Jain_Resume.pdf...
          </div>
        );
        const link = document.createElement("a");
        link.href = PERSONAL_INFO.resumePdf;
        link.download = "Vandit_Jain_Resume.pdf";
        link.click();
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;help&apos; for a list of valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal("");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
    >
      <div
        className="w-full max-w-3xl h-[520px] max-h-[85vh] bg-[#080d18] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200 font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#0d1527] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>vandit@backend-core:~</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-3"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== "welcome" && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-semibold">vandit@backend:~$</span>
                  <span className="text-slate-100">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-semibold shrink-0">
              vandit@backend:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 p-0"
              autoFocus
              placeholder="type 'help'..."
            />
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="px-3 sm:px-4 py-2 bg-[#0a101e] border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-[10px] sm:text-[11px] text-slate-500">
          <span>Shortcuts: help | skills | projects | contact | resume</span>
          <span className="self-end sm:self-auto">ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
