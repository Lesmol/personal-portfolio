import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowLeftIcon } from "@/components/icons";
import { blogs } from "@/data/blogs";
import { formatDate } from "@/lib/formatDate";

type PostLayoutProps = {
  id: string;
  imgUrl: string;
  alt: string;
  title: string;
  summary: string;
  children: React.ReactNode;
};

function PostLayout({ id, imgUrl, alt, title, summary, children }: PostLayoutProps) {
  const posts = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
  const index = posts.findIndex((post) => post.id === id);
  const post = posts[index];
  // Next-oldest post; the oldest wraps around to the newest.
  const next = posts[(index + 1) % posts.length];

  return (
    <>
      <Navbar />
      <main>
        <article className="mx-auto max-w-article px-5 pt-10 pb-16 md:px-8 md:pt-18 md:pb-24">
          <header>
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] text-muted"
            >
              <ArrowLeftIcon />
              <span>All posts</span>
            </Link>
            {post ? (
              <div className="mt-4 mb-3.5 flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-xs text-muted md:mt-5 md:mb-4 md:text-[13px]">
                <span className="text-accent">{post.tag}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingTime} min read</span>
              </div>
            ) : null}
            <h1 className="mb-3.5 font-display text-4xl leading-[1.06] font-bold tracking-[-0.025em] md:mb-4 md:text-[54px]">
              {title}
            </h1>
            <p className="mb-7 text-lg leading-normal text-soft md:mb-8 md:text-[21px]">
              {summary}
            </p>
            <figure className="mb-10 md:mb-12">
              <Image
                src={imgUrl}
                alt={alt}
                width={1200}
                height={630}
                priority
                sizes="(max-width: 760px) 100vw, 696px"
                className="h-auto w-full rounded-[14px] bg-figure"
              />
            </figure>
          </header>

          <div className="post-content">{children}</div>

          {next && next.id !== id ? (
            <Link
              href={next.blogPath}
              className="group mt-10 flex flex-col gap-2 rounded-[14px] border border-line bg-card p-5.5 transition-colors hover:border-line-strong hover:text-text md:p-7"
            >
              <span className="font-mono text-xs text-accent">NEXT POST →</span>
              <span className="font-display text-[22px] leading-tight font-medium transition-colors group-hover:text-accent md:text-[26px]">
                {next.title}
              </span>
              <span className="text-[15px] text-muted">{next.summary}</span>
            </Link>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default PostLayout;
