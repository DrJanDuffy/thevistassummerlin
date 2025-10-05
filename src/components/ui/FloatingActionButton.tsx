'use client';

import { ReactNode } from 'react';

interface FloatingActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function FloatingActionButton({
  children,
  onClick,
  href,
  className = '',
  position = 'bottom-right',
  variant = 'primary',
}: FloatingActionButtonProps) {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
  };

  const variantClasses = {
    primary: 'bg-primary-navy hover:bg-primary-navy/90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-gold hover:bg-secondary-gold/90 text-white shadow-lg hover:shadow-xl',
    accent: 'bg-accent-blue hover:bg-accent-blue/90 text-white shadow-lg hover:shadow-xl',
  };

  const baseClasses = `
    z-50 p-4 rounded-full transition-all duration-300
    hover:scale-110 active:scale-95
    ${positionClasses[position]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <div className={baseClasses}>
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block">
      {content}
    </button>
  );
}
