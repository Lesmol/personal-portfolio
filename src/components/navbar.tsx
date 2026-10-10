"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type NavLink = { label: string; href: string };

function getLinks(isHome: boolean): NavLink[] {
  return [
    { label: "/writing", href: isHome ? "#writing" : "/blog" },
    { label: "/work", href: isHome ? "#work" : "/#work" },
    { label: "/career", href: isHome ? "#career" : "/#career" },
  ];
}

function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const links = getLinks(pathname === "/");
  const mobileLinks = [...links, { label: "/blog", href: "/blog" }];

  return (
    <header className="border-b border-line">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-5"
      >
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 font-mono text-[15px] font-medium text-text"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex size-9 items-center justify-center rounded-lg border-[1.5px] border-accent text-accent">
            lm
          </span>
          <span>lvmolemi</span>
        </Link>

        <ul className="hidden items-center gap-x-7 font-mono text-sm md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="inline-block py-3">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-line-strong text-text md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            id="mobile-menu"
            className="border-t border-line font-mono text-sm md:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            {mobileLinks.map((link) => (
              <li key={link.label} className="border-b border-line last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-13 items-center px-5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
