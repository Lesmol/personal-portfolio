"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  backButton?: boolean;
  backPath?: string;
}

function Navbar(props: NavbarProps) {
  const [mobileNav, setMobileNav] = useState(false);
  const [moreNav, setMoreNav] = useState(false);

  function onToggle() {
    setMobileNav(!mobileNav);
  }

  function onToggleMore() {
    setMoreNav(!moreNav);
  }

  return (
    <div className="relative z-50 flex max-w-xl sm:mx-auto sm:block">
      <nav className="border border-white/10 bg-secondary/40 backdrop-blur-md mt-4 hidden items-center justify-between rounded-3xl px-6 py-4 sm:flex">
        <Link href="/">
          <Image
            src="https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg"
            alt="The letters LM written in a stylish font."
            width={56}
            height={56}
            className="md:w-14 w-10 h-auto"
          />
        </Link>

        <ul className="hidden text-lg sm:flex">
          <li>
            <Link
              href="/about"
              className="150 text-custom-light-grey ml-8 font-medium transition ease-in-out hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="150 text-custom-light-grey ml-8 font-medium transition ease-in-out hover:text-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="150 text-custom-light-grey ml-8 font-medium transition ease-in-out hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li className="text-darker-primary ml-4">|</li>
          <li>
            <button
              onClick={onToggleMore}
              className="text-custom-light-grey ml-4 cursor-pointer flex items-center space-x-1 font-medium transition duration-150 ease-in-out hover:text-white"
            >
              Snapshots{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-arrow-down-short ${moreNav ? "transition rotate-180 duration-150" : "transition rotate-0 duration-150"}`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      {props.backButton ? (
        <Link
          href={props.backPath || "/"}
          className="border border-white/10 bg-secondary/40 backdrop-blur-md text-white mt-4 flex w-fit items-center rounded-xl px-4 py-2 text-lg sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>{" "}
          Back
        </Link>
      ) : null}

      <button
        onClick={onToggle}
        className="border border-white/10 bg-secondary/40 backdrop-blur-md ml-auto text-white mt-4 flex w-fit items-center rounded-xl px-4 py-2 text-lg sm:hidden"
      >
        Menu{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-arrow-down-short ${mobileNav ? "transition rotate-180 duration-150" : "transition rotate-0 duration-150"}`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
          />
        </svg>
      </button>

      {/* More Nav */}
      <AnimatePresence>
        {moreNav ? (
          <motion.div
            className="fixed left-0 hidden h-[28%] w-screen items-center justify-center sm:flex"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border border-white/10 bg-secondary/80 mx-auto flex h-60 w-fit max-w-2/4 justify-center space-x-2 rounded-xl p-4 text-lg backdrop-blur-xl shadow-2xl">
              <div className="group relative aspect-square overflow-clip rounded-xl">
                <Image
                  src="https://cloudresumeresources.blob.core.windows.net/resumeimages/random-gun.jpeg"
                  alt="Lesedi Molemi smiling with a bag of fruit"
                  fill
                  className="object-cover brightness-50 transition duration-300 ease-out group-hover:brightness-75 md:hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 z-50 text-sm font-light group-hover:underline">
                  Window shopping for firearms
                </div>
              </div>
              <div className="group relative hidden aspect-square overflow-clip rounded-xl md:block">
                <Image
                  src="https://cloudresumeresources.blob.core.windows.net/resumeimages/melrose-lunch.jpeg"
                  alt="Lunch at Melrose Arch"
                  fill
                  className="object-cover brightness-50 transition duration-300 ease-out group-hover:brightness-75 md:hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 z-50 text-sm font-light group-hover:underline">
                  Lunch at Melrose Arch
                </div>
              </div>
              <div className="group relative aspect-square overflow-clip rounded-xl">
                <Image
                  src="https://cloudresumeresources.blob.core.windows.net/resumeimages/picking-fruit.jpeg"
                  alt="Lesedi Molemi smiling with a bag of fruit"
                  fill
                  className="object-cover brightness-50 transition duration-300 ease-out group-hover:brightness-75 md:hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 z-50 text-sm font-light group-hover:underline">
                  Holidays in Giyani
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileNav ? (
          <motion.div
            className="border border-white/10 bg-secondary/90 fixed right-8 mt-20 w-4/5 rounded-xl text-lg backdrop-blur-xl shadow-2xl sm:hidden"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="bg-white/5 m-2 flex items-center space-x-2 rounded-xl px-1 py-2"
            >
              <div className="bg-secondary/50 text-white rounded-xl p-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </div>
              <div className="font-light">
                <h4 className="text-sm font-bold text-white">Home</h4>
                <p className="text-custom-light-grey text-xs">Welcome to my site!!</p>
              </div>
            </Link>
            <Link
              href="/about"
              className="bg-white/5 m-2 flex items-center space-x-2 rounded-xl px-1 py-2"
            >
              <div className="bg-secondary/50 text-white rounded-xl p-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
              <div className="font-light">
                <h4 className="text-sm font-bold text-white">About</h4>
                <p className="text-custom-light-grey text-xs">A little more about me</p>
              </div>
            </Link>
            <Link
              href="/blog"
              className="bg-white/5 m-2 flex items-center space-x-2 rounded-xl px-1 py-2"
            >
              <div className="bg-secondary/50 text-white rounded-xl p-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-journals"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                </svg>
              </div>
              <div className="font-light">
                <h4 className="text-sm font-bold text-white">Blog</h4>
                <p className="text-custom-light-grey text-xs">
                  Interests, experiments and thoughts
                </p>
              </div>
            </Link>
            <Link
              href="/projects"
              className="bg-white/5 m-2 flex items-center space-x-2 rounded-xl px-1 py-2"
            >
              <div className="bg-secondary/50 text-white rounded-xl p-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cone-striped"
                  viewBox="0 0 16 16"
                >
                  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                </svg>
              </div>
              <div className="font-light">
                <h4 className="text-sm font-bold text-white">Projects</h4>
                <p className="text-custom-light-grey text-xs">Things I&#39;ve built</p>
              </div>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
