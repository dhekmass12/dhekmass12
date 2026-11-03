import React from "react";
import { Cpu, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero({ profile }) {
  return (
    <section className="relative py-16 md:py-24 border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>{profile.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Dimas Tri Kurniawan<br />
          </h1>
          <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            AI & ML Engineer
          </span>

          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
            Halo, saya <strong className="text-slate-100">{profile.name}</strong> ({profile.role}).{" "}
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition"
            >
              <span>Lihat Showcase Foto & Video Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
