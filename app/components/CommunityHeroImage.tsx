"use client";
import Image from "next/image";
import { useState } from "react";

interface CommunityHeroImageProps {
  name: string;
  imgSrc: string;
}

export default function CommunityHeroImage({ name, imgSrc }: CommunityHeroImageProps) {
  const [src, setSrc] = useState(imgSrc);
  return (
    <Image
      src={src}
      alt={`${name} at The Vistas Summerlin`}
      width={800}
      height={320}
      sizes="(max-width: 768px) 100vw, 768px"
      className="rounded-lg shadow-lg w-full h-auto object-cover"
      onError={() => setSrc("/hero.jpg")}
      priority
    />
  );
} 