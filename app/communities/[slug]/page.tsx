import { notFound } from "next/navigation";
import CommunityHeroImage from "../../components/CommunityHeroImage";
import CommunityListingsClient from "../../components/CommunityListingsClient";

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
  const imgSrc = `/subcommunities/${name.replace(/ /g, "-")}.jpg`;
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <div className="w-full mb-6">
        <CommunityHeroImage name={name} imgSrc={imgSrc} />
      </div>
      {/* RealScout Widget */}
      <div className="mb-8">
        <CommunityListingsClient agentEncodedId="QWdlbnQtMjI1MDUw" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">{name} at The Vistas Summerlin</h1>
      <p className="mb-4 text-gray-700">Welcome to {name}, a premier subcommunity in The Vistas Summerlin. Discover beautiful homes, amenities, and a vibrant lifestyle in this sought-after neighborhood.</p>
    </main>
  );
} 