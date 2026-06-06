import { useRef, useEffect, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { personal } from "../data/portfolio";
import { Section, PageHeading } from "../components/ui";
import { usePageEnter } from "../hooks/useGSAP";

export default function Contact() {
  const pageRef = usePageEnter();
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.12, duration: 0.6, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.4 }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    gsap.to(formRef.current, { scale: 0.98, duration: 0.1, yoyo: true, repeat: 1 });
    setTimeout(() => setSent(true), 500);
  };

  const socials = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#6ee7b7" },
    { icon: Github, label: "GitHub", value: "github.com/santhosh", href: personal.github, color: "#a78bfa" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/santhosh", href: personal.linkedin, color: "#818cf8" },
    { icon: MapPin, label: "Location", value: personal.location, href: "#", color: "#fb923c" },
  ];

  return (
    <div ref={pageRef}>
      <Section>
        <PageHeading
          label="Contact"
          title="Get In Touch"
          subtitle="I'm open to full-time opportunities, freelance projects, or just a conversation about tech."
        />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <div className="md:col-span-2 space-y-5">
            <p className="text-dim font-body text-sm leading-relaxed">
              Whether you have a role to offer, a project in mind, or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-3 pt-2">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-item flex items-center gap-4 bg-surface border border-border rounded-xl p-4 card-hover group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: color + "15", border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">{label}</p>
                    <p className="font-body text-sm text-text group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 bg-surface border border-accent/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent">Available for work</span>
              </div>
              <p className="text-dim font-body text-xs">
                Actively seeking Frontend / Full Stack roles. Typical response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-surface border border-accent/20 rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-text mb-2">Message Sent!</h3>
                <p className="text-dim font-body text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 font-mono text-xs text-accent border border-accent/30 px-4 py-2 rounded-lg hover:bg-accent/10 transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                    { id: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id}>
                      <label className="font-mono text-xs text-dim block mb-1.5">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[id]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-text text-sm font-body placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-xs text-dim block mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Project collaboration"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-text text-sm font-body placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-dim block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role / project / idea..."
                    className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-text text-sm font-body placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-bg font-mono text-sm py-3 rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
