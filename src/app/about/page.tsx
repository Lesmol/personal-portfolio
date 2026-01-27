import Description from "@/components/about/description";
import Experience from "@/components/about/experience";
import Images from "@/components/about/images";
import ReachOut from "@/components/about/reachOut";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lesedi Molemi | About",
  description:
    "Welcome to my about page, where I'll give you a sneak peek into Lesedi Molemi, how to reach me and my professional work experience.",
};

function about() {
  return (
    <div className="container mx-auto max-w-2xl items-center p-4 md:p-0 md:pb-4">
      <Navbar />
      <Images />
      <Description />
      <ReachOut />
      <Experience />
    </div>
  );
}

export default about;
