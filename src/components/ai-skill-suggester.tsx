"use client";

import React, { useState } from "react";
import { Sparkles, LoaderCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { suggestSkills } from "@/ai/flows/ai-skill-suggester";
import { useToast } from "@/hooks/use-toast";

type AiSkillSuggesterProps = {
  experience: string;
  portfolioLinks: string[];
};

export default function AiSkillSuggester({
  experience: initialExperience,
  portfolioLinks: initialPortfolioLinks,
}: AiSkillSuggesterProps) {
  const [experience, setExperience] = useState(initialExperience);
  const [portfolioLinks, setPortfolioLinks] = useState(initialPortfolioLinks.join(', '));
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestSkills = async () => {
    setIsLoading(true);
    setSuggestedSkills([]);
    try {
      const result = await suggestSkills({
        experience,
        portfolioLinks,
      });
      setSuggestedSkills(result.suggestedSkills);
    } catch (error) {
      console.error("Error suggesting skills:", error);
      toast({
        title: "Error",
        description: "Could not suggest skills at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <CardTitle>AI Skill Suggester</CardTitle>
        </div>
        <CardDescription>
          Let AI suggest skills based on your experience and portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="experience">Your Experience</Label>
          <Textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe your professional experience..."
            rows={6}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="portfolio">Portfolio Links</Label>
          <Input
            id="portfolio"
            value={portfolioLinks}
            onChange={(e) => setPortfolioLinks(e.target.value)}
            placeholder="e.g., github.com/user, behance.net/user"
          />
        </div>
        <Button onClick={handleSuggestSkills} disabled={isLoading} className="w-full">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Suggest Skills
        </Button>
        {suggestedSkills.length > 0 && (
          <div className="space-y-2 pt-4">
            <h4 className="font-semibold">Suggested Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, index) => (
                <Badge key={index} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-2">Click a skill to add it to your profile (feature coming soon).</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
