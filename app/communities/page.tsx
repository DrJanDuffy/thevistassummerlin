const subcommunities = [
  "Solano", "Encanto", "Belmonte", "Cielo", "Estancia", "Granite Peaks", "Miraleste", "Montecito", "Montaire", "Paradiso", "Portofino", "San Marcos", "Santaluz", "Serrano", "Talaverde", "Talavera", "Traccia", "Vista Verde", "Wisteria Hills", "Amber Hills", "Andorra", "Barcelona", "Cortona", "Cresta Del Sol", "Mariposa", "Palomar", "Sage Hills", "Sierra Woods"
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