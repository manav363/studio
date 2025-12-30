import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from '@/components/star-rating';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { User } from '@/lib/types';
import { CheckCircle } from 'lucide-react';

type FreelancerCardProps = {
  freelancer: User;
};

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  const profileImage = PlaceHolderImages.find(img => img.id === freelancer.avatar);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profileImage?.imageUrl} alt={freelancer.name} data-ai-hint={profileImage?.imageHint}/>
            <AvatarFallback>{freelancer.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{freelancer.name}</h3>
              {freelancer.isVerified && <CheckCircle className="h-4 w-4 text-blue-500" />}
            </div>
            <p className="text-sm text-muted-foreground">{freelancer.title}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <StarRating rating={freelancer.rating} />
          <span className="text-xs text-muted-foreground ml-2">
            ({freelancer.reviewsCount} reviews)
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {freelancer.skills.length > 3 && (
             <Badge variant="outline">+{freelancer.skills.length - 3}</Badge>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {freelancer.bio.substring(0, 80)}...
        </p>

        <div className="flex items-end justify-between mt-auto">
            <div>
                <p className="text-xs text-muted-foreground">Starting at</p>
                <p className="font-bold text-lg">${freelancer.hourlyRate}/hr</p>
            </div>
          <Button asChild variant="outline">
            <Link href={`/profile/${freelancer.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
