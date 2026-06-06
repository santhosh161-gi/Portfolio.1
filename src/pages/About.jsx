import { useRef, useEffect } from "react";
import { Code2, Server, Palette, BookOpen, MapPin, Mail, Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal } from "../data/portfolio";
import { Section, PageHeading, Card } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: "Frontend Focused",
    desc: "Strong in HTML, CSS, JS and React. Building responsive, pixel-perfect UIs.",
    color: "#6ee7b7",
  },
  {
    icon: Server,
    title: "Backend Capable",
    desc: "Spring Boot & Hibernate experience. Building REST APIs and handling databases.",
    color: "#818cf8",
  },
  {
    icon: Palette,
    title: "Design Conscious",
    desc: "Learning Figma. Care deeply about user experience and visual polish.",
    color: "#f472b6",
  },
  {
    icon: BookOpen,
    title: "Always Learning",
    desc: "6+ certifications from Udemy, AWS, Simplilearn and freeCodeCamp.",
    color: "#fb923c",
  },
];

const timeline = [
  { year: "2026", event: "Web Developer", detail: "Working at KPRIET" },
  { year: "2025", event: "KGISL Internship", detail: "Frontend Developer Intern" },
  { year: "2025", event: "Earned 6+ certifications", detail: "AWS, Udemy, Simplilearn" },
  { year: "2024", event: "Started Java Full Stack", detail: "Learning Spring Boot and Hibernate" },
  { year: "2020", event: "Began B.E. Mechanical Eng.", detail: "Anna University" },
];

export default function About() {
  const pageRef = usePageEnter();
  const cardsRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: tlRef.current, start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="About Me"
          title="The Story So Far"
          subtitle="From mechanical blueprints to web development — a journey of curiosity and constant learning."
        />

        {/* Bio section */}
        <div className="grid md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-3 space-y-4 text-dim font-body text-base leading-relaxed">
            <p>
              I'm <span className="text-text font-medium">Santhosh</span>, a Mechanical Engineering graduate
              who discovered a deep passion for software development. What started as curiosity about
              how websites work became a full career pivot toward web development.
            </p>
            <p>
              Over the past year, I've built multiple projects — from simple frontend pages to full-stack
              applications using React and Spring Boot. I believe in learning by doing, which is why
              I have hands-on experience rather than just theoretical knowledge.
            </p>
            <p>
              I'm currently seeking opportunities as a{" "}
              <span className="text-accent font-mono">Frontend</span> or{" "}
              <span className="text-accent font-mono">Full Stack Developer</span> where I can
              contribute, grow, and build things that matter.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-dim text-sm">
                <MapPin size={14} className="text-accent" /> {personal.location}
              </div>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-dim text-sm hover:text-accent transition-colors">
                <Mail size={14} className="text-accent" /> {personal.email}
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={personal.github} className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg text-dim text-sm hover:text-accent hover:border-accent transition-all font-mono">
                <Github size={15} /> GitHub
              </a>
              <a href={personal.linkedin} className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg text-dim text-sm hover:text-accent2 hover:border-accent2 transition-all font-mono">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Quick facts */}
          <div className="md:col-span-2">
            <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
              <p className="font-mono text-xs text-accent uppercase tracking-widest">Quick Facts</p>
              {[
                ["🎓", "Degree", "B.E. Mechanical Engineering"],
                ["📍", "Location", "Coimbatore, Tamil Nadu"],
                ["💼", "Status", "Open to work"],
                ["💡", "Focus", "Frontend + Full Stack"],
                ["🌐", "Languages", "Tamil, English"],
                ["⚡", "Strength", "UI/UX Implementation, Problem Solving, Fast Learner"],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{icon}</span>
                  <div>
                    <p className="font-mono text-xs text-muted">{label}</p>
                    <p className="font-body text-sm text-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="about-card bg-surface border border-border rounded-2xl p-5 card-hover"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: h.color + "15", border: `1px solid ${h.color}30` }}
              >
                <h.icon size={18} style={{ color: h.color }} />
              </div>
              <h3 className="font-display font-semibold text-text mb-2">{h.title}</h3>
              <p className="text-dim text-sm font-body leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <p className="section-label mb-6">Timeline</p>
          <div ref={tlRef} className="relative border-l border-border pl-8 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item relative">
                <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-accent border-2 border-bg" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-mono text-xs text-accent">{item.year}</span>
                  <div>
                    <p className="font-body text-sm text-text font-medium">{item.event}</p>
                    <p className="font-mono text-xs text-muted">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
