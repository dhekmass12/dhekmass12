import React, { useState, useMemo } from "react";
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  PLAYGROUND_PRESETS,
  SKILLS_DATA
} from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Playground from "./components/Playground";
import SkillsMatrix from "./components/SkillsMatrix";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = useMemo(() => {
    const unique = new Set(PROJECTS_DATA.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar name={PROFILE_DATA.name} />
      <Hero profile={PROFILE_DATA} />

      <section id="projects" className="py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Featured AI Engineering Projects
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition ${selectedCategory === cat
                      ? "bg-cyan-500 text-slate-950 font-bold"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={setActiveModalProject}
              />
            ))}
          </div>
        </div>
      </section>

      <Playground presets={PLAYGROUND_PRESETS} />
      <SkillsMatrix skills={SKILLS_DATA} />
      <Footer profile={PROFILE_DATA} />

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
