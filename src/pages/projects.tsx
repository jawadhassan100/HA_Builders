import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import civil from "@/assets/service-civil.jpg";
import paint from "@/assets/service-paint.jpg";
import water from "@/assets/service-waterproof.jpg";
import plumb from "@/assets/service-plumbing.jpg";
import { Link } from "react-router-dom";



const PROJECTS = [
  { title: "Modern Residential Villa", category: "Civil Construction", location: "Swabi, KPK", image: hero1 },
  { title: "Luxury Interior Finishing", category: "Paint & Finishing", location: "Peshawar, KPK", image: hero3 },
  { title: "Commercial Complex", category: "Civil Construction", location: "Mardan, KPK", image: civil },
  { title: "Office Repaint Project", category: "Paint Works", location: "Swabi, KPK", image: paint },
  { title: "Rooftop Waterproofing", category: "Waterproofing", location: "Peshawar, KPK", image: water },
  { title: "Clinic Plumbing Overhaul", category: "Plumbing & Sanitary", location: "Swabi, KPK", image: plumb },
] as const;

export default function ProjectsPage() {
  return (
    <SiteLayout hero>
      <PageHero
        crumb="Projects"
        eyebrow="Selected Work"
        title="Projects we're proud of."
        subtitle="A small selection of recent residential, commercial and industrial projects delivered across KPK."
      />

      <section className="py-12 md:py-16 lg:py-24 container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-white shadow-sm hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/30 to-transparent" />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-brand-orange text-brand-navy-deep text-[0.65rem] md:text-xs font-bold uppercase tracking-widest">
                  {p.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white line-clamp-2">{p.title}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-white/70 text-xs md:text-sm">
                    <MapPin className="size-3 md:size-3.5" /> {p.location}
                  </div>
                </div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 size-8 md:size-10 grid place-items-center rounded-full bg-white/15 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="size-3.5 md:size-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Want to see more? We'd love to show you our full portfolio.
          </p>
          <Link
            to="/contact"
            className="mt-5 md:mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 md:px-7 py-2.5 md:py-3.5 text-sm md:text-base font-semibold hover:bg-brand-navy-deep transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}