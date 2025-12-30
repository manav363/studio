import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Search, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { freelancers } from '@/lib/placeholder-data';
import { StarRating } from '@/components/star-rating';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-xl">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find the Right Talent, Right Now
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              SkillBridge connects you with top-tier freelancers for any digital service you can imagine.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/browse">
                  Discover Talent <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">
                  Offer Your Skills
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How SkillBridge Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A streamlined process to connect, collaborate, and create.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Search className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold">1. Discover</h3>
              <p className="text-sm text-muted-foreground">
                Filter and search our marketplace to find the perfect freelancer for your project based on skills, price, and ratings.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                 <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold">2. Connect</h3>
              <p className="text-sm text-muted-foreground">
                Use our built-in messaging system to communicate directly, discuss project details, and share files securely.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                 <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <FileText className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold">3. Hire</h3>
              <p className="text-sm text-muted-foreground">
                Negotiate terms and hire with confidence through custom proposals. Get work done and leave a review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Featured Freelancers</h2>
          <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {freelancers.slice(0, 4).map((freelancer) => {
              const profileImage = PlaceHolderImages.find(img => img.id === freelancer.avatar);
              return (
              <Card key={freelancer.id} className="overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={profileImage?.imageUrl} alt={freelancer.name} data-ai-hint={profileImage?.imageHint} />
                    <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">{freelancer.name}</h3>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                  <div className="flex items-center my-2">
                    <StarRating rating={freelancer.rating} />
                    <span className="ml-2 text-sm text-muted-foreground">({freelancer.reviewsCount})</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {freelancer.skills.slice(0,3).map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href={`/profile/${freelancer.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to bring your ideas to life?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of businesses finding their next great hire.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signup">
                  Get Started Today
                </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
