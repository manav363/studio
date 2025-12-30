import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  totalStars?: number;
  className?: string;
};

export function StarRating({ rating, totalStars = 5, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn("flex items-center", className)} aria-label={`Rating: ${rating} out of ${totalStars} stars.`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-accent fill-accent" />
      ))}
      {partialStar > 0 && (
        <div className="relative">
          <Star key="partial" className="w-4 h-4 text-accent" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />
      ))}
    </div>
  );
}
