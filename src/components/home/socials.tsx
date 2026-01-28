"use client";
import { socialLinks } from "@/data/socials";

function Socials() {
  return (
    <div className="mb-12 mt-8 flex flex-wrap gap-3 md:justify-center md:gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center space-x-2 rounded-full border border-darker-primary/40 bg-secondary/20 px-4 py-2 text-sm font-medium text-custom-light-grey transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-secondary/40 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95"
        >
          <div className="text-primary transition-colors duration-300 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className={link.iconClass}
              viewBox="0 0 16 16"
            >
              <path d={link.iconPath} />
            </svg>
          </div>
          <span>{link.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-arrow-up-right opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default Socials;
