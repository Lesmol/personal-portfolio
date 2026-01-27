import Blogs from "@/components/blog/blogs";
import Heading from "@/components/blog/heading";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lesedi Molemi | Blog",
  description:
    "Welcome to my blog page, where you'll get slight peek into what I've been doing.",
};

function blog() {
  return (
    <div className="container mx-auto max-w-2xl items-center p-4 md:p-0">
      <Navbar />
      <Heading />
      <Blogs />
    </div>
  );
}

export default blog;
