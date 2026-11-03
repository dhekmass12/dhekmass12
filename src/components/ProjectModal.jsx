import React from "react";
import { X, Github, ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import MediaShowcase from "./MediaShowcase";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
          {project.category}
        </div>
        <h2 className="text-2xl font-bold text-white mt-1 pr-10">{project.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <div className="text-xs font-mono text-slate-400 mb-1.5">
              1. Dokumentasi Foto Arsitektur / Hasil:
            </div>
            <MediaShowcase
              media={project.media}
              telemetryType={project.telemetryType}
              activeMode="photo"
              heightClass="h-60"
            />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 mb-1.5">
              2. Rekaman Video Demo:
            </div>
            <MediaShowcase
              media={project.media}
              telemetryType={project.telemetryType}
              activeMode="video"
              heightClass="h-60"
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
            <Layers className="w-4 h-4" />
            <span>Arsitektur Sistem & Pipeline Produksi</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullArchitecture}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <div className="text-lg font-mono font-bold text-emerald-400">{m.val}</div>
              <div className="text-xs text-slate-400">{m.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200"
              >
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-white transition"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition"
            >
              <span>Live Endpoint</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
