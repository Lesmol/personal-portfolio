import React from "react";
import BlogItem from "../blog/blogItem";

function articles() {
  const dates = {
    "Exel-Mapper": new Date("2025-05-01").toLocaleDateString("en-GB"),
    "AWS-Migration": new Date("2025-03-22").toLocaleDateString("en-GB"),
    "AI-Experiment": new Date("2024-08-18").toLocaleDateString("en-GB"),
  };

  return (
    <>
      <h1 className="mb-6 mt-14 text-4xl font-bold">
        Pinned{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent">
          Posts
        </span>
      </h1>
      <BlogItem
        BlogPath="/blog/excel-mapper"
        Date={dates["Exel-Mapper"]}
        ImageAlt="Java Excel Mapper Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/blog/java-excel-mapper-cover.png"
        Summary="A quick walk through the logic that maps any excel file into objects"
        Title="Breakdown: Mapping any excel file into objects"
      />
      <BlogItem
        BlogPath="/blog/aws-migration"
        Date={dates["AWS-Migration"]}
        ImageAlt="AWS Migration Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/aws.png"
        Summary="Updating my site and migrating to Next.js and AWS"
        Title="Migrating over to Next.js, AWS and more..."
      />
      <BlogItem
        BlogPath="/blog/ai-experiment"
        Date={dates["AI-Experiment"]}
        ImageAlt="Azure OpenAI Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/openai-next-dotnet.png"
        Summary="How my attempt at using an Open Source AI model went"
        Title="I tried an Open Source AI model for Image Recognition"
      />
    </>
  );
}

export default articles;
