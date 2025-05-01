import React from "react";
import { getPinnedPosts } from "@/lib/posts";

function articles() {
  const posts = getPinnedPosts();
  return (
    <>
      <h1 className="mb-6 mt-14 text-4xl font-bold">
        Pinned{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent">
          Posts
        </span>
      </h1>
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
    </>
  );
}

export default articles;
