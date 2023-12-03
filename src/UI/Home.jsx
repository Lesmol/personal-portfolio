import React from "react";

import Navbar from "../Components/Navbar.jsx";
import UserSummary from "../Components/UserSummary.jsx";
import About from "../Components/About.jsx";
import EmailMe from "../Components/EmailMe.jsx"
import ProjectsSummary from "../Components/ProjectsSummary.jsx"

function Home() {
  return (
    <div className="container mx-auto max-w-lg items-center">
      <Navbar />
      <UserSummary />
      <About />
      <EmailMe />
      <ProjectsSummary />
    </div>
  );
}

export default Home;
