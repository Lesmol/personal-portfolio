export interface Blog {
  id: string;
  blogPath: string;
  date: string; // ISO yyyy-mm-dd
  tag: string;
  readingTime: number; // minutes
  imageAlt: string;
  imageUrl: string;
  summary: string;
  title: string;
  pinned: boolean;
}

export const blogs: Blog[] = [
  {
    id: "email-api",
    tag: "JAVA · .NET · AWS",
    readingTime: 11,
    blogPath: "/blog/email-api",
    date: "2026-10-10",
    imageAlt:
      "Java, .NET, Python, Rust, Terraform and AWS logos on a coloured gradient",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/email-api-cover.png",
    summary:
      "How my twice-weekly market update email went from one .NET Lambda to a Spring Boot Email API on AWS, and what I'd write differently now",
    title: "From One Lambda to Four: How My Market Emails Grew Up",
    pinned: true,
  },
  {
    id: "excel-mapper",
    tag: "JAVA",
    readingTime: 4,
    blogPath: "/blog/excel-mapper",
    date: "2025-05-01",
    imageAlt: "Java Excel Mapper Cover",
    imageUrl:
      "https://lvmp-v2.s3.af-south-1.amazonaws.com/java-excel-mapper-cover.png",
    summary:
      "A quick walk through the logic that maps any excel file into objects",
    title: "Breakdown: Mapping any excel file into objects",
    pinned: true,
  },
  {
    id: "aws-migration",
    tag: "NEXT.JS · AWS",
    readingTime: 4,
    blogPath: "/blog/aws-migration",
    date: "2025-03-22",
    imageAlt: "AWS Migration Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/aws.png",
    summary: "Updating my site and migrating to Next.js and AWS",
    title: "Migrating over to Next.js, AWS and more...",
    pinned: true,
  },
  {
    id: "ai-experiment",
    tag: "AI · PYTHON",
    readingTime: 3,
    blogPath: "/blog/ai-experiment",
    date: "2024-08-18",
    imageAlt: "Azure OpenAI Cover",
    imageUrl:
      "https://lvmp-v2.s3.af-south-1.amazonaws.com/openai-next-dotnet.png",
    summary: "How my attempt at using an Open Source AI model went",
    title: "I tried an Open Source AI model for Image Recognition",
    pinned: true,
  },
  {
    id: "azure",
    tag: "AZURE · COST",
    readingTime: 5,
    blogPath: "/blog/azure-cost-management",
    date: "2024-07-31",
    imageAlt: "Azure Cost Management Cover",
    imageUrl: "https://lvmp-v2.s3.af-south-1.amazonaws.com/azure.png",
    summary:
      "A description of how I keep my Azure bill low with multiple resources being used",
    title: "How I keep my Azure bill under $0.01",
    pinned: false,
  },
  {
    id: "php",
    tag: "PHP · TEAMWORK",
    readingTime: 4,
    blogPath: "/blog/php-tailwind-git",
    date: "2024-04-07",
    imageAlt: "PHP, Tailwind, Git & GitHub Cover",
    imageUrl:
      "https://lvmp-v2.s3.af-south-1.amazonaws.com/php-tailwind-git.png",
    summary:
      "We took on a client project and made some mistakes along the way. Here's what we learned.",
    title: "What we did wrong in this project: PHP, Tailwind, Git & GitHub",
    pinned: false,
  },
];

