import React from "react";

function about() {
  return (
    <>
      <div className="my-9 w-fit rounded-full bg-gradient-to-r from-blue-500 to-transparent p-2 font-light md:mt-4 md:hidden">
        <div className="rounded-full bg-gradient-to-r from-blue-500 to-transparent px-4 py-2">
          Specialist at{" "}
          <a href="/about/#experience" className="underline decoration-sky-50">
            Capitec <span className="hidden sm:inline">Business</span> Bank
          </a>
        </div>
      </div>
      <h1 className="mt-6 text-6xl font-bold md:mt-12">I&#39;m Lesedi</h1>
      <p className="mt-2 text-left text-custom-light-grey">
        Developer passionate about building and managing cloud applications,
        solving complex problems, and deepening existing skills. I document my
        journey and grow my expertise through personal projects and creative
        exploration.
      </p>
      <div className="md:flex md:space-x-6">
        <a href="/about" className="group">
          <div className="mt-4 w-fit rounded border border-blue-50 px-4 py-2 font-light transition duration-300 ease-in-out group-hover:border-blue-100 group-hover:text-blue-100">
            More about me
          </div>
        </a>
        <div className="mt-4 hidden w-fit rounded-full bg-gradient-to-r from-blue-500 px-1 py-1 font-light md:block">
          <div className="rounded-full bg-gradient-to-r from-blue-500 px-2 py-1">
            Driving operational excellence at{" "}
            <a
              href="/about/#experience"
              className="underline decoration-sky-50"
            >
              Capitec Business Bank
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
