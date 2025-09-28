import React from "react";
import BlogItem from "./blogItem";

function blogs() {
  const dates = {
    "Exel-Mapper": new Date("2025-05-01").toLocaleDateString("en-GB"),
    "AWS-Migration": new Date("2025-03-22").toLocaleDateString("en-GB"),
    "AI-Experiment": new Date("2024-08-18").toLocaleDateString("en-GB"),
    "Azure-Cost-Management": new Date("2024-07-31").toLocaleDateString("en-GB"),
    "PHP-Tailwind-Git": new Date("2024-04-07").toLocaleDateString("en-GB"),
    "Terraform-Azure-Actions": new Date("2024-03-21").toLocaleDateString(
      "en-GB",
    ),
  };

  return (
    <>
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
      <BlogItem
        BlogPath="/blog/azure-cost-management"
        Date={dates["Azure-Cost-Management"]}
        ImageAlt="Azure Cost Management Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/azure.png"
        Summary="A description of how I keep my Azure bill low with multiple resources being used"
        Title="How I keep my Azure bill under $0.01"
      />
      <BlogItem
        BlogPath="/blog/php-tailwind-git"
        Date={dates["PHP-Tailwind-Git"]}
        ImageAlt="PHP, Tailwind, Git & GitHub Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/php-tailwind-git.png"
        Summary="A description of how I keep my Azure bill low with multiple resources being used"
        Title="What we did wrong in this project: PHP, Tailwind, Git & GitHub"
      />
      <BlogItem
        BlogPath="/blog/terraform-azure-actions"
        Date={dates["Terraform-Azure-Actions"]}
        ImageAlt="Terraform Azure Actions Cover"
        ImageUrl="https://lvm-p-site-assets.s3.af-south-1.amazonaws.com/terraform-azure-actions.png"
        Summary="A description of how I keep my Azure bill low with multiple resources being used"
        Title="My experience provisioning Azure resources using terraform within GitHub Actions"
      />
    </>
  );
}

export default blogs;
