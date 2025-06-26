'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const OffCanvasNav = dynamic(() => import("@/components/ui/OffCanvasNav"), { ssr: false });

const navLinks = [
  { href: "/search", label: "Find a Home" },
  { href: "/about", label: "Life & Culture" },
  { href: "/events", label: "Things to Do" },
  { href: "/communities", label: "Downtown Summerlin" },
  { href: "/commercial", label: "Commercial" },
  { href: "/map", label: "Maps" },
];

export default function Header() {
  return (
    <header className="w-full bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder SVG logo */}
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 28L20 4L38 28" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M8 28L20 12L32 28" stroke="#E94F37" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-bold tracking-wide">SUMMERLIN</span>
        </Link>
        {/* Navigation */}
        <nav className="flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="uppercase font-semibold tracking-wide hover:text-red-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 