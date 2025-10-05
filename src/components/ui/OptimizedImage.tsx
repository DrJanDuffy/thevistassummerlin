'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallback?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  fallback,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  placeholder = 'blur',
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  objectFit = 'cover',
  onError,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallback) {
      setImageSrc(fallback);
      setHasError(true);
    }
    onError?.();
  };

  const imageProps = fill
    ? {
        fill: true,
        className: `object-${objectFit} ${className}`,
      }
    : {
        width: width || 800,
        height: height || 600,
        className: `object-${objectFit} ${className}`,
      };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      onError={handleError}
      priority={priority}
      sizes={sizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...imageProps}
    />
  );
}
