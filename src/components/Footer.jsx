import React from "react";

export default function Footer({ profile }) {
  return (
    <footer id="contact" className="py-12 bg-slate-950 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-white">
          Tertarik Berkolaborasi Membangun Sistem AI Skala Produksi?
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Hubungi saya langsung melalui email di{" "}
          <a href={`mailto:${profile.email}`} className="text-cyan-400 underline">
            {profile.email}
          </a>
        </p>
        <p className="text-xs font-mono text-slate-600 mt-6">
          © {new Date().getFullYear()} {profile.name} • Built with Modular React.js & Tailwind CSS (Serverless)
        </p>
      </div>
    </footer>
  );
}
