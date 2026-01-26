import React from "react";
import BlogItem from "../blog/blogItem";

function articles() {
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
        Date={"01/05/2025"}
        ImageAlt="Java Excel Mapper Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/java-excel-mapper-cover.png"
        Summary="A quick walk through the logic that maps any excel file into objects"
        Title="Breakdown: Mapping any excel file into objects"
      />
      <BlogItem
        BlogPath="/blog/aws-migration"
        Date={"22/03/2025"}
        ImageAlt="AWS Migration Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/aws.png"
        Summary="Updating my site and migrating to Next.js and AWS"
        Title="Migrating over to Next.js, AWS and more..."
      />
      <BlogItem
        BlogPath="/blog/ai-experiment"
        Date={"18/08/2024"}
        ImageAlt="Azure OpenAI Cover"
        ImageUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/openai-next-dotnet.png"
        Summary="How my attempt at using an Open Source AI model went"
        Title="I tried an Open Source AI model for Image Recognition"
      />
    </>
  );
}

export default articles;
