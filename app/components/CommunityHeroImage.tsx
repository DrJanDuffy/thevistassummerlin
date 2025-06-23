"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CommunityHeroImageProps {
  name: string;
  imgSrc: string;
  children: React.ReactNode;
}

export default function CommunityHeroImage({ name, imgSrc, children }: CommunityHeroImageProps) {
  const [src, setSrc] = useState(imgSrc);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src={src}
        alt={`A scenic view of ${name}`}
        layout="fill"
        objectFit="cover"
        className="transform transition-transform duration-300 ease-in-out"
        onError={() => setSrc("https://placehold.co/1200x400/0A2540/FFF?text=Image+Not+Found")}
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
        {children}
      </div>
    </div>
  );
} 