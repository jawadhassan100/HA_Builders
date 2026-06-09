import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children, hero = false }: { children: ReactNode; hero?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={hero ? "" : "pt-24"}>{children}</main>
      <Footer />
    </div>
  );
}