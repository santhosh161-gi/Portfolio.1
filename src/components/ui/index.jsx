// ─── Section wrapper ────────────────────────────────────────────
export function Section({ children, className = "" }) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

// ─── Page heading ────────────────────────────────────────────────
export function PageHeading({ label, title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="section-label">{label}</p>
      <h1 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-dim font-body text-base mt-4 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-16 h-px bg-accent" />
    </div>
  );
}

// ─── Tag pill ─────────────────────────────────────────────────────
export function Tag({ children, color }) {
  return (
    <span
      className="font-mono text-xs px-2.5 py-1 rounded-full border"
      style={
        color
          ? {
              borderColor: color + "40",
              color: color,
              backgroundColor: color + "10",
            }
          : {}
      }
    >
      {children}
    </span>
  );
}

// ─── Card ─────────────────────────────────────────────────────────
export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 card-hover ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Button ──────────────────────────────────────────────────────
export function Button({ href, children, variant = "primary", className = "" }) {
  const base = "font-mono text-sm px-5 py-2.5 rounded-xl transition-all duration-200 inline-flex items-center gap-2";
  const styles = {
    primary: "bg-accent text-bg hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "border border-border text-dim hover:text-text hover:border-muted",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}

// ─── Badge ────────────────────────────────────────────────────────
export function Badge({ children }) {
  return (
    <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded">
      {children}
    </span>
  );
}
