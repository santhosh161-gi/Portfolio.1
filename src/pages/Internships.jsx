import { useRef, useEffect } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { internships } from "../data/portfolio";
import { Section, PageHeading, Tag } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Internships() {
  const pageRef = usePageEnter();
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intern-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" },
        }
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="Experience"
          title="Internships"
          subtitle="Real-world experience that shaped my skills as a developer."
        />

        <div ref={listRef} className="space-y-6">
          {internships.map((intern, i) => (
            <div
              key={i}
              className="intern-card bg-surface border border-border rounded-2xl overflow-hidden card-hover group"
            >
              {/* Top color strip */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${intern.color}, transparent)` }} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: intern.color + "15", border: `1px solid ${intern.color}30` }}
                    >
                      <Briefcase size={20} style={{ color: intern.color }} />
                    </div>
                    <div>
                      <h2
                        className="font-display font-bold text-xl text-text group-hover:transition-colors"
                        style={{ '--hover-color': intern.color }}
                      >
                        {intern.role}
                      </h2>
                      <p className="font-body text-base mt-0.5" style={{ color: intern.color }}>
                        {intern.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex-shrink-0 px-3 py-1.5 rounded-xl border self-start"
                    style={{ borderColor: intern.color + "40", color: intern.color, background: intern.color + "10" }}
                  >
                    <span className="font-mono text-xs">{intern.type}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-dim font-body mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-dim/60" />
                    {intern.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-dim/60" />
                    {intern.location}
                  </span>
                </div>

                <p className="text-dim font-body text-sm leading-relaxed mb-6">
                  {intern.description}
                </p>

                <div className="mb-6">
                  <p className="font-mono text-xs text-muted uppercase tracking-wide mb-3">Key Responsibilities</p>
                  <ul className="space-y-2">
                    {intern.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-dim text-sm font-body">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: intern.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-5">
                  <p className="font-mono text-xs text-muted mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {intern.tags.map((t) => (
                      <Tag key={t} color={intern.color}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to work CTA */}
        <div className="mt-12 border border-dashed border-accent/30 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 text-xl">
            💼
          </div>
          <h3 className="font-display font-semibold text-xl text-text mb-2">
            Open to New Opportunities
          </h3>
          <p className="text-dim font-body text-sm max-w-md mx-auto mb-5">
            I'm actively seeking full-time roles as a Frontend or Full Stack Developer.
            Let's build something great together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm px-5 py-2.5 rounded-xl hover:bg-accent/90 transition-all"
          >
            Get in Touch →
          </a>
        </div>
      </Section>
    </div>
  );
}
