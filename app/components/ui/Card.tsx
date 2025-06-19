import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Optional: You can import an icon library for badge icons, e.g., lucide-react
// import { Star, Home, Calendar } from 'lucide-react';

type CardProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  badgeIcon?: ReactNode; // Optional icon for badge
  badgeColor?: string; // e.g., "bg-green-500"
  price?: string;
  footer?: ReactNode;
  onFavorite?: () => void;
  isFavorited?: boolean;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
  gradientBg?: boolean; // Enable a background gradient overlay
  theme?: 'default' | 'event' | 'listing' | 'testimonial'; // For future theme expansion
  loading?: boolean; // Show skeleton state
};

export function Card({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  badge,
  badgeIcon,
  badgeColor = "bg-blue-600",
  price,
  footer,
  onFavorite,
  isFavorited,
  actions,
  className = "",
  children,
  gradientBg = false,
  theme = 'default',
  loading = false,
}: CardProps) {
  if (loading) return <CardSkeleton />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl active:scale-[0.98] focus-within:ring-2 focus-within:ring-primary/60 ${className}`}
      tabIndex={0}
      aria-label={title || 'Card'}
    >
      {/* Image with optional gradient overlay */}
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <img
            src={imageUrl}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {gradientBg && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
          )}
        </div>
      )}
      {/* Badge/Status Chip with optional icon */}
      {badge && (
        <span
          className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white rounded-full shadow ${badgeColor} z-10 animate-fade-in dark:bg-primary dark:text-white`}
        >
          {badgeIcon && <span className="w-4 h-4 flex items-center">{badgeIcon}</span>}
          {badge}
        </span>
      )}
      {/* Animated Favorite Button */}
      {onFavorite && (
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onFavorite}
          className={`absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow hover:bg-pink-100 dark:hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors z-10 animate-fade-in`}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <span
            className={`text-xl transition-colors duration-200 ${isFavorited ? 'text-pink-500 scale-110' : 'text-gray-400 dark:text-gray-500 hover:text-pink-400 dark:hover:text-pink-300'}`}
            aria-hidden="true"
          >
            {isFavorited ? "★" : "☆"}
          </span>
        </motion.button>
      )}
      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
        {title && <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white truncate" title={title}>{title}</h3>}
        {subtitle && <div className="text-sm text-gray-500 dark:text-gray-300 mb-2 truncate" title={subtitle}>{subtitle}</div>}
        {price && <div className="text-primary font-semibold text-xl mb-2">{price}</div>}
        <div className="flex-1 text-gray-700 dark:text-gray-200 text-sm">{children}</div>
        {/* Actions (e.g., buttons/links) */}
        {actions && <div className="mt-4 flex flex-wrap gap-2">{actions}</div>}
      </div>
      {/* Footer */}
      {footer && (
        <div className="border-t px-4 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-300">
          {footer}
        </div>
      )}
    </motion.div>
  );
}

// Skeleton loading state for Card
export function CardSkeleton() {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 dark:bg-gray-800" />
      <div className="p-4 flex-1 flex flex-col gap-2">
        <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mt-2" />
        <div className="flex-1" />
        <div className="h-8 w-full bg-gray-100 dark:bg-gray-800 rounded mt-4" />
      </div>
      <div className="border-t px-4 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-300" />
    </div>
  );
}

// Tailwind custom animation (add to your global CSS if not present):
// .animate-fade-in { animation: fadeIn 0.5s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: none; } } 