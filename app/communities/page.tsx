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

export default function Communities() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">The Vistas Summerlin Subcommunities</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subcommunities.map((name) => (
          <li key={name}>
            <a href={`/communities/${toKebabCase(name)}`}
              className="block p-4 bg-white rounded shadow hover:bg-blue-50 border border-blue-100 transition-colors">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
} 