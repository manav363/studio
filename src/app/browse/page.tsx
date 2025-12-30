"use client";
import React, { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { freelancers } from '@/lib/placeholder-data';
import FreelancerCard from '@/components/freelancer-card';
import { Label } from '@/components/ui/label';

const allSkills = [...new Set(freelancers.flatMap((f) => f.skills))];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [priceRange, setPriceRange] = useState([20, 150]);
  const [rating, setRating] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  const filteredFreelancers = useMemo(() => {
    return freelancers.filter((freelancer) => {
      const matchesSearch =
        freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        freelancer.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSkill =
        selectedSkill === 'all' || freelancer.skills.includes(selectedSkill);
      const matchesPrice =
        freelancer.hourlyRate >= priceRange[0] &&
        freelancer.hourlyRate <= priceRange[1];
      const matchesRating = freelancer.rating >= rating;
      const matchesVerified = !isVerified || freelancer.isVerified;

      return (
        matchesSearch &&
        matchesSkill &&
        matchesPrice &&
        matchesRating &&
        matchesVerified
      );
    });
  }, [searchTerm, selectedSkill, priceRange, rating, isVerified]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Find Top Talent</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse our community of skilled freelancers ready to work on your next project.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="search">Search by Name or Title</Label>
                <Input
                  id="search"
                  placeholder="e.g. John Doe, UI/UX Designer"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="skills-select">Skills</Label>
                <Select
                  value={selectedSkill}
                  onValueChange={setSelectedSkill}
                >
                  <SelectTrigger id="skills-select" className="w-full mt-2">
                    <SelectValue placeholder="Select a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    {allSkills.map((skill) => (
                      <SelectItem key={skill} value={skill}>
                        {skill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Hourly Rate</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={200}
                  step={10}
                  className="mt-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <Label>Minimum Rating</Label>
                 <div className="flex items-center space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map(r => (
                        <Button key={r} variant={rating >= r ? "default" : "outline"} size="sm" onClick={() => setRating(r)}>
                            {r}+
                        </Button>
                    ))}
                 </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified"
                  checked={isVerified}
                  onCheckedChange={(checked) => setIsVerified(Boolean(checked))}
                />
                <Label htmlFor="verified" className="font-normal">
                  Verified Freelancers Only
                </Label>
              </div>
              <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedSkill('all');
                  setPriceRange([20,150]);
                  setRating(0);
                  setIsVerified(false);
              }} variant="outline" className="w-full">Reset Filters</Button>
            </div>
          </div>
        </aside>
        <main className="md:col-span-3">
          {filteredFreelancers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFreelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 py-24 text-center">
              <h3 className="text-xl font-semibold">No Freelancers Found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters to find more results.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
