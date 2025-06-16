'use client';
import React from 'react';

type FABProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function FAB({ onClick, icon, label, ...props }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg focus:ring-2 focus:ring-blue-400"
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
} 