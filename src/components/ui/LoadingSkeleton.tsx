'use client';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
  lines?: number;
}

export default function LoadingSkeleton({
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  lines = 1,
}: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const variantClasses = {
    text: 'h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
}
