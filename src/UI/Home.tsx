import { motion } from "framer-motion";

import Navbar from "../Components/Navbar.jsx";
import UserSummary from "../Components/Home/UserSummary.jsx";
import About from "../Components/Home/About.jsx";
import EmailMe from "../Components/Home/EmailMe.jsx";
import ProjectsSummary from "../Components/Home/ProjectsSummary.jsx";

function Home() {
  return (
    <div className="container mx-auto max-w-lg items-center">
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <UserSummary />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <EmailMe />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ProjectsSummary />
      </motion.div>
    </div>
  );
}

export default Home;
