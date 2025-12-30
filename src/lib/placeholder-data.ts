import type { User, Review, PortfolioItem, Conversation, Message } from '@/lib/types';

export const freelancers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'profile-1',
    title: 'Senior UI/UX Designer',
    bio: '10+ years of experience in creating intuitive and beautiful user interfaces for web and mobile apps. Passionate about user-centric design and problem-solving. Proficient in Figma, Sketch, and Adobe XD.',
    skills: ['UI/UX Design', 'Figma', 'Web Design', 'Mobile App Design', 'Prototyping'],
    portfolioLinks: ['https://behance.net/alice', 'https://dribbble.com/alice'],
    rating: 4.9,
    reviewsCount: 124,
    hourlyRate: 75,
    location: 'San Francisco, CA',
    isVerified: true,
  },
  {
    id: '2',
    name: 'Bob Williams',
    avatar: 'profile-2',
    title: 'Full-Stack Developer',
    bio: 'Expert in building scalable web applications with React, Node.js, and PostgreSQL. I love tackling complex challenges and writing clean, efficient code.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    portfolioLinks: ['https://github.com/bob'],
    rating: 4.8,
    reviewsCount: 89,
    hourlyRate: 90,
    location: 'New York, NY',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatar: 'profile-3',
    title: 'Content Writer & SEO Specialist',
    bio: 'Crafting compelling content that ranks. I help businesses grow their online presence through high-quality blog posts, articles, and website copy that is optimized for search engines.',
    skills: ['Content Writing', 'SEO', 'Copywriting', 'Blogging', 'Keyword Research'],
    portfolioLinks: ['https://medium.com/@charlie', 'https://charliewrites.com'],
    rating: 5.0,
    reviewsCount: 210,
    hourlyRate: 50,
    location: 'London, UK',
    isVerified: false,
  },
  {
    id: '4',
    name: 'Diana Prince',
    avatar: 'profile-4',
    title: 'Mobile App Developer (iOS & Android)',
    bio: 'Dedicated mobile developer specializing in native iOS (Swift) and Android (Kotlin) development. Building high-performance, user-friendly mobile experiences from scratch.',
    skills: ['iOS Development', 'Android Development', 'Swift', 'Kotlin', 'Firebase'],
    portfolioLinks: ['https://github.com/diana'],
    rating: 4.7,
    reviewsCount: 55,
    hourlyRate: 85,
    location: 'Austin, TX',
    isVerified: true,
  },
   {
    id: '5',
    name: 'Ethan Hunt',
    avatar: 'profile-5',
    title: 'DevOps & Cloud Architect',
    bio: 'Automating infrastructure and deployment pipelines with AWS, Docker, and Kubernetes. My mission is to make development cycles faster and more reliable.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    portfolioLinks: [],
    rating: 4.9,
    reviewsCount: 78,
    hourlyRate: 110,
    location: 'Seattle, WA',
    isVerified: true,
  },
  {
    id: '6',
    name: 'Fiona Glenanne',
    avatar: 'profile-6',
    title: 'Graphic Designer & Illustrator',
    bio: 'Bringing ideas to life with vibrant illustrations and clean graphic design. Specializing in branding, logos, and marketing materials.',
    skills: ['Graphic Design', 'Illustration', 'Adobe Illustrator', 'Branding', 'Logo Design'],
    portfolioLinks: ['https://instagram.com/fiona'],
    rating: 4.8,
    reviewsCount: 92,
    hourlyRate: 60,
    location: 'Miami, FL',
    isVerified: false,
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: { name: 'Client Corp', avatar: 'client-1' },
    rating: 5,
    comment: 'Alice was a pleasure to work with. She delivered exceptional designs ahead of schedule and was very receptive to feedback. Highly recommended!',
    date: '2023-10-15',
  },
  {
    id: 'r2',
    author: { name: 'Startup Inc', avatar: 'client-2' },
    rating: 4,
    comment: 'Her design work is top-notch. There were some minor delays, but the final product exceeded our expectations. Would hire again.',
    date: '2023-09-01',
  },
  {
    id: 'r3',
    author: { name: 'Innovate LLC', avatar: 'client-3' },
    rating: 5,
    comment: 'Simply the best. Alice transformed our vague ideas into a stunning and user-friendly prototype.',
    date: '2023-08-22',
  },
];

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'p1',
        title: 'E-commerce Redesign',
        description: 'A complete overhaul of a fashion retail website to improve user experience and conversion rates.',
        imageUrl: 'portfolio-1',
        imageHint: 'website design',
        link: '#',
    },
    {
        id: 'p2',
        title: 'Mobile Banking App',
        description: 'Designed a new mobile banking application focused on simplicity and security.',
        imageUrl: 'portfolio-2',
        imageHint: 'mobile app',
        link: '#',
    },
    {
        id: 'p3',
        title: 'SaaS Dashboard Concept',
        description: 'A conceptual design for a data-intensive SaaS platform dashboard.',
        imageUrl: 'portfolio-3',
        imageHint: 'dashboard analytics',
        link: '#',
    },
];

export const conversations: Conversation[] = [
    {
        id: 'c1',
        participant: freelancers[1],
        lastMessage: {
            content: "Sure, I can get that done. Let's discuss the details.",
            timestamp: "10:30 AM"
        },
        unreadCount: 2
    },
    {
        id: 'c2',
        participant: freelancers[2],
        lastMessage: {
            content: "Thanks for the opportunity! I'll review the document and get back to you.",
            timestamp: "Yesterday"
        },
        unreadCount: 0
    },
    {
        id: 'c3',
        participant: freelancers[3],
        lastMessage: {
            content: "You: Here are the assets for the project.",
            timestamp: "2 days ago"
        },
        unreadCount: 0
    }
]

export const messages: Message[] = [
    { id: 'm1', sender: 'other', content: 'Hey, I saw your profile and I\'m really impressed with your work. I have a project in mind.', timestamp: '10:25 AM', avatar: 'profile-2' },
    { id: 'm2', sender: 'me', content: 'Hi Bob, thanks for reaching out! I\'d love to hear more about it.', timestamp: '10:26 AM', avatar: 'profile-me' },
    { id: 'm3', sender: 'other', content: 'We need to build a new dashboard for our analytics platform. It needs to be fast and responsive. Are you familiar with Chart.js?', timestamp: '10:28 AM', avatar: 'profile-2' },
    { id: 'm4', sender: 'me', content: 'Absolutely. I\'ve used Chart.js in several projects. I can also recommend using Recharts, which integrates nicely with React.', timestamp: '10:29 AM', avatar: 'profile-me' },
    { id: 'm5', sender: 'other', content: 'Great! Our budget is around $5k for the initial version.', timestamp: '10:29 AM', avatar: 'profile-2' },
    { id: 'm6', sender: 'other', content: 'Can you handle that?', timestamp: '10:29 AM', avatar: 'profile-2' },
    { id: 'm7', sender: 'me', content: 'Sure, I can get that done. Let\'s discuss the details.', timestamp: '10:30 AM', avatar: 'profile-me' },
];
