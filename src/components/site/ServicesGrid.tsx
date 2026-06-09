import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Droplets, Brush, Building2, ShowerHead, Hammer } from "lucide-react";
import { SERVICES } from "@/data/services";

const ICONS = { Wrench, Droplets, Brush, Building2, ShowerHead, Hammer } as const;

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Wrench;
        return (
          <Link
            key={s.slug}
            to="/services"
            className="group relative overflow-hidden rounded-3xl bg-white border border-border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy-deep/20 to-transparent" />
              <div className="absolute top-4 left-4 size-12 grid place-items-center rounded-2xl bg-brand-orange text-brand-navy-deep shadow-lg">
                <Icon className="size-6" />
              </div>
              <div className="absolute top-4 right-4 size-10 grid place-items-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.short}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.features.slice(0, 2).map((f) => (
                  <span key={f} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-brand-navy">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}