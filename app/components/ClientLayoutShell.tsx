'use client';
import dynamic from "next/dynamic";
import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const RegisterServiceWorker = dynamic(() => import("./RegisterServiceWorker"), { ssr: false });

export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RegisterServiceWorker />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
} 