import Image from 'next/image';
import {
  Briefcase,
  Star,
  MessageCircle,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { freelancers, reviews, portfolioItems } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { StarRating } from '@/components/star-rating';
import Link from 'next/link';

export default function ProfilePage({ params }: { params: { userId: string } }) {
  const freelancer = freelancers.find((f) => f.id === params.userId);

  if (!freelancer) {
    return (
      <div className="container mx-auto py-12 text-center">
        User not found.
      </div>
    );
  }

  const profileImage = PlaceHolderImages.find(
    (img) => img.id === freelancer.avatar
  );

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto p-4 md:p-8">
        <Card className="overflow-hidden">
          <div className="relative h-48 w-full bg-secondary">
             <Image src="https://picsum.photos/seed/header/1200/200" alt="Profile banner" layout="fill" objectFit="cover" />
          </div>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-6 -mt-20">
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32 border-4 border-background ring-1 ring-border">
                  <AvatarImage src={profileImage?.imageUrl} alt={freelancer.name} data-ai-hint={profileImage?.imageHint} />
                  <AvatarFallback>{freelancer.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-grow pt-16 md:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold">{freelancer.name}</h1>
                            {freelancer.isVerified && <CheckCircle className="h-5 w-5 text-blue-500" title="Verified"/>}
                        </div>
                        <p className="text-muted-foreground">{freelancer.title}</p>
                        <div className="flex items-center text-sm text-muted-foreground gap-4 mt-2">
                             <div className="flex items-center gap-1">
                                <StarRating rating={freelancer.rating} />
                                <span className="font-semibold">{freelancer.rating.toFixed(1)}</span>
                                <span>({freelancer.reviewsCount} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{freelancer.location}</span>
                            </div>
                        </div>
                    </div>
                  <div className="mt-4 sm:mt-0 flex gap-2">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <MessageCircle className="mr-2 h-4 w-4" /> Message
                    </Button>
                    <Button variant="outline">Request Proposal</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center md:text-left">
              <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Hourly Rate</p>
                  <p className="text-xl font-bold">${freelancer.hourlyRate}</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                  <p className="text-xl font-bold">{freelancer.reviewsCount}+</p>
              </div>
               <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="text-xl font-bold">2022</p>
              </div>
            </div>

            <Tabs defaultValue="about" className="mt-6">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardHeader><CardTitle>About Me</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{freelancer.bio}</p>
                    <h3 className="font-semibold mt-6 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="portfolio" className="mt-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map(item => {
                        const portfolioImage = PlaceHolderImages.find(img => img.id === item.imageUrl);
                        return (
                            <Card key={item.id} className="overflow-hidden group">
                                <div className="relative aspect-video">
                                    <Image src={portfolioImage?.imageUrl || ''} alt={item.title} layout="fill" objectFit="cover" data-ai-hint={portfolioImage?.imageHint} />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button asChild variant="secondary">
                                            <Link href={item.link} target="_blank">View Project</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                </div>
                            </Card>
                        )
                    })}
                 </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <Card>
                    <CardHeader><CardTitle>Client Reviews</CardTitle></CardHeader>
                    <CardContent className="space-y-6">
                        {reviews.map((review, index) => {
                            const reviewAuthorImage = PlaceHolderImages.find(img => img.id === review.author.avatar);
                            return (
                            <div key={review.id}>
                                <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src={reviewAuthorImage?.imageUrl} alt={review.author.name} data-ai-hint={reviewAuthorImage?.imageHint} />
                                    <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                    <p className="font-semibold">{review.author.name}</p>
                                    <p className="text-xs text-muted-foreground">{review.date}</p>
                                    </div>
                                    <div className="flex items-center my-1">
                                    <StarRating rating={review.rating} />
                                    </div>
                                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                                </div>
                                </div>
                                {index < reviews.length - 1 && <Separator className="mt-6" />}
                            </div>
                        )})}
                    </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
