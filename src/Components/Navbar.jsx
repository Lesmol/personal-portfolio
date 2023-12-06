import React, { useState } from "react";

import LMLogo from "../assets/SVG/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function onToggle() {
    setMobileNav(!mobileNav);
  }

  return (
    <div className="max-w-lg mx-auto">
      <nav className="flex justify-between items-center mt-4">
        <Link to={"/"}>
          <img src={LMLogo} alt="The letters LM written in a stylish font." />
        </Link>

        <button onClick={onToggle} className="text-xl text-primary md:hidden">
        Menu &#x2724;
        </button>

        <ul className="hidden text-lg md:flex">
          <li>
            <Link
              to={"/resume"}
              className="ml-8 text-primary hover:text-darker-primary transition 150 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/resume"}
              className="ml-8 text-primary hover:text-darker-primary transition 150 ease-in-out"
            >
              CloudResume
            </Link>
          </li>
        </ul>
      </nav>

      {mobileNav ? (
        <motion.div
          className="fixed right-5 mt-2 p-3 bg-black w-[150px] rounded-lg"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-lg">
            <Link to={"/resume"}>About</Link>
          </div>
          <div className="text-lg">
            <Link to={"/resume"}>CloudResume</Link>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}

export default Navbar;
