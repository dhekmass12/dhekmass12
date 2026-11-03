import React, { useState } from "react";
import { Image, Film, ArrowUpRight, Github, Cpu } from "lucide-react";
import MediaShowcase from "./MediaShowcase";

export default function ProjectCard({ project, onSelectProject }) {
  const [mediaMode, setMediaMode] = useState("photo");

  return (
    <div className="flex flex-col bg-slate-900/70 backdrop-blur-sm border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          <Cpu className="w-3.5 h-3.5" />
          {project.category}
        </span>

        <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
          <button
            type="button"
            onClick={() => setMediaMode("photo")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${mediaMode === "photo"
                ? "bg-cyan-500 text-slate-950 font-semibold"
                : "text-slate-400 hover:text-slate-200"
              }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Foto</span>
          </button>
          <button
            type="button"
            onClick={() => setMediaMode("video")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${mediaMode === "video"
                ? "bg-emerald-500 text-slate-950 font-semibold"
                : "text-slate-400 hover:text-slate-200"
              }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Video</span>
          </button>
        </div>
      </div>

      <MediaShowcase
        media={project.media}
        telemetryType={project.telemetryType}
        activeMode={mediaMode}
        heightClass="h-56"
      />

      <div className="mt-4 flex-1">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
          {project.shortDesc}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="text-center">
            <div className="text-sm font-mono font-bold text-emerald-400">{m.val}</div>
            <div className="text-[11px] text-slate-400 truncate">{m.name}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-100 transition"
        >
          <Github className="w-4 h-4" />
          <span>Source Code</span>
        </a>

        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition"
        >
          <span>Lihat lebih detail</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
