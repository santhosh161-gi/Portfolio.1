import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personal } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-10 mt-20">
      <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-text">Santhosh</span>
          <p className="text-dim text-sm mt-1 font-body">
            Full Stack Developer · Tamil Nadu, India
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-dim hover:text-accent hover:border-accent transition-all duration-200"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-dim hover:text-accent2 hover:border-accent2 transition-all duration-200"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-dim hover:text-accent hover:border-accent transition-all duration-200"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-dim text-xs font-mono flex items-center gap-1.5">
          Built with <Heart size={12} className="text-accent" fill="#6ee7b7" /> 
        </p>
      </div>
    </footer>
  );
}
