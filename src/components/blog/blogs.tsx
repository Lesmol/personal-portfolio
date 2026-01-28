import React from "react";
import BlogItem from "./blogItem";
import { blogs } from "@/data/blogs";

function Blogs() {
  return (
    <>
      {blogs.map((blog) => (
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

export default Blogs;

