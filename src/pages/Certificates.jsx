import { useRef, useEffect } from "react";
import { Award, Calendar, ExternalLink, Hash } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "../data/portfolio";
import { Section, PageHeading, Tag } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const pageRef = usePageEnter();
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, scale: 0.93, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.65,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="Certifications"
          title="Certificates"
          subtitle={`${certificates.length} certifications earned — continuous learning is core to how I grow.`}
        />

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="cert-card bg-surface border border-border rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${cert.color}10, transparent 60%)` }}
              />

              {/* Top accent */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              <div className="p-5 relative">
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: cert.color + "15", border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-lg"
                    style={{ background: cert.color + "15", border: `1px solid ${cert.color}30` }}
                  >
                    <span className="font-mono text-xs" style={{ color: cert.color }}>
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-base text-text mb-1 leading-tight">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-3 text-dim text-xs font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {cert.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tags.map((t) => (
                    <Tag key={t} color={cert.color}>{t}</Tag>
                  ))}
                </div>

                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted flex items-center gap-1">
                    <Hash size={10} /> {cert.credential}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 font-mono text-xs text-dim hover:text-accent transition-colors"
                  >
                    View <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Certs", value: certificates.length + "+", icon: "🏆" },
            { label: "Platforms", value: "4", icon: "🌐" },
            { label: "Topics", value: "6+", icon: "📚" },
            { label: "Year", value: "2024", icon: "📅" },
          ].map((s) => (
            <div key={s.label} className="bg-surface border border-border rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-display font-bold text-2xl text-accent">{s.value}</div>
              <div className="font-mono text-xs text-dim mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
