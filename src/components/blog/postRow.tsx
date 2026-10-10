import Link from "next/link";
import { Blog } from "@/data/blogs";
import { formatDate } from "@/lib/formatDate";

function PostRow({ post }: { post: Blog }) {
  return (
    <Link
      href={post.blogPath}
      className="group flex flex-col gap-1.5 border-b border-line py-5.5 md:flex-row md:flex-wrap md:items-baseline md:gap-x-8 md:gap-y-2 md:py-6.5"
    >
      <time
        dateTime={post.date}
        className="font-mono text-xs text-muted md:flex-[0_0_140px] md:text-[13px]"
      >
        {formatDate(post.date)}
      </time>
      <span className="flex flex-col gap-1 md:flex-[1_1_420px]">
        <span className="font-display text-[21px] leading-tight font-medium text-text transition-colors group-hover:text-accent md:text-2xl">
          {post.title}
        </span>
        <span className="text-[15px] text-muted md:text-base">{post.summary}</span>
      </span>
    </Link>
  );
}

export default PostRow;
