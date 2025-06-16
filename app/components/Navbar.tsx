'use client';
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const subcommunities = [
  "Solano", "Encanto", "Belmonte", "Cielo", "Estancia", "Granite Peaks", "Miraleste", "Montecito", "Montaire", "Paradiso", "Portofino", "San Marcos", "Santaluz", "Serrano", "Talaverde", "Talavera", "Traccia", "Vista Verde", "Wisteria Hills", "Amber Hills", "Andorra", "Barcelona", "Cortona", "Cresta Del Sol", "Mariposa", "Palomar", "Sage Hills", "Sierra Woods"
];

function toKebabCase(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-900">The Vistas Summerlin</Link>
        <div className="flex gap-4 items-center">
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