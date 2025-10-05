'use client';

import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
}

export default function GradientCard({
  children,
  className = '',
  gradient = 'from-white/95 to-white/90',
  hover = true,
}: GradientCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/20 shadow-lg
        bg-gradient-to-br ${gradient}
        backdrop-blur-sm
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
