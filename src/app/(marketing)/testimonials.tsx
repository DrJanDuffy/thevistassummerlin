'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';

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
    statement: "Their market knowledge of Summerlin is second to none. They priced our home perfectly, and their marketing strategy brought in multiple offers above asking price. We couldn&apos;t be happier with the outcome."
  },
  {
    name: "David Chen",
    role: "Relocating Professional",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    statement: "As someone new to Las Vegas, their guidance was invaluable. They didn&apos;t just sell me a house; they helped me understand the different communities and find the perfect place to start my new chapter."
  }
];

export default function Testimonials() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary rounded-2xl p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center mb-6">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-bold text-primary">{testimonial.name}</p>
                    <p className="text-accent">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">&ldquo;{testimonial.statement}&rdquo;</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
