import { Award, CheckCircle2, Eye, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import about1 from "@/assets/about-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <SiteLayout hero>
      <PageHero
        crumb="About"
        eyebrow="About Us"
        title="Built on trust. Delivered with pride."
        subtitle="HA Construction is a leading construction and finishing company based in Swabi, KPK — serving residential, commercial and industrial clients across Khyber Pakhtunkhwa."
      />

      {/* Story Section - Mobile Responsive */}
      <section className="py-12 md:py-16 lg:py-24 container-x grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] order-2 lg:order-1">
          <img 
            src={about1} 
            alt="HA Construction team" 
            className="w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[560px] object-cover" 
            loading="lazy" 
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            align="left"
            eyebrow="Our Story"
            title="A construction firm built around quality and integrity."
            subtitle="Established with a vision to deliver excellence in civil, mechanical and finishing works, HA Construction has grown into one of the most trusted construction partners in KPK — known for on-time delivery, transparent dealing, and finish quality that lasts."
          />
          <ul className="mt-6 md:mt-8 space-y-3">
            {[
              "Government registered & licensed firm",
              "10+ years of combined site experience",
              "Qualified site engineers on every project",
              "End-to-end project accountability",
              "Premium materials and certified craftsmen",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-brand-navy">
                <CheckCircle2 className="size-4 sm:size-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="font-medium text-sm sm:text-base">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision & Mission Section - Mobile Responsive */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/40">
        <div className="container-x grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: Eye, label: "Our Vision", text: "To become KPK's most trusted construction partner by setting benchmarks in quality, safety, and client satisfaction." },
            { icon: Target, label: "Our Mission", text: "Deliver durable, cost-effective and timely construction solutions while maintaining the highest standards of professionalism and integrity." },
          ].map((b) => (
            <div key={b.label} className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-white border border-border shadow-sm">
              <div className="size-12 sm:size-14 grid place-items-center rounded-xl md:rounded-2xl bg-brand-navy text-brand-orange">
                <b.icon className="size-5 sm:size-7" />
              </div>
              <h3 className="mt-5 sm:mt-6 font-display text-xl sm:text-2xl font-bold text-brand-navy">{b.label}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section - Mobile Responsive */}
      <section className="py-12 md:py-16 lg:py-24 container-x">
        <SectionHeader
          eyebrow="Our Values"
          title="What we stand for."
        />
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Award, title: "Quality First", desc: "We never compromise on materials or workmanship. Period." },
            { icon: Users, title: "Client Partnership", desc: "Transparent communication, every step of the way." },
            { icon: CheckCircle2, title: "On-Time Delivery", desc: "We respect your timeline and protect your budget." },
          ].map((v) => (
            <div key={v.title} className="p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-border bg-white hover:border-brand-orange/40 hover:shadow-[var(--shadow-elegant)] transition-all">
              <v.icon className="size-8 sm:size-10 text-brand-orange" />
              <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl font-bold text-brand-navy">{v.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="container-x pb-12 md:pb-16 lg:pb-24">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,18,28,.85), rgba(15,18,28,.7)), url(${hero2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Let's build something exceptional, together.
            </h2>
            <p className="mt-3 sm:mt-4 text-white/75 text-sm sm:text-base md:text-lg">
              From your first conversation to project handover, you'll work with a team that genuinely cares about your project.
            </p>
            <Link
              to="/contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange text-brand-navy-deep px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold text-sm sm:text-base hover:scale-[1.03] transition-transform"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}