export type User = {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  skills: string[];
  portfolioLinks: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  location: string;
  isVerified: boolean;
};

export type Review = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

export type Message = {
    id: string;
    sender: 'me' | 'other';
    content: string;
    timestamp: string;
    avatar: string;
};

export type Conversation = {
    id: string;
    participant: {
        id: string;
        name: string;
        avatar: string;
    };
    lastMessage: {
        content: string;
        timestamp: string;
    };
    unreadCount: number;
}
