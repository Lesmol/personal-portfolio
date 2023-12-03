import React, { useState } from "react";

import LMLogo from "../assets/SVG/logo.svg";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function onToggle() {
    setMobileNav(!mobileNav);
  }

  return (
    <>
      <nav className="flex justify-between items-center mt-4">
        <img src={LMLogo} alt="The letters LM written in a stylish font." />

        <button onClick={onToggle} className="text-2xl md:hidden">
          &#9960; Menu
        </button>

        <ul className="hidden text-lg md:flex">
          <li>
            <a
              href=""
              className="text-primary underline hover:text-darker-primary transition 150 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="ml-8 text-primary underline hover:text-darker-primary transition 150 ease-in-out"
            >
              CloudResume
            </a>
          </li>
        </ul>
      </nav>

      {mobileNav ? (
        <div className="fixed right-0 mt-2 p-3 bg-black w-[150px] rounded-lg">
          <div className="text-lg mb-2">
            <a href="#">Home</a>
          </div>
          <div className="text-lg">
            <a href="#">CloudResume</a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
