import React from "react";
import BlogItem from "../blog/blogItem";
import { blogs } from "@/data/blogs";

function Articles() {
  const pinnedBlogs = blogs.filter((blog) => blog.pinned);

  return (
    <>
      <h1 className="mb-6 mt-14 text-4xl font-bold">
        Pinned{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent">
          Posts
        </span>
      </h1>
      {pinnedBlogs.map((blog) => (
        <BlogItem
          key={blog.id}
          ID={blog.id}
          BlogPath={blog.blogPath}
          Date={blog.date}
          ImageAlt={blog.imageAlt}
          ImageUrl={blog.imageUrl}
          Summary={blog.summary}
          Title={blog.title}
        />
      ))}
    </>
  );
}

export default Articles;

