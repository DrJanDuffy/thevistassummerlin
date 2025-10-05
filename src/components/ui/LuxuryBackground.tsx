'use client';

import { ReactNode } from 'react';

interface LuxuryBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'hero' | 'card' | 'section';
  gradient?: string;
}

export default function LuxuryBackground({
  children,
  className = '',
  variant = 'section',
  gradient = 'from-primary-navy via-accent-blue to-secondary-gold',
}: LuxuryBackgroundProps) {
  const getPatternSize = () => {
    switch (variant) {
      case 'hero': return 60;
      case 'card': return 40;
      case 'section': return 80;
      default: return 60;
    }
  };

  const getPatternOpacity = () => {
    switch (variant) {
      case 'hero': return 'opacity-5';
      case 'card': return 'opacity-10';
      case 'section': return 'opacity-8';
      default: return 'opacity-5';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Primary Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
      
      {/* Luxury Pattern Overlay */}
      <div className={`absolute inset-0 ${getPatternOpacity()}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='${getPatternSize()}' height='${getPatternSize()}' viewBox='0 0 ${getPatternSize()} ${getPatternSize()}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='${getPatternSize()/2}' cy='${getPatternSize()/2}' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Elegant Geometric Shapes */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
