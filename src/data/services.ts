import pipe from "@/assets/service-pipe.jpg";
import water from "@/assets/service-waterproof.jpg";
import paint from "@/assets/service-paint.jpg";
import civil from "@/assets/service-civil.jpg";
import plumb from "@/assets/service-plumbing.jpg";
import reno from "@/assets/service-renovation.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  features: string[];
  icon: string; // lucide icon name
};

export const SERVICES: Service[] = [
  {
    slug: "ms-pipe-installation",
    title: "MS Pipe Installation",
    short: "Precision welded MS pipe systems for industrial and commercial sites.",
    long: "Heavy-duty mild steel pipe fabrication, welding, and installation for water, gas, and structural applications — engineered to last and tested to industry standards.",
    image: pipe,
    icon: "Wrench",
    features: ["Certified welders", "Pressure tested", "Anti-corrosion coating", "On-site fabrication"],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing Solutions",
    short: "Long-lasting waterproofing for rooftops, basements, and wet areas.",
    long: "Advanced membrane and chemical waterproofing systems that protect your structure from leaks, dampness, and structural decay — with full guarantees.",
    image: water,
    icon: "Droplets",
    features: ["Roof & basement", "Bathroom & kitchen", "Guaranteed work", "Premium materials"],
  },
  {
    slug: "paint-works",
    title: "Paint Works",
    short: "Premium interior & exterior painting with a flawless finish.",
    long: "From colour consultation to surface prep and final coat — we deliver beautiful, durable finishes using top-tier paints from trusted brands.",
    image: paint,
    icon: "Brush",
    features: ["Interior & exterior", "Decorative finishes", "Surface prep included", "Top-tier brands"],
  },
  {
    slug: "civil-construction",
    title: "Civil Construction",
    short: "End-to-end civil works — from foundation to grey structure.",
    long: "Residential, commercial, and industrial construction with rigorous quality control, qualified site engineers, and transparent project management.",
    image: civil,
    icon: "Building2",
    features: ["Residential & commercial", "Site engineering", "Quality control", "Transparent costing"],
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary",
    short: "Clean, reliable plumbing systems and premium sanitary fittings.",
    long: "Full plumbing design, pipework, and sanitary installation — leak-free systems that deliver lasting performance for homes and commercial spaces.",
    image: plumb,
    icon: "ShowerHead",
    features: ["Full system design", "Branded fittings", "Leak-free guarantee", "After-service support"],
  },
  {
    slug: "maintenance-renovation",
    title: "Maintenance & Renovation",
    short: "Refresh, restore, and remodel — bring new life to your space.",
    long: "Full-service renovation and maintenance — from small repairs to complete remodels, executed by craftsmen who treat your space like their own.",
    image: reno,
    icon: "Hammer",
    features: ["Full remodels", "Repairs & upgrades", "Quick turnaround", "Minimal disruption"],
  },
];