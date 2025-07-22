'use client';
import Link from "next/link";
import { useState } from "react";

const subcommunities = [
  "Altessa", "Ashton Park", "Barrington", "Bella Vista", "Canterra", "Capri",
  "Cara Vella", "Casa Rosa", "Encanto", "Estancia", "Hillstone", "Kingwood",
  "Miraleste", "Miramonte", "Monterossa", "Palmilla", "Paradiso", "Portofino",
  "Sage Hills", "San Marcos", "Santalina", "Solano", "Somerset", "Sonesta",
  "Summerfield", "Talaverde", "Talega", "Vista Verde"
];

function toKebabCase(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex gap-4 items-center">
      <Link href="/about" className="hover:text-accent transition-colors duration-300">About</Link>
      <Link href="/communities" className="hover:text-accent transition-colors duration-300">Communities</Link>
      <div className="relative">
        <button
          className="hover:text-accent transition-colors duration-300"
          onClick={() => setShowDropdown((v) => !v)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        >
          Subcommunities
        </button>
        {showDropdown && (
          <ul className="absolute left-0 mt-2 w-56 bg-background text-foreground border border-border rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
            {subcommunities.map((name) => (
              <li key={name}>
                <Link
                  href={`/communities/${toKebabCase(name)}`}
                  className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setShowDropdown(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link href="/search" className="hover:text-accent transition-colors duration-300">Search</Link>
      <Link href="/valuation" className="hover:text-accent transition-colors duration-300">Valuation</Link>
      <Link href="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link>
      <Link href="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
    </div>
  );
} 