import Link from "next/link";
import PostRow from "@/components/blog/postRow";
import { Section, SectionHeader } from "@/components/section";
import { blogs } from "@/data/blogs";

function Writing() {
  const pinned = blogs
    .filter((blog) => blog.pinned)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section id="writing" className="flex flex-col gap-2 md:gap-6">
      <SectionHeader title="Writing">
        <Link href="/blog" className="py-3 font-mono text-sm">
          All posts →
        </Link>
      </SectionHeader>
      <div className="flex flex-col">
        {pinned.map((post) => (
          <PostRow key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}

export default Writing;
