"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2, AlertCircle, Cpu, Database, Server, Radio, ArrowRight, Zap } from "lucide-react";

interface PipelineLog {
  timestamp: string;
  stage: string;
  message: string;
  latency: string;
  status: "success" | "processing" | "pending";
}

const SAMPLE_TSPS = [
  { provider: "Geotab Protocol", unit: "GEO-9921", lat: "28.6139° N", lon: "77.2090° E", speed: "68 km/h" },
  { provider: "Samsara IoT", unit: "SAM-4402", lat: "19.0760° N", lon: "72.8777° E", speed: "42 km/h" },
  { provider: "Omnitracs ELD", unit: "OMN-1084", lat: "12.9716° N", lon: "77.5946° E", speed: "81 km/h" },
  { provider: "Motive Telematics", unit: "MOT-7231", lat: "13.0827° N", lon: "80.2707° E", speed: "55 km/h" },
];

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [currentPacket, setCurrentPacket] = useState(SAMPLE_TSPS[0]);
  const [packetCount, setPacketCount] = useState<number>(1420);
  const [pipelineLogs, setPipelineLogs] = useState<PipelineLog[]>([
    {
      timestamp: "12:30:14.102",
      stage: "Raw Ingestion",
      message: "Received 300+ TSP provider telemetry feed",
      latency: "1.2ms",
      status: "success",
    },
    {
      timestamp: "12:30:14.108",
      stage: "Go Worker Pool",
      message: "Goroutine worker #8 acquired packet",
      latency: "2.4ms",
      status: "success",
    },
    {
      timestamp: "12:30:14.115",
      stage: "Schema Validation",
      message: "Strict JSON schema normalization passed",
      latency: "4.1ms",
      status: "success",
    },
    {
      timestamp: "12:30:14.124",
      stage: "Kafka Stream",
      message: "Published to partition 'telematics.normalized.v1'",
      latency: "7.8ms",
      status: "success",
    },
    {
      timestamp: "12:30:14.135",
      stage: "Storage & Cache",
      message: "PostgreSQL write committed & hot Redis cache updated",
      latency: "12.6ms",
      status: "success",
    },
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    const randomSample = SAMPLE_TSPS[Math.floor(Math.random() * SAMPLE_TSPS.length)];
    setCurrentPacket(randomSample);
    setPacketCount((prev) => prev + 1);

    const newLogs: PipelineLog[] = [];
    const now = new Date();
    const formatTime = (msOffset: number) => {
      const d = new Date(now.getTime() + msOffset);
      return `${d.toTimeString().split(" ")[0]}.${d.getMilliseconds().toString().padStart(3, "0")}`;
    };

    // Step 1: Ingestion
    setTimeout(() => {
      setActiveStep(1);
      newLogs.push({
        timestamp: formatTime(2),
        stage: "Raw Ingestion",
        message: `Ingesting raw packet from ${randomSample.provider} (${randomSample.unit})`,
        latency: "1.8ms",
        status: "success",
      });
      setPipelineLogs([...newLogs]);
    }, 400);

    // Step 2: Go Concurrency Pool
    setTimeout(() => {
      setActiveStep(2);
      newLogs.push({
        timestamp: formatTime(7),
        stage: "Go Worker Pool",
        message: `Dispatched to concurrent worker pool (Goroutine #${Math.floor(Math.random() * 32) + 1})`,
        latency: "3.2ms",
        status: "success",
      });
      setPipelineLogs([...newLogs]);
    }, 900);

    // Step 3: Schema Normalizer
    setTimeout(() => {
      setActiveStep(3);
      newLogs.push({
        timestamp: formatTime(14),
        stage: "Schema Validation",
        message: `Unified JSON Schema validation succeeded without drift`,
        latency: "5.4ms",
        status: "success",
      });
      setPipelineLogs([...newLogs]);
    }, 1400);

    // Step 4: Kafka Event Stream
    setTimeout(() => {
      setActiveStep(4);
      newLogs.push({
        timestamp: formatTime(22),
        stage: "Kafka Stream",
        message: `Appended to Kafka cluster topic 'fleet.telematics.live'`,
        latency: "8.1ms",
        status: "success",
      });
      setPipelineLogs([...newLogs]);
    }, 1900);

    // Step 5: Persistence
    setTimeout(() => {
      setActiveStep(5);
      newLogs.push({
        timestamp: formatTime(31),
        stage: "Storage & Cache",
        message: `Persisted to PostgreSQL & indexed in Redis hot cache`,
        latency: "14.2ms",
        status: "success",
      });
      setPipelineLogs([...newLogs]);
      setIsRunning(false);
    }, 2400);
  };

  const steps = [
    {
      title: "1. TSP Ingest",
      desc: "300+ Providers Feed",
      icon: <Radio className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: "2. Go Workers",
      desc: "Goroutine Pool",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: "3. JSON Schema",
      desc: "Strict Validation",
      icon: <CheckCircle2 className="w-4 h-4 text-amber-400" />,
    },
    {
      title: "4. Kafka Bus",
      desc: "Partitioned Stream",
      icon: <Zap className="w-4 h-4 text-purple-400" />,
    },
    {
      title: "5. DB & Cache",
      desc: "Postgres + Redis",
      icon: <Database className="w-4 h-4 text-teal-400" />,
    },
  ];

  return (
    <section id="simulator" className="py-20 bg-[#0b0f17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive Architecture Visualizer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Telematics Data Pipeline Simulator
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Simulate an incoming telematics packet from 300+ providers and observe 
              the Go worker pool, JSON schema normalizer, Kafka bus, and persistent cache in action.
            </p>
          </div>

          {/* Trigger button */}
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg cursor-pointer ${
              isRunning
                ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                : "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:from-emerald-400 hover:to-cyan-400 shadow-emerald-500/20 hover:scale-[1.02]"
            }`}
          >
            <Play className={`w-4 h-4 ${isRunning ? "animate-spin" : ""}`} />
            <span>{isRunning ? "Processing Stream..." : "Simulate Telemetry Packet"}</span>
          </button>
        </div>

        {/* Pipeline Step Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((st, idx) => {
            const stepNumber = idx + 1;
            const isCurrent = activeStep === stepNumber;
            const isCompleted = activeStep > stepNumber || activeStep === 0;

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-500/20 scale-[1.02]"
                    : isCompleted
                    ? "bg-slate-900/60 border-slate-800"
                    : "bg-slate-950/40 border-slate-900 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="p-1.5 rounded-lg bg-slate-800/80">{st.icon}</div>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isCurrent
                        ? "bg-emerald-500 text-slate-950 font-bold animate-pulse"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    Step {stepNumber}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">{st.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{st.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Live Simulator Body: Current Packet & Execution Log */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Packet Info Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/50 border border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Current IoT Telemetry Packet
              </span>
              <span className="text-xs font-mono text-slate-400">
                Packets: #{packetCount}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Provider:</span>
                <span className="text-emerald-400 font-semibold">{currentPacket.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Vehicle Unit ID:</span>
                <span className="text-cyan-300">{currentPacket.unit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Coordinates:</span>
                <span className="text-slate-200">{currentPacket.lat}, {currentPacket.lon}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Speed Telemetry:</span>
                <span className="text-amber-300">{currentPacket.speed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Validation Status:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Strict Normalized</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="text-xs text-slate-400">Target p99 Latency</div>
                <div className="text-lg font-mono font-bold text-emerald-400">&lt; 25ms</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="text-xs text-slate-400">Pipeline Providers</div>
                <div className="text-lg font-mono font-bold text-cyan-400">300+ TSPs</div>
              </div>
            </div>
          </div>

          {/* Real-Time Pipeline Execution Log */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950/70 border border-slate-800 p-5 space-y-3 font-mono">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Real-Time Engine Execution Trace</span>
              </span>
              <span className="text-[11px] text-slate-500">
                Go Runtime Channels &amp; Kafka
              </span>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto text-xs text-slate-300 pr-1">
              {pipelineLogs.map((log, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">{log.timestamp}</span>
                      <span className="text-[11px] font-semibold text-cyan-400">
                        [{log.stage}]
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs">{log.message}</p>
                  </div>
                  <div className="text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50 shrink-0">
                    +{log.latency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
