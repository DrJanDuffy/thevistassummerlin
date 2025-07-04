'use client';
import dynamic from "next/dynamic";
import ThemeProvider from "./ThemeProvider";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const RegisterServiceWorker = dynamic(() => import("./RegisterServiceWorker"), { ssr: false });

export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  // Create QueryClient on the client only
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RegisterServiceWorker />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
} 