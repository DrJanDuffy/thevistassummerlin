import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
  property?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Mike Johnson",
    location: "Arbors at Summerlin",
    rating: 5,
    text: "Working with The Vistas Summerlin team made our home buying experience seamless. They knew the community inside and out and helped us find the perfect home for our growing family.",
    property: "4BR/3BA in Arbors"
  },
  {
    id: 2,
    name: "Jennifer Chen",
    location: "Mesa Ridge",
    rating: 5,
    text: "As a first-time buyer, I was nervous about the process. The team's expertise in Summerlin communities and patient guidance made all the difference. I couldn't be happier with my new home!",
    property: "3BR/2BA Townhome"
  },
  {
    id: 3,
    name: "Robert & Linda Martinez",
    location: "The Paseos",
    rating: 5,
    text: "After 20 years in our previous home, we were ready to downsize but stay in Summerlin. The team understood exactly what we needed and found us the perfect retirement home.",
    property: "2BR/2BA Condo"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-accent fill-accent' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-body">
            Real stories from real families who found their perfect home in The Vistas Summerlin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl border border-border transition-all duration-300 transform hover:-translate-y-1"
            >
              <StarRating rating={testimonial.rating} />
              
              <blockquote className="text-foreground/90 mb-6 leading-relaxed font-body italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.split(' ')[0][0]}
                      {testimonial.name.includes('&') ? testimonial.name.split('& ')[1][0] : ''}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-heading">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/70 font-body">
                      {testimonial.location}
                    </p>
                    {testimonial.property && (
                      <p className="text-xs text-accent font-medium">
                        {testimonial.property}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              Ready to Write Your Own Success Story?
            </h3>
            <p className="text-foreground/80 mb-6 font-body">
              Join hundreds of satisfied homeowners who've found their perfect home in The Vistas Summerlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/search"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Start Your Search
              </a>
              <a
                href="/contact"
                className="bg-transparent hover:bg-accent/10 text-accent font-bold py-3 px-8 rounded-full border-2 border-accent transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get Expert Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
