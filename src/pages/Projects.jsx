import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolio";
import { Section, PageHeading, Tag } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const filters = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const pageRef = usePageEnter();
  const gridRef = useRef(null);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="Portfolio"
          title="Projects"
          subtitle="A collection of things I've built — from full-stack applications to frontend showcases."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-sm px-4 py-2 rounded-xl border transition-all duration-200 ${
                active === f
                  ? "border-accent text-accent bg-accent/10"
                  : "border-border text-dim hover:text-text hover:border-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="project-card group bg-surface border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Top color strip */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: p.color + "15", border: `1px solid ${p.color}30` }}
                    >
                      {p.type === "Full Stack" ? "🔗" : p.type === "Frontend" ? "🎨" : "⚙️"}
                    </div>
                    <div>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ color: p.color, background: p.color + "15" }}
                      >
                        {p.type}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>

                <h3 className="font-display font-semibold text-xl text-text mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>

                <p className="text-dim font-body text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <Tag key={t} color={p.color}>{t}</Tag>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={p.github}
                    className="flex items-center gap-1.5 font-mono text-xs text-dim hover:text-text transition-colors"
                  >
                    <Github size={13} /> Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      className="flex items-center gap-1.5 font-mono text-xs text-dim hover:text-accent transition-colors ml-2"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  <div className="ml-auto">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                      style={{ background: p.color + "20", color: p.color }}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-dim font-body text-sm mb-3">More projects on GitHub</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-border text-dim font-mono text-sm px-5 py-2.5 rounded-xl hover:border-accent/40 hover:text-text transition-all"
          >
            <Github size={15} /> View GitHub Profile
          </a>
        </div>
      </Section>
    </div>
  );
}
