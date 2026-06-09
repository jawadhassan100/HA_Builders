import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const SLIDES = [
  {
    image: hero1,
    eyebrow: "Civil · Mechanical · Finishing",
    title: "Building KPK,",
    titleAccent: "from foundation to finish.",
    sub: "Government-registered. Quality-obsessed. Delivered on time — every time.",
  },
  {
    image: hero2,
    eyebrow: "Trusted by clients across KPK",
    title: "Engineered to last,",
    titleAccent: "finished to impress.",
    sub: "From MS pipe installation to luxury interiors — a single team, end-to-end accountability.",
  },
  {
    image: hero3,
    eyebrow: "Premium Interior & Finishing",
    title: "Spaces that feel",
    titleAccent: "as good as they look.",
    sub: "Paint, waterproofing, plumbing & renovation by craftsmen who care about the details.",
  },
] as const;

export function HeroSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              idx === i ? "scale-110" : "scale-100"
            }`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container-x">
          <div className="max-w-3xl text-white">
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-soft animate-[fadeIn_.8s_ease]"
            >
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              {SLIDES[i].eyebrow}
            </div>
            <h1
              key={`t-${i}`}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] animate-[fadeUp_.8s_ease]"
            >
              {SLIDES[i].title}
              <br />
              <span className="text-gradient-brand">{SLIDES[i].titleAccent}</span>
            </h1>
            <p
              key={`s-${i}`}
              className="mt-6 max-w-xl text-lg text-white/80 animate-[fadeUp_1s_ease]"
            >
              {SLIDES[i].sub}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-semibold text-brand-navy-deep shadow-[var(--shadow-brand)] hover:scale-[1.03] transition-transform"
              >
                Request a Free Quote
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-brand-orange" />
                Government Registered
              </div>
              <div className="flex items-center gap-2">
                <Star className="size-5 text-brand-orange" />
                10+ Years of Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl text-white">250+</span>
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden md:flex gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="size-12 rounded-full border border-white/20 bg-white/5 backdrop-blur grid place-items-center text-white hover:bg-brand-orange hover:text-brand-navy-deep hover:border-brand-orange transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="size-12 rounded-full border border-white/20 bg-white/5 backdrop-blur grid place-items-center text-white hover:bg-brand-orange hover:text-brand-navy-deep hover:border-brand-orange transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-32 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-10 bg-brand-orange" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px);} to { opacity:1; transform:translateY(0);} }
        @keyframes fadeIn { from { opacity:0;} to { opacity:1;} }
      `}</style>
    </section>
  );
}