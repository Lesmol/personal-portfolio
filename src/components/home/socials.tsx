"use client";
import React from "react";

function socials() {
  return (
    <>
      <div className="mb-12 mt-6 flex items-center space-x-4 text-primary md:justify-center md:space-x-8">
        <div className="150 flex items-center transition ease-out md:hover:text-darker-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <a
            href="https://www.linkedin.com/in/lvmolemi/"
            target="_blank"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="150 flex items-center transition ease-out md:hover:text-darker-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <a href="https://github.com/Lesmol" target="_blank" className="ml-2">
            GitHub
          </a>
        </div>
        <div className="150 flex items-center transition ease-out md:hover:text-darker-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <a href="mailto:molemilesedi@gmail.com" className="ml-2">
            Email
          </a>
        </div>
      </div>
    </>
  );
}

export default socials;
