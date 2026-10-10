import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PostRow from "@/components/blog/postRow";
import { Blog, blogs } from "@/data/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesedi Molemi | Blog",
  description: "Breakdowns, experiments and lessons from the things I build.",
};

function groupByYear(posts: Blog[]): [string, Blog[]][] {
  const groups = new Map<string, Blog[]>();
  for (const post of [...posts].sort((a, b) => b.date.localeCompare(a.date))) {
    const year = post.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()];
}

function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 border-b border-line pb-8 md:gap-5">
          <span className="font-mono text-[13px] text-muted">
            /writing · {blogs.length} posts
          </span>
          <h1 className="font-display text-[44px] leading-[1.02] font-bold tracking-[-0.03em] md:text-7xl">
            Writing
          </h1>
          <p className="max-w-[56ch] text-[17px] text-soft md:text-xl">
            Breakdowns, experiments and lessons from the things I build.
          </p>
        </div>

        {groupByYear(blogs).map(([year, posts]) => (
          <div key={year} className="flex flex-col pt-8 md:flex-row md:flex-wrap md:gap-x-12 md:gap-y-2">
            <h2 className="font-mono text-sm font-medium text-accent md:mt-6.5 md:flex-[0_0_120px]">
              {year}
            </h2>
            <div className="flex flex-col md:flex-[1_1_600px]">
              {posts.map((post) => (
                <PostRow key={post.id} post={post} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default BlogIndex;
