import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  return (
    <SiteLayout hero>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Six core services. Single-source accountability."
        subtitle="Every service below is delivered by our in-house specialists — no subcontractors, no surprises."
      />

      <section className="py-12 md:py-16 lg:py-24 container-x space-y-12 md:space-y-16 lg:space-y-20">
        {SERVICES.map((s, idx) => (
          <article
            key={s.slug}
            className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center ${
              idx % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
            }`}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={s.image} 
                alt={s.title} 
                loading="lazy" 
                className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-cover" 
              />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-brand-orange text-brand-navy-deep text-[0.65rem] md:text-xs font-bold uppercase tracking-widest">
                0{idx + 1}
              </div>
            </div>
            <div>
              <div className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
                Service · 0{idx + 1}
              </div>
              <h2 className="mt-2 md:mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                {s.title}
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{s.long}</p>
              <ul className="mt-4 md:mt-6 grid sm:grid-cols-2 gap-2 md:gap-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-brand-navy font-medium">
                    <CheckCircle2 className="size-3.5 md:size-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 md:mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base font-semibold hover:bg-brand-navy-deep transition-colors"
              >
                Request a Quote <ArrowRight className="size-3.5 md:size-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}