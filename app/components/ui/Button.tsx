'use client';
import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.PropsWithChildren<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, onClick, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'min-h-12 min-w-12 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow transition active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
} 