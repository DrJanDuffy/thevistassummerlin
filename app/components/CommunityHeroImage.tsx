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
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src={src}
        alt={`A scenic view of ${name}`}
        layout="fill"
        objectFit="cover"
        className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        onError={() => setSrc("https://placehold.co/1200x400/0A2540/FFF?text=Image+Not+Found")}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
        {/* The text from the hero section on the homepage is now part of this component */}
      </div>
    </div>
  );
} 