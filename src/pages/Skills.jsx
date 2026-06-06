import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../data/portfolio";
import { Section, PageHeading } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const techColors = {
  "HTML5": "#e34f26", "CSS3": "#264de4", "JavaScript": "#f7df1e", "React": "#61dafb",
  "Bootstrap": "#7952b3", "Tailwind CSS": "#38bdf8", "Spring Boot": "#6db33f",
  "Hibernate": "#b6a04c", "REST APIs": "#6ee7b7", "Java": "#ed8b00",
  "Git": "#f05032", "VS Code": "#007acc", "Figma": "#f24e1e", "Postman": "#ff6c37",
  "TypeScript": "#3178c6", "Next.js": "#ffffff", "Docker": "#2496ed", "AWS": "#ff9900",
};

function SkillBar({ name, index }) {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.8,
          delay: index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const color = techColors[name] || "#6ee7b7";

  return (
    <div className="skill-item group bg-surface border border-border rounded-xl px-4 py-3 card-hover flex items-center gap-3">
      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="font-body text-sm text-text flex-1">{name}</span>
      <div className="w-16 h-1 bg-border rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const pageRef = usePageEnter();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="Skills"
          title="My Tech Stack"
          subtitle="Technologies I work with — built through real projects and certifications."
        />

        <div ref={sectionRef} className="grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="category-block">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <div>
                  <h2 className="font-display font-semibold text-lg text-text">{group.category}</h2>
                  <p className="font-mono text-xs text-dim">{group.items.length} technologies</p>
                </div>
              </div>

              <div className="space-y-2">
                {group.items.map((item, i) => (
                  <SkillBar key={item} name={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning banner */}
        <div className="mt-16 bg-surface border border-accent/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-3xl">🚀</span>
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-1">Currently Learning</p>
              <h3 className="font-display font-semibold text-text">
                Expanding my skillset with modern tools and cloud technologies.
              </h3>
              <p className="text-dim text-sm font-body mt-1">
                Expanding into cloud and modern frameworks to become a well-rounded full-stack developer.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
