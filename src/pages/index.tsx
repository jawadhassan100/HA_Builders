import { ArrowRight, Award, CheckCircle2, ClipboardList, HardHat, Quote, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import about1 from "@/assets/about-1.jpg";
import { Link } from "react-router-dom";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "HA Construction — Premium Construction & Finishing in KPK" },
//       { name: "description", content: "Government-registered construction & finishing firm in Swabi, KPK. Civil works, MS pipe, waterproofing, paint, plumbing & renovation — delivered on time, on budget." },
//       { property: "og:title", content: "HA Construction — Premium Construction & Finishing in KPK" },
//       { property: "og:description", content: "From foundation to final finish. Civil, mechanical & finishing works across Khyber Pakhtunkhwa." },
//     ],
//   }),
//   component: Index,
// });

export default function Home() {
  return (
    <SiteLayout hero>
      <HeroSlider />

      {/* Stats bar */}
      <section className="relative -mt-16 z-20 container-x">
        <div className="rounded-3xl bg-white shadow-[var(--shadow-elegant)] border border-border grid grid-cols-2 md:grid-cols-4 overflow-hidden">
          {[
            { value: "250+", label: "Projects Completed" },
            { value: "10+", label: "Years in Business" },
            { value: "98%", label: "On-Time Delivery" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <div key={i} className="p-6 md:p-8 text-center border-r last:border-r-0 border-border/60 even:bg-muted/30 md:even:bg-transparent">
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-brand">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={about1} alt="HA Construction site management" loading="lazy" className="w-full h-[520px] object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-brand-navy-deep text-white p-6 rounded-2xl shadow-xl max-w-xs">
            <div className="flex items-center gap-3">
              <Award className="size-8 text-brand-orange" />
              <div>
                <div className="font-display font-bold text-2xl">10+ yrs</div>
                <div className="text-white/70 text-xs uppercase tracking-widest">Trusted Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About HA Construction"
            title="Your trusted construction & finishing partner in KPK."
            subtitle="Established in Swabi with a vision to deliver excellence in civil, mechanical and finishing works. We serve residential, commercial and industrial clients across Khyber Pakhtunkhwa — with a proven record of on-time delivery, quality workmanship, and transparent dealing."
          />
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Government registered & licensed",
              "Qualified site engineers",
              "Transparent pricing",
              "Quality-first workmanship",
              "On-time project delivery",
              "End-to-end accountability",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-brand-navy">
                <CheckCircle2 className="size-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-6 py-3.5 font-semibold hover:bg-brand-navy-deep transition-colors"
            >
              More About Us <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 text-brand-navy px-6 py-3.5 font-semibold hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="What We Do"
            title="Six core services. One trusted team."
            subtitle="Every project we take on is delivered end-to-end by our in-house specialists — so quality, schedule, and cost stay under one roof."
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 container-x">
        <SectionHeader
          eyebrow="How We Work"
          title="A simple, transparent process."
          subtitle="From the first conversation to project handover — you'll always know what's happening and what comes next."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ClipboardList, step: "01", title: "Consultation", desc: "We listen, visit your site, and understand your vision." },
            { icon: Sparkles, step: "02", title: "Design & Quote", desc: "Detailed proposal, transparent pricing, clear timelines." },
            { icon: HardHat, step: "03", title: "Build", desc: "Skilled crews, daily progress, full quality control." },
            { icon: ShieldCheck, step: "04", title: "Handover", desc: "Final inspection, snag-list cleared, post-handover support." },
          ].map((p) => (
            <div key={p.step} className="group relative p-7 rounded-3xl bg-white border border-border hover:border-brand-orange/40 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="absolute top-5 right-6 font-display text-5xl font-extrabold text-muted/60 group-hover:text-brand-orange/20 transition-colors">
                {p.step}
              </div>
              <div className="size-12 grid place-items-center rounded-2xl bg-brand-navy text-brand-orange">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-brand-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-orange) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-orange) 0, transparent 35%)" }} />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="Why HA Construction"
            title="The difference is in the details."
            subtitle="Premium materials, qualified crews, and a relentless focus on finish quality — that's what makes our work last."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Licensed & Insured", desc: "Government-registered firm with full compliance — your project is in safe hands." },
              { icon: Users, title: "In-House Crews", desc: "No middlemen. Our own engineers, masons, and finishers handle every project." },
              { icon: Award, title: "Quality Guarantee", desc: "We stand behind our workmanship with written guarantees on key services." },
            ].map((c) => (
              <div key={c.title} className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand-orange/40 transition-all">
                <div className="size-14 grid place-items-center rounded-2xl bg-brand-orange text-brand-navy-deep">
                  <c.icon className="size-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container-x">
        <SectionHeader
          eyebrow="Client Voices"
          title="Trusted by clients across KPK."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { name: "Engr. Kamran Khan", role: "Residential Client, Peshawar", quote: "HA Construction handled our home build from foundation to finishing. Quality and timelines were exactly as promised." },
            { name: "Asif Ullah", role: "Commercial Client, Mardan", quote: "Their MS pipe and plumbing work for our warehouse was excellent. Professional crew, clean execution." },
            { name: "Dr. Hina Aslam", role: "Renovation Client, Swabi", quote: "Renovated our clinic with zero disruption to operations. The finishing work is genuinely premium." },
          ].map((t) => (
            <figure key={t.name} className="relative p-8 rounded-3xl bg-white border border-border shadow-sm">
              <Quote className="absolute top-6 right-6 size-10 text-brand-orange/15" />
              <div className="flex gap-1 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-brand-navy leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-bold text-brand-navy">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-white" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy-deep leading-tight">
                Ready to break ground on your next project?
              </h2>
              <p className="mt-4 text-brand-navy-deep/85 text-lg max-w-xl">
                Tell us about your project — we'll respond within 24 hours with a clear plan and transparent quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy-deep text-white px-8 py-4 font-semibold hover:scale-[1.03] transition-transform"
              >
                Request a Free Quote <ArrowRight className="size-5" />
              </Link>
              <a
                href="tel:+923000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy-deep px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
              >
                Call: +92 300 000 0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
