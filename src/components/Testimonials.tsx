'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "The Johnson Family",
    role: "Happy Home Buyers",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    statement: "Working with this team was a dream. They understood our needs perfectly and found us a home in The Vistas that we instantly fell in love with. The process was smooth, professional, and genuinely enjoyable."
  },
  {
    name: "Michael & Sarah P.",
    role: "Successful Sellers",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    statement: "Their market knowledge of Summerlin is second to none. They priced our home perfectly, and their marketing strategy brought in multiple offers above asking price. We couldn't be happier with the outcome."
  },
  {
    name: "David Chen",
    role: "Relocating Professional",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    statement: "As someone new to Las Vegas, their guidance was invaluable. They didn't just sell me a house; they helped me understand the different communities and find the perfect place to start my new chapter."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Handlers for navigation
  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Touch/swipe handlers
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) prev();
    if (touchStartX - touchEndX > 50) next();
  };

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We&apos;re proud to have helped so many people find their perfect place in The Vistas.
          </p>
        </div>
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.figure
                key={current}
                className="bg-secondary rounded-2xl p-8 shadow-sm border border-transparent flex flex-col"
                role="region"
                aria-label={`Testimonial from ${testimonials[current].name}, ${testimonials[current].role}`}
                data-testid="testimonial-card"
                tabIndex={0}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '1rem' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonials[current].avatar}
                      alt={`${testimonials[current].name} - ${testimonials[current].role}`}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full mr-4"
                      priority
                      sizes="64px"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjdmOWZjIi8+PC9zdmc+"
                    />
                    <figcaption>
                      <p className="text-lg font-bold text-primary" style={{color: '#0A2540'}}>{testimonials[current].name}</p>
                      <p className="text-accent" style={{color: '#3A8DDE'}}>{testimonials[current].role}</p>
                    </figcaption>
                  </div>
                  <blockquote className="text-foreground/80 leading-relaxed" aria-label="Testimonial statement">
                    &ldquo;{testimonials[current].statement}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center text-yellow-500" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${current}-${i}`} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </motion.figure>
            </AnimatePresence>
            {/* Carousel Controls */}
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
              style={{zIndex:2}}
            >
              <svg width="24" height="24" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
              style={{zIndex:2}}
            >
              <svg width="24" height="24" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i+1}`}
                  className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-accent' : 'bg-gray-300'}`}
                  onClick={() => setCurrent(i)}
                  style={{outline: i === current ? '2px solid #0A2540' : 'none'}}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              className="bg-secondary rounded-2xl p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 flex flex-col"
              role="region"
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
              data-testid="testimonial-card"
              tabIndex={0}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '1rem' }}
            >
              <div className="flex-grow">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full mr-4"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="(max-width: 768px) 64px, 64px"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjdmOWZjIi8+PC9zdmc+"
                  />
                  <figcaption>
                    <p className="text-lg font-bold text-primary" style={{color: '#0A2540'}}>{testimonial.name}</p>
                    <p className="text-accent" style={{color: '#3A8DDE'}}>{testimonial.role}</p>
                  </figcaption>
                </div>
                <blockquote className="text-foreground/80 leading-relaxed" aria-label="Testimonial statement">
                  &ldquo;{testimonial.statement}&rdquo;
                </blockquote>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center text-yellow-500" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-${index}-${i}`} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
} 