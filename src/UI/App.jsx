import React from "react";

import UserSummary from "./UserSummary";
import About from "./About";
import EmailMe from "./EmailMe";
import ProjectsSummary from "./ProjectsSummary";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <>
      <div className='container mx-auto max-w-lg items-center'>
        <Navbar />
        <UserSummary />
        <About />
        <EmailMe />
        <ProjectsSummary />
      </div>
    </>
  );
}

export default App;
