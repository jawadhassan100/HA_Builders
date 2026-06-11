import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="scroll inset-x-0 top-0 z-50 transition-all duration-300 bg-gray-900"
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-16 w-auto rounded-md" />
          {/* <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-extrabold text-white text-lg tracking-wide">
              HA <span className="text-brand-orange">CONSTRUCTION</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Build · Finish · Deliver
            </span>
          </div> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923459667798"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-navy-deep shadow-[var(--shadow-brand)] hover:scale-[1.03] active:scale-100 transition-transform"
          >
            <Phone className="size-4" />
            Get a Quote
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-navy-deep/95 backdrop-blur-md border-t border-white/10">
          <nav className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white/85 font-medium rounded-lg hover:bg-white/5"
                activeProps={{ className: "text-brand-orange bg-white/5" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+923000000000"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-semibold text-brand-navy-deep"
            >
              <Phone className="size-4" /> Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}