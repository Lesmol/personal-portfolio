import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const stack = ["Java · Spring Boot", "C# · .NET Core", "AWS · Terraform", "Python", "Rust", "Docker", "React · Next.js · Vite"];

function Hero() {
  return (
    <section className="mx-auto flex max-w-content flex-col gap-6 px-5 py-14 md:gap-8 md:px-8 md:pt-28 md:pb-24">
      <a
        href="#career"
        className="inline-flex items-start gap-2.5 self-start rounded-[14px] border border-line bg-card px-3.5 py-2.5 font-mono text-xs leading-normal text-body md:items-center md:rounded-full md:py-2 md:text-[13px]"
      >
        <span className="mt-1.25 size-2 shrink-0 rounded-full bg-accent md:mt-0" aria-hidden="true" />
        <span>Software Engineer: Back-End · working across the stack on the BB App team at Capitec</span>
      </a>

      <h1 className="max-w-[14ch] font-display text-[46px] leading-[1.02] font-bold tracking-[-0.03em] md:text-[clamp(44px,7vw,92px)]">
        I build the systems behind the screen.
      </h1>

      <p className="max-w-[60ch] text-[17px] text-soft md:text-xl">
        I&apos;m Lesedi Molemi, a software engineer living in Pretoria and working in Sandton.
        I build across the back end and front end of Capitec&apos;s Business Banking app, and write about what I build on the side.
      </p>

      <div className="mt-2 flex flex-col gap-3 md:flex-row md:flex-wrap">
        <a
          href="#work"
          className="inline-flex min-h-12.5 items-center justify-center gap-2 rounded-[10px] bg-accent-button px-5.5 font-medium text-on-accent hover:bg-accent-button-hover hover:text-on-accent md:min-h-12"
        >
          See my work <ArrowRightIcon />
        </a>
        <Link
          href="/blog"
          className="inline-flex min-h-12.5 items-center justify-center rounded-[10px] border border-line-strong px-5.5 hover:border-accent md:min-h-12"
        >
          Read the blog
        </Link>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-muted">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
