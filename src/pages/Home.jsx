import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import gsap from "gsap";
import { personal, projects, skills } from "../data/portfolio";
import { Tag, Card } from "../components/ui";
import HeroCard from "../components/person";

export default function Home() {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(".hero-label", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-name", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.2")
        .fromTo(".hero-role", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-bio", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-cta", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.2")
        .fromTo(".hero-socials", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.1")
        .fromTo(".hero-card", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
        .fromTo(".hero-stat", { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }, "-=0.3");

      gsap.to(".hero-card", {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      gsap.to(".orb-1", { x: 30, y: -20, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".orb-2", { x: -20, y: 30, duration: 10, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden w-full">
        <div className="orb-1 absolute top-20 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="orb-2 absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-accent2/5 blur-3xl pointer-events-none" />

        <div className="mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="hero-label font-mono text-xs text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block" />
              Available for opportunities
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
            </div>

            <h1 className="hero-name font-display font-bold text-5xl md:text-6xl xl:text-7xl text-text leading-[1.05] tracking-tight">
              Hi, I'm{" "}
              <span className="text-red-400 glow-text">Santhosh Mathavan</span>
            </h1>

            <div className="hero-role mt-4 flex items-center gap-3">
              <span className="font-mono text-dim text-sm">&gt;</span>
              <span className="font-mono text-base text-slate-100">{personal.role}</span>
            </div>

            <p className="hero-bio text-dim font-body text-base leading-relaxed mt-6 max-w-md">
              {personal.bio}
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-slate-200 text-bg font-mono text-sm px-5 py-3 rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 border border-border text-dim font-mono text-sm px-5 py-3 rounded-xl hover:border-accent/40 hover:text-text transition-all duration-200"
              >
                <Download size={15} /> Resume
              </a>
            </div>

            <div className="hero-socials mt-8 inline-flex flex-wrap items-center gap-5 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.03)]">
              <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                Find me on
              </span>

              <div className="flex gap-3">
                {[
                  { href: personal.github, icon: Github },
                  { href: personal.linkedin, icon: Linkedin },
                  { href: `mailto:${personal.email}`, icon: Mail },
                ].map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-11 h-11 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-gray-300 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgba(110,231,183,0.25)] hover:-translate-y-1"
                  >
                    <Icon
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/10" />

              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={14} />
                </div>
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right — Profile Image */}
         <HeroCard personal={personal}/>
        </div>
      </section>

      {/* QUICK PREVIEW: PROJECTS */}
      <section className="w-full mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="font-display font-bold text-3xl text-text">Recent Projects</h2>
          </div>
          <Link
            to="/projects"
            className="font-mono text-sm text-accent hover:gap-3 flex items-center gap-2 transition-all"
          >
            All projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((p) => (
            <Card key={p.id} className="group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: p.color + "15", border: `1px solid ${p.color}30` }}
                >
                  {p.type === "Full Stack" ? "🔗" : p.type === "Frontend" ? "🎨" : "⚙️"}
                </div>
                <span className="font-mono text-xs text-dim">{p.year}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">{p.title}</h3>
              <p className="text-dim text-sm font-body leading-relaxed mb-4 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <Tag key={t} color={p.color}>{t}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}