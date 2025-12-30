import {
  MoreHorizontal,
  User,
  List,
  ShieldAlert
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { freelancers } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, listings, and reports.</p>
        </div>
      </div>
      <Tabs defaultValue="users">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users"><User className="mr-2 h-4 w-4"/>Users</TabsTrigger>
          <TabsTrigger value="listings"><List className="mr-2 h-4 w-4"/>Listings</TabsTrigger>
          <TabsTrigger value="reports"><ShieldAlert className="mr-2 h-4 w-4"/>Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>
                A list of all users in the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead className="hidden md:table-cell">Title</TableHead>
                    <TableHead className="hidden md:table-cell">Rating</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {freelancers.map((user) => {
                    const avatarImage = PlaceHolderImages.find(i => i.id === user.avatar)
                    return (
                        <TableRow key={user.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src={avatarImage?.imageUrl} alt={user.name} data-ai-hint={avatarImage?.imageHint} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-sm text-muted-foreground">{user.location}</p>
                                </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{user.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.rating.toFixed(1)} ({user.reviewsCount})</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Remove User</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="listings">
             <Card>
                <CardHeader>
                    <CardTitle>Listings</CardTitle>
                    <CardDescription>Mock data for listings. Feature coming soon.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-20">
                    <p className="text-muted-foreground">No listings to display.</p>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="reports">
             <Card>
                <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Mock data for user reports. Feature coming soon.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-20">
                    <p className="text-muted-foreground">No reports to display.</p>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
