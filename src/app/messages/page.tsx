import {
  Search,
  Send,
  Paperclip,
  MoreVertical
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { conversations, messages as mockMessages, freelancers } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';


export default function MessagesPage() {
    const activeConversation = conversations[0];
    const meImage = PlaceHolderImages.find(img => img.id === 'profile-me');

  return (
    <div className="h-[calc(100vh-57px)] flex">
      <div className="hidden md:flex flex-col w-80 lg:w-96 border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-9" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {conversations.map((convo) => {
            const participantImage = PlaceHolderImages.find(img => img.id === convo.participant.avatar);
            return (
              <div
                key={convo.id}
                className={cn(
                  "flex items-center gap-3 p-4 cursor-pointer hover:bg-secondary",
                  convo.id === activeConversation.id ? "bg-secondary" : ""
                )}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={participantImage?.imageUrl} alt={convo.participant.name} data-ai-hint={participantImage?.imageHint}/>
                  <AvatarFallback>{convo.participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{convo.participant.name}</p>
                    <p className="text-xs text-muted-foreground">{convo.lastMessage.timestamp}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground truncate">{convo.lastMessage.content}</p>
                    {convo.unreadCount > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {convo.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center p-4 border-b">
           {activeConversation && (
            <>
            <Avatar className="h-10 w-10">
                <AvatarImage src={PlaceHolderImages.find(i => i.id === activeConversation.participant.avatar)?.imageUrl} />
                <AvatarFallback>{activeConversation.participant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
                <h2 className="font-semibold">{activeConversation.participant.name}</h2>
                <p className="text-xs text-muted-foreground">Online</p>
            </div>
            </>
           )}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1 p-4 md:p-6">
          <div className="space-y-6">
            {mockMessages.map((message) => {
                const isMe = message.sender === 'me';
                const senderImage = isMe ? meImage : PlaceHolderImages.find(i => i.id === message.avatar);
                const sender = isMe ? {name: "You"} : freelancers.find(f => f.avatar === message.avatar);

                return (
                    <div key={message.id} className={cn("flex items-end gap-3", isMe ? "justify-end" : "justify-start")}>
                         {!isMe && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={senderImage?.imageUrl} alt={sender?.name} data-ai-hint={senderImage?.imageHint} />
                                <AvatarFallback>{sender?.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                         )}
                        <div className={cn("max-w-xs md:max-w-md lg:max-w-lg rounded-xl px-4 py-3 text-sm", 
                            isMe ? "bg-primary text-primary-foreground" : "bg-secondary"
                        )}>
                            <p>{message.content}</p>
                             <p className={cn("text-xs mt-1", isMe ? "text-primary-foreground/70" : "text-muted-foreground/70")}>
                                {message.timestamp}
                            </p>
                        </div>
                         {isMe && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={senderImage?.imageUrl} alt={sender?.name} data-ai-hint={senderImage?.imageHint} />
                                <AvatarFallback>{sender?.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                         )}
                    </div>
                )
            })}
          </div>
        </ScrollArea>

        <footer className="p-4 border-t">
          <div className="relative">
            <Textarea placeholder="Type your message..." className="pr-28 py-3" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-accent hover:bg-accent/90">
                    <Send className="h-5 w-5 text-accent-foreground" />
                </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
