import React from "react";

interface CustomSocialLinkProps {
  title: string;
  href: string;
  className: string;
  d: string;
}

function CustomSocialLink(props: CustomSocialLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center rounded-xl border border-darker-primary/40 bg-secondary/30 p-4 transition-all duration-300 ease-out hover:scale-110 hover:border-white/40 hover:bg-secondary/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] active:scale-95"
      aria-label={props.title}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className={`${props.className} relative z-10 text-primary transition-colors duration-300 group-hover:text-white`}
        viewBox="0 0 16 16"
      >
        <path d={props.d} />
      </svg>
    </a>
  );
}

export default CustomSocialLink;
