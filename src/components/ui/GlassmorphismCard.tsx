'use client';

import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  hover?: boolean;
}

export default function GlassmorphismCard({
  children,
  className = '',
  intensity = 'medium',
  hover = true,
}: GlassmorphismCardProps) {
  const intensityClasses = {
    light: 'bg-white/10 backdrop-blur-md border-white/20',
    medium: 'bg-white/20 backdrop-blur-lg border-white/30',
    strong: 'bg-white/30 backdrop-blur-xl border-white/40',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl shadow-xl
        ${intensityClasses[intensity]}
        ${hover ? 'hover:shadow-2xl hover:scale-[1.02] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
