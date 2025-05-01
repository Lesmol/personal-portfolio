import Navbar from "@/components/navbar";
import React from "react";
import { getAllPosts } from "@/lib/posts";

function blogPosts() {
  const posts = getAllPosts();
  return (
    <div className="container mx-auto max-w-2xl items-center p-4 md:p-0">
      <Navbar />
      <h1 className="mb-2 mt-14 text-5xl font-bold">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent">
          Posts
        </span>
      </h1>
      <div className="mb-12 text-primary">
        Topics I'm interested in with a dash of experimentation and
        self-reflection sprinkled into the mix.
      </div>
      {posts.map((post) => (
        <a href={`/blog/${post.slug}`} key={post.slug} className="group">
          <div className="mb-12 w-fit justify-between sm:mx-auto md:flex md:flex-row-reverse">
            <div className="w-full max-w-lg overflow-clip rounded md:ml-2 md:max-w-40">
              <img
                src={post.imgUrl}
                alt=""
                className="mb-2 h-full w-full object-cover transition duration-300 ease-in-out md:mb-0 md:group-hover:scale-105"
              />
            </div>
            <div className="md:w-[500px]">
              <h4 className="mb-1 text-sm text-custom-light-grey">
                {post.date}
              </h4>
              <h2 className="text-xl">{post.title}</h2>
              <h4 className="text-sm text-custom-light-grey">{post.summary}</h4>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default blogPosts;
