export type ProjectCategory = "Residential" | "Industrial" | "Infrastructure" | "Ongoing";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  location: string;
  client: string;
  architect?: string;
  consultant?: string;
  meta?: string[];
}

export const completedProjects: Project[] = [
  // Residential
  { id: "mehran", name: "Mehran Twin Towers", category: "Residential", location: "Plot # CL-8/9, Civil Lines, Karachi", client: "Mehran Enterprises", architect: "Abdul Razzak Associates", meta: ["15 Story"] },
  { id: "abeeda", name: "Abeeda Towers", category: "Residential", location: "Plot # CL-18/2, Civil Lines, Karachi", client: "Abeeda Enterprises", architect: "Abdul Razzak Associates", meta: ["16 Story"] },
  { id: "royal-elite", name: "Royal Elite Homes", category: "Residential", location: "Plot # BI-9A, Bath Island, Karachi", client: "Royal Group", architect: "Abdul Razzak Associates", meta: ["18 Story"] },
  { id: "sanober", name: "Sanober Twin Towers", category: "Residential", location: "Gulistan-e-Johar, Karachi", client: "Al Asr Group", architect: "Arch Vision", meta: ["13 Story"] },
  { id: "sports-city", name: "Sports City Phase IV", category: "Residential", location: "Bahria Town Karachi", client: "Bahria Town", consultant: "UN Enterprises", meta: ["142 Bungalows"] },
  { id: "saima-burj", name: "Saima Burj Al-Baraka", category: "Residential", location: "Plot # D-8, Block 8, Scheme # 5, Clifton, Karachi", client: "Saima Builders", meta: ["13 Story"] },

  // Industrial
  { id: "court-park", name: "The Court Industrial Park", category: "Industrial", location: "Karachi", client: "The Court Group", meta: ["40 Acres", "Main Gate · Office · Roads · Sewerage"] },
  { id: "kohinoor", name: "Kohinoor Fabrics Ltd", category: "Industrial", location: "Hub Industrial Trading Estate, Baluchistan", client: "Kohinoor Fabrics", meta: ["Factory Building", "Weaving Unit", "Expansion"] },
  { id: "century21", name: "Century 21 Textile", category: "Industrial", location: "K.E.P.Z, Karachi", client: "Century 21", architect: "Fida Hussain & Associates", meta: ["225,000 Sft", "Stitching Unit"] },
  { id: "lucky-tex", name: "Lucky Tex", category: "Industrial", location: "S.I.T.E, Karachi", client: "Lucky Tex", architect: "Alliance Consultants", meta: ["450,000 Sft", "Textile + Processing"] },
  { id: "novatex", name: "Novatex Ltd", category: "Industrial", location: "Landhi, Karachi", client: "Novatex", architect: "Abdul Razzak Associates", meta: ["Power House", "Coal Fire Project"] },
];

export const ongoingProjects: Project[] = [
  {
    id: "central-park",
    name: "Central Park Apartment",
    category: "Ongoing",
    location: "Bahria Town Karachi",
    client: "Bahria Town Karachi",
    consultant: "Alliance Consultants",
  },
  {
    id: "court-regency",
    name: "The Court Regency",
    category: "Ongoing",
    location: "Plot #9, Collachi Co-operative Housing Society, Karachi",
    client: "The Court Group",
    consultant: "Alliance Consultants / Arch Vision",
    meta: ["Basement + Ground + 17 Floors", "450,000 Sft Covered"],
  },
  {
    id: "court-twin",
    name: "The Court Twin Tower",
    category: "Ongoing",
    location: "Plot #10, Collachi Co-operative Housing Society, Karachi",
    client: "The Court Group",
    consultant: "Mushtaq & Bilal / Arch Vision",
    meta: ["B1 + B2 + Ground + 19 Floors", "500,000 Sft Covered"],
  },
  {
    id: "court-heights",
    name: "The Court Heights",
    category: "Ongoing",
    location: "Outside Boundary Collachi Co Op. Housing Society, Stadium Road, Karachi",
    client: "The Court Group",
    consultant: "Mushtaq & Bilal / Arch Vision",
    meta: ["20 Story Building"],
  },
  {
    id: "court-skyscraper",
    name: "The Court Skyscraper",
    category: "Ongoing",
    location: "KPT Flyover, Qayum Abad, Karachi",
    client: "The Court Group",
    consultant: "Arshad Shahid Abdullah / Mushtaq & Bilal",
  },
];
