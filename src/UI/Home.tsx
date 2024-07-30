import { motion } from "framer-motion";

import Navbar from "../Components/Navbar.jsx";
import About from "../Components/Home/About.jsx";
import ContactInfo from "../Components/Home/ContactInfo.js";
import ProjectsSummary from "../Components/Home/ProjectsSummary.jsx";
import Articles from "../Components/Home/Articles.js";

function Home() {
  return (
    <div className="container mx-auto max-w-lg items-center">
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ContactInfo />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProjectsSummary />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Articles />
      </motion.div>
    </div>
  );
}

export default Home;
