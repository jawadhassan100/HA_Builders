import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative pt-16 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-brand-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--brand-orange) 0, transparent 40%)" }} />
      <div className="container-x relative">
        <nav className="text-xs sm:text-sm text-white/60 flex items-center gap-1.5 sm:gap-2">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight className="size-3 sm:size-3.5" />
          <span className="text-white">{crumb}</span>
        </nav>
        {eyebrow && (
          <div className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-orange-soft">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 sm:mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 sm:mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}