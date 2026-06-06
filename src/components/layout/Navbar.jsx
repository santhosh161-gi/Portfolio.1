import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/internships", label: "Internships" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bg/80 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          
          <span className="font-display font-bold text-text text-lg tracking-tight ">
            Santhosh <span className="text-red-400 group-hover:animate-pulse">Mathavan</span>
          </span>
          
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-body text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-dim hover:text-text hover:bg-surface"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="#"
            className="ml-3 font-mono text-xs px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-bg transition-all duration-200"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-dim hover:text-text transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-surface/95 backdrop-blur-xl border-t border-border px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-body text-sm px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-dim hover:text-text hover:bg-border"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1aBIO0mbmIbNuLH6f42_Cdv8V9Y6bNKDM/view?usp=drive_link"
            className="mt-2 font-mono text-xs px-4 py-3 border border-accent text-accent rounded-lg text-center"
          >
            Download Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
