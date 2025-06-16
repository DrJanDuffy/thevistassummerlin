import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-900 text-center mb-4">
          Welcome to The Vistas Summerlin
        </h1>
        <p className="text-lg sm:text-2xl text-gray-700 text-center max-w-xl mb-8">
          Discover your perfect home in one of 28 vibrant subcommunities. Explore local market insights, community events, and the best of Summerlin living—all in one place.
        </p>
        <a
          href="#communities"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors"
        >
          Explore Communities
        </a>
      </main>
    </div>
  );
}
