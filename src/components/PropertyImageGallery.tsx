'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera, ZoomIn } from 'lucide-react';
import { realScoutImageUrls } from '@/lib/propertyImages';

interface PropertyImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PropertyImageGalleryProps {
  images: PropertyImage[];
  propertyAddress: string;
}

export function PropertyImageGallery({ images, propertyAddress }: PropertyImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (images.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10">
          <Camera className="w-20 h-20 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-3">{propertyAddress}</h3>
          <p className="text-blue-100 text-lg mb-2">Professional photos coming soon</p>
          <p className="text-blue-200 text-sm">Contact Jan Duffy to schedule a private showing</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Main Image Display */}
      <div className="relative bg-gray-100 rounded-3xl overflow-hidden h-96 mb-6 group">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
          onClick={() => openModal(currentImageIndex)}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Caption */}
        {images[currentImageIndex].caption && (
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm max-w-xs">
            {images[currentImageIndex].caption}
          </div>
        )}
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}: ${image.alt}`}
              className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'ring-4 ring-blue-500 ring-offset-2 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === currentImageIndex && (
                <div className="absolute inset-0 bg-blue-500/20"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Modal for Full-Screen View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative max-w-6xl max-h-full">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
            
            {images[currentImageIndex].caption && (
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-2xl max-w-md">
                <div className="text-lg font-medium">{images[currentImageIndex].caption}</div>
              </div>
            )}
            
            {/* Modal Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Golden Moments Avenue specific images using RealScout URLs
export const goldenMomentsImages: PropertyImage[] = [
  {
    src: realScoutImageUrls.frontExterior,
    alt: "11773 Golden Moments Avenue - Front exterior view",
    caption: "Beautiful front exterior with landscaped yard and curb appeal"
  },
  {
    src: realScoutImageUrls.kitchen,
    alt: "11773 Golden Moments Avenue - Modern kitchen with black granite countertops and white shaker cabinets",
    caption: "Stunning modern kitchen with black granite countertops, white shaker cabinets, and premium appliances"
  },
  {
    src: realScoutImageUrls.livingRoom,
    alt: "11773 Golden Moments Avenue - Living room with gas fireplace",
    caption: "Spacious living room with gas fireplace and natural light"
  },
  {
    src: realScoutImageUrls.masterBedroom,
    alt: "11773 Golden Moments Avenue - Master bedroom suite",
    caption: "Primary suite with private bath and walk-in closet"
  },
  {
    src: realScoutImageUrls.backyard,
    alt: "11773 Golden Moments Avenue - Backyard outdoor living space",
    caption: "Huge landscaped yard perfect for entertaining and family gatherings"
  },
  {
    src: realScoutImageUrls.diningRoom,
    alt: "11773 Golden Moments Avenue - Dining room",
    caption: "Formal dining area for entertaining guests"
  },
  {
    src: realScoutImageUrls.secondMaster,
    alt: "11773 Golden Moments Avenue - Second master suite upstairs",
    caption: "Second primary suite upstairs - unique dual master feature"
  },
  {
    src: realScoutImageUrls.garage,
    alt: "11773 Golden Moments Avenue - 2-car garage",
    caption: "Attached 2-car garage with storage space"
  }
];