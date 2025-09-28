import React from "react";

function heading() {
  return (
    <>
      <h1 className="mb-2 mt-14 text-5xl font-bold">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent">
          Posts
        </span>
      </h1>
      <div className="mb-12 text-primary">
        Topics I&apos;m interested in with a dash of experimentation and
        self-reflection sprinkled into the mix.
      </div>
    </>
  );
}

export default heading;
