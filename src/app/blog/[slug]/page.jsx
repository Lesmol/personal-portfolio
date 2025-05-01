import React from "react";
import MarkdownIt from "markdown-it";
import { getPostCollection } from "@/lib/posts";
import Navbar from "@/components/navbar";

const md = new MarkdownIt();

export async function generateStaticParams() {
  const posts = await getPostCollection();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug) {
  const posts = await getPostCollection();
  return posts.find((post) => post.slug === slug);
}

async function page({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = md.render(post.content);

  return (
    <div className="mx-auto max-w-3xl p-4 md:p-0 md:pb-4">
      <Navbar />
      <article className="mt-8">
        <img src={post.imgUrl} alt={post.alt} className="w-full" />
        <h1 className="mt-5 text-3xl md:text-4xl">{post.title}</h1>
        <p className="mt-1 text-custom-light-grey">{post.summary}</p>
        <hr className="mt-4 border-neutral-800" />
        <div
          className="post-content text-custom-light-grey"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}

export default page;
