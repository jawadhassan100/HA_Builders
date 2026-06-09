import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white/80 mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-16 w-auto rounded-md" />
            {/* <span className="font-display font-extrabold text-white text-lg">
              HA <span className="text-brand-orange">CONSTRUCTION</span>
            </span> */}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            A government-registered construction & finishing firm based in Swabi, KPK — delivering quality from foundation to final finish.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 grid place-items-center rounded-full bg-white/5 hover:bg-brand-orange hover:text-brand-navy-deep transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-brand-orange">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-orange">Services</Link></li>
            <li><Link to="/projects" className="hover:text-brand-orange">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-brand-orange">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>MS Pipe Installation</li>
            <li>Waterproofing</li>
            <li>Paint Works</li>
            <li>Civil Construction</li>
            <li>Plumbing & Sanitary</li>
            <li>Maintenance & Renovation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-brand-orange" /> Swabi, Khyber Pakhtunkhwa, Pakistan</li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-brand-orange" /> +92 300 000 0000</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-brand-orange" /> info@haconstruction.pk</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} HA Construction. All rights reserved.</p>
          <p>Built with care · Swabi, KPK</p>
        </div>
      </div>
    </footer>
  );
}