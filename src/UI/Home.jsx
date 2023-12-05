import React from "react";

import { motion } from "framer-motion";

import Navbar from "../Components/Navbar.jsx";
import UserSummary from "../Components/UserSummary.jsx";
import About from "../Components/About.jsx";
import EmailMe from "../Components/EmailMe.jsx";
import ProjectsSummary from "../Components/ProjectsSummary.jsx";

function Home() {
  return (
    <div className="container mx-auto max-w-lg items-center">
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6}}
      >
        <UserSummary />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: .1  }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: .2 }}
      >
        <EmailMe />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: .3 }}
      >
        <ProjectsSummary/>
      </motion.div>
    </div>
  );
}

export default Home;
