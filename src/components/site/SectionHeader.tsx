export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-brand-orange-soft" : "text-brand-orange"}`}>
          <span className="h-px w-8 bg-current" />
          {eyebrow}
          <span className="h-px w-8 bg-current" />
        </div>
      )}
      <h2 className={`mt-4 text-4xl sm:text-5xl font-extrabold leading-tight ${light ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}