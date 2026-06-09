import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll get back to you within 24 hours.");
    }, 800);
  }

  return (
    <SiteLayout hero>
      <Toaster />
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title="Tell us about your project."
        subtitle="Quick response. Transparent quote. No pressure — just honest advice from a team that knows construction in KPK."
      />

      {/* Contact Section - Fully Responsive */}
      <section className="py-12 md:py-16 lg:py-24 container-x grid lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-10">
        
        {/* Contact Info Cards */}
        <aside className="space-y-4 md:space-y-5 order-2 lg:order-1">
          {[
            { icon: MapPin, label: "Visit Us", value: "Swabi, Khyber Pakhtunkhwa, Pakistan" },
            { icon: Phone, label: "Call Us", value: "+92 300 000 0000", href: "tel:+923000000000" },
            { icon: Mail, label: "Email Us", value: "info@haconstruction.pk", href: "mailto:info@haconstruction.pk" },
            { icon: Clock, label: "Working Hours", value: "Mon – Sat · 8:00 AM – 7:00 PM" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="flex items-start gap-3 md:gap-4 p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border border-border hover:border-brand-orange/40 hover:shadow-md transition-all"
            >
              <div className="size-10 md:size-12 grid place-items-center rounded-lg md:rounded-xl bg-brand-navy text-brand-orange shrink-0">
                <c.icon className="size-4 md:size-5" />
              </div>
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {c.label}
                </div>
                <div className="mt-1 font-display font-bold text-brand-navy text-sm md:text-base">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </aside>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-white border border-border shadow-[var(--shadow-elegant)] order-1 lg:order-2"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Request a Free Quote
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Fill in your details and we'll reply within 24 hours.
          </p>

          <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4 md:gap-5">
            <Field name="name" label="Full Name" required />
            <Field name="phone" label="Phone Number" type="tel" required />
            <div className="sm:col-span-2">
              <Field name="email" label="Email Address" type="email" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                Service Needed <span className="text-brand-orange">*</span>
              </label>
              <select
                name="service"
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition text-sm md:text-base"
              >
                <option value="">Select a service…</option>
                <option>MS Pipe Installation</option>
                <option>Waterproofing</option>
                <option>Paint Works</option>
                <option>Civil Construction</option>
                <option>Plumbing & Sanitary</option>
                <option>Maintenance & Renovation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                Project Details <span className="text-brand-orange">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us briefly about your project, location, and timeline…"
                className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition resize-none text-sm md:text-base"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 md:mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold text-brand-navy-deep shadow-[var(--shadow-brand)] hover:scale-[1.02] active:scale-100 transition-transform disabled:opacity-60 text-sm sm:text-base"
          >
            {loading ? (
              "Sending…"
            ) : (
              <>
                Send Message <Send className="size-3 sm:size-4" />
              </>
            )}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

// Responsive Field Component
function Field({ 
  name, 
  label, 
  type = "text", 
  required = false 
}: { 
  name: string; 
  label: string; 
  type?: string; 
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-navy mb-2">
        {label}
        {required && <span className="text-brand-orange ml-0.5">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition text-sm md:text-base"
        placeholder={required ? `Enter your ${label.toLowerCase()}` : undefined}
      />
    </div>
  );
}