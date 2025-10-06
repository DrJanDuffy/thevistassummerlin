'use client';

import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export default function GradientCard({ 
  children, 
  className = '', 
  gradient = 'from-blue-500 to-purple-600' 
}: GradientCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}