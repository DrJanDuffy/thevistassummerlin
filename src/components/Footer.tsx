import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">&copy; {new Date().getFullYear()} The Vistas Summerlin. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
} 