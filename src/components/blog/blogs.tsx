import React from "react";
import BlogItem from "./blogItem";

function blogs() {
  return (
    <>
      <BlogItem
        ID="excel-mapper"
        BlogPath="/blog/excel-mapper"
        Date="May 1, 2025"
        ImageAlt="Java Excel Mapper Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/java-excel-mapper-cover.png"
        Summary="A quick walk through the logic that maps any excel file into objects"
        Title="Breakdown: Mapping any excel file into objects"
      />
      <BlogItem
        ID="aws-migration"
        BlogPath="/blog/aws-migration"
        Date="March 22, 2025"
        ImageAlt="AWS Migration Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/aws.png"
        Summary="Updating my site and migrating to Next.js and AWS"
        Title="Migrating over to Next.js, AWS and more..."
      />
      <BlogItem
        ID="ai-experiment"
        BlogPath="/blog/ai-experiment"
        Date="August 18, 2024"
        ImageAlt="Azure OpenAI Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/openai-next-dotnet.png"
        Summary="How my attempt at using an Open Source AI model went"
        Title="I tried an Open Source AI model for Image Recognition"
      />
      <BlogItem
        ID="azure"
        BlogPath="/blog/azure-cost-management"
        Date="July 31, 2024"
        ImageAlt="Azure Cost Management Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/azure.png"
        Summary="A description of how I keep my Azure bill low with multiple resources being used"
        Title="How I keep my Azure bill under $0.01"
      />
      <BlogItem
        ID="php"
        BlogPath="/blog/php-tailwind-git"
        Date="April 7, 2024"
        ImageAlt="PHP, Tailwind, Git & GitHub Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/php-tailwind-git.png"
        Summary="A description of how I keep my Azure bill low with multiple resources being used"
        Title="What we did wrong in this project: PHP, Tailwind, Git & GitHub"
      />
    </>
  );
}

export default blogs;
