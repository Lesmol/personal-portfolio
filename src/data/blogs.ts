export interface Blog {
  id: string;
  blogPath: string;
  date: string;
  imageAlt: string;
  imageUrl: string;
  summary: string;
  title: string;
  pinned: boolean;
}

export const blogs: Blog[] = [
  {
    id: "excel-mapper",
    blogPath: "/blog/excel-mapper",
    date: "May 1, 2025",
    imageAlt: "Java Excel Mapper Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/java-excel-mapper-cover.png",
    summary: "A quick walk through the logic that maps any excel file into objects",
    title: "Breakdown: Mapping any excel file into objects",
    pinned: true,
  },
  {
    id: "aws-migration",
    blogPath: "/blog/aws-migration",
    date: "March 22, 2025",
    imageAlt: "AWS Migration Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/aws.png",
    summary: "Updating my site and migrating to Next.js and AWS",
    title: "Migrating over to Next.js, AWS and more...",
    pinned: true,
  },
  {
    id: "ai-experiment",
    blogPath: "/blog/ai-experiment",
    date: "August 18, 2024",
    imageAlt: "Azure OpenAI Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/openai-next-dotnet.png",
    summary: "How my attempt at using an Open Source AI model went",
    title: "I tried an Open Source AI model for Image Recognition",
    pinned: true,
  },
  {
    id: "azure",
    blogPath: "/blog/azure-cost-management",
    date: "July 31, 2024",
    imageAlt: "Azure Cost Management Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/azure.png",
    summary: "A description of how I keep my Azure bill low with multiple resources being used",
    title: "How I keep my Azure bill under $0.01",
    pinned: false,
  },
  {
    id: "php",
    blogPath: "/blog/php-tailwind-git",
    date: "April 7, 2024",
    imageAlt: "PHP, Tailwind, Git & GitHub Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/php-tailwind-git.png",
    summary: "A description of how I keep my Azure bill low with multiple resources being used",
    title: "What we did wrong in this project: PHP, Tailwind, Git & GitHub",
    pinned: false,
  },
];

