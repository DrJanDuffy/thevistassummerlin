import Image from "next/image";

export default function Miramonte() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      {/* Optimized Hero Image */}
      <div className="w-full mb-6">
        <Image
          src="/hero.jpg"
          alt="Miramonte at The Vistas Summerlin"
          width={800}
          height={320}
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Miramonte at The Vistas Summerlin</h1>
      <p className="text-lg text-gray-700 mb-4">Welcome to Miramonte, a beautiful subcommunity in The Vistas Summerlin. (Details coming soon!)</p>
    </main>
  );
} 