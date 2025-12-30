import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AiSkillSuggester from "@/components/ai-skill-suggester";
import { freelancers } from "@/lib/placeholder-data";

export default function EditProfilePage() {
  const user = freelancers[0]; // Mock user data

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your public profile information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" defaultValue={user.title} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue={user.bio}
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <p className="text-sm text-muted-foreground">
                    Your current skills. Add or remove them below.
                </p>
                <div className="flex flex-wrap gap-2 rounded-md border p-4">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="pr-1">
                      {skill}
                      <Button variant="ghost" size="icon" className="h-4 w-4 ml-1">
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                   {user.skills.length === 0 && <p className="text-sm text-muted-foreground">No skills added yet.</p>}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="md:col-span-1">
          <AiSkillSuggester 
            experience={user.bio}
            portfolioLinks={user.portfolioLinks}
          />
        </div>
      </div>
    </div>
  );
}
