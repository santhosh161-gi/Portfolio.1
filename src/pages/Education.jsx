import { useRef, useEffect } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../data/portfolio";
import { Section, PageHeading } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const pageRef = usePageEnter();
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.7,
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
          label="Education"
          title="Academic Background"
          subtitle="My formal education journey — from mechanical engineering to software development."
        />

        <div ref={listRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="edu-card relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-12">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-accent/30 flex items-center justify-center z-10">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-surface border border-border rounded-2xl p-6 card-hover group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h2 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h2>
                      <p className="font-body text-accent/80 text-base mt-0.5">{edu.field}</p>
                    </div>
                    <div className="flex-shrink-0 bg-accent/10 border border-accent/20 rounded-xl px-3 py-1 self-start">
                      <span className="font-mono text-xs text-accent">{edu.grade}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-dim font-body mb-4">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-accent/60" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent/60" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent/60" />
                      {edu.year}
                    </span>
                  </div>

                  {edu.highlights && (
                    <div className="border-t border-border pt-4">
                      <p className="font-mono text-xs text-muted uppercase tracking-wide mb-2">Highlights</p>
                      <ul className="space-y-1">
                        {edu.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-dim text-sm font-body">
                            <span className="text-accent mt-1">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra note */}
        <div className="mt-12 bg-surface border border-accent2/20 rounded-2xl p-6 flex gap-4 items-start">
          <Award size={22} className="text-accent2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-semibold text-text">Career Transition</p>
            <p className="text-dim font-body text-sm mt-1 leading-relaxed">
              After completing my Mechanical Engineering degree, I made a deliberate pivot into
              software development — driven by genuine passion for building digital products.
              I've backed this with 6+ certifications and real projects.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
