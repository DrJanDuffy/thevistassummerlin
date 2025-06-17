"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import RealScoutOfficeListings from "../../components/RealScoutOfficeListings";

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

export default function CommunityPage(props: any) {
  const { params } = props;
  const name = subcommunities.find(
    (n) => toKebabCase(n) === params.slug
  );
  if (!name) return notFound();
  const [imgSrc, setImgSrc] = useState(`/subcommunities/${name.replace(/ /g, "-")}.jpg`);
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <div className="w-full mb-6">
        <Image
          src={imgSrc}
          alt={`${name} at The Vistas Summerlin`}
          width={800}
          height={320}
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          onError={() => setImgSrc("/hero.jpg")}
          priority
        />
      </div>
      {/* RealScout Widget */}
      <div className="mb-8">
        <RealScoutOfficeListings agentEncodedId="QWdlbnQtMjI1MDUw" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">{name} at The Vistas Summerlin</h1>
      <p className="mb-4 text-gray-700">Welcome to {name}, a premier subcommunity in The Vistas Summerlin. Discover beautiful homes, amenities, and a vibrant lifestyle in this sought-after neighborhood.</p>
    </main>
  );
} 