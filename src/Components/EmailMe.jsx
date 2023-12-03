import React from "react";

import arrow from "../assets/SVG/Arrow.svg";

function EmailMe() {
  return (
    <div className="flex items-center justify-center mt-8">
      <img src={arrow} alt="Arrow pointing to the 1 o'clock direction" />
      <a href="" target="_blank" className="ml-4 text-primary hover:text-darker-primary transition 150 ease-out">Email me</a>
    </div>
  );
}

export default EmailMe;
