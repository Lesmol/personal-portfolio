import { useState } from "react";

import LMLogo from "/SVG/logo.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function onToggle() {
    setMobileNav(!mobileNav);
  }

  return (
    <div className="max-w-lg mx-auto">
      <nav className="flex justify-between items-center mt-4 bg-primary py-4 px-6 rounded-full">
        <Link to={"/"}>
          <img
            src="https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg"
            alt="The letters LM written in a stylish font."
            className="md: w-14"
          />
        </Link>

        <button onClick={onToggle} className="text-xl text-primary sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="white"
            className="bi bi-grid"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
          </svg>
        </button>

        <ul className="hidden text-lg sm:flex">
          <li>
            <Link
              to={"/about"}
              className="ml-8 text-primary font-medium hover:text-white transition 150 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/resume"}
              className="ml-8 text-primary font-medium hover:text-white transition 150 ease-in-out"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {mobileNav ? (
          <motion.div
            className="fixed right-5 mt-2 backdrop-blur-sm bg-black w-[250px] rounded-lg sm:hidden"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={"/"}>
              <div className="text-xl py-2 px-4 ">Home</div>
            </Link>

            <Link to={"/about"}>
              <div className="text-xl py-1 px-4 ">About</div>
            </Link>
            <Link to={"/resume"}>
              <div className="text-xl py-2 px-4 ">Resume</div>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
