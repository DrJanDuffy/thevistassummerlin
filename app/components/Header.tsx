'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const OffCanvasNav = dynamic(() => import("@/components/ui/OffCanvasNav"), { ssr: false });

const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/communities", label: "Communities" },
  { href: "/search", label: "Search" },
  { href: "/valuation", label: "Valuation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-primary-foreground hover:text-accent transition-colors duration-300">
          The Vistas Summerlin
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <Navbar />
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <OffCanvasNav links={mainLinks} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 