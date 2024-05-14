import { useState } from "react";

import LMLogo from "../../public/SVG/logo.svg";
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
            src={LMLogo}
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
            className="fixed right-5 mt-2 bg-black w-[150px] rounded-lg sm:hidden"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-lg  pl-5 pt-2 pb-2">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="text-lg  pl-5 pb-2">
              <Link to={"/about"}>About</Link>
            </div>
            <div className="text-lg  pl-5 pb-2">
              <Link to={"/resume"}>Resume</Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
