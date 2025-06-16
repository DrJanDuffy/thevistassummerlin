'use client';
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { OffCanvasNav } from "./ui/OffCanvasNav";

const subcommunities = [
  "Altessa",
  "Ashton Park",
  "Barrington",
  "Bella Vista",
  "Canterra",
  "Capri",
  "Cara Vella",
  "Casa Rosa",
  "Encanto",
  "Estancia",
  "Hillstone",
  "Kingwood",
  "Miraleste",
  "Miramonte",
  "Monterossa",
  "Palmilla",
  "Paradiso",
  "Portofino",
  "Sage Hills",
  "San Marcos",
  "Santalina",
  "Solano",
  "Somerset",
  "Sonesta",
  "Summerfield",
  "Talaverde",
  "Talega",
  "Vista Verde"
];

function toKebabCase(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/communities", label: "Communities" },
  { href: "/search", label: "Search" },
  { href: "/valuation", label: "Valuation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const subcommunityLinks = subcommunities.map((name) => ({
  href: `/communities/${toKebabCase(name)}`,
  label: name,
}));

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-900">The Vistas Summerlin</Link>
        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <OffCanvasNav
            links={mainLinks}
          />
          <ThemeToggle />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <Link href="/communities" className="hover:text-blue-700">Communities</Link>
          <div className="relative">
            <button
              className="hover:text-blue-700"
              onClick={() => setShowDropdown((v) => !v)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            >
              Subcommunities
            </button>
            {showDropdown && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg max-h-64 overflow-y-auto z-50">
                {subcommunities.map((name) => (
                  <li key={name}>
                    <Link
                      href={`/communities/${toKebabCase(name)}`}
                      className="block px-4 py-2 hover:bg-blue-50"
                      onClick={() => setShowDropdown(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/search" className="hover:text-blue-700">Search</Link>
          <Link href="/valuation" className="hover:text-blue-700">Valuation</Link>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
} 