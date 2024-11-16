import TopSection from "../Components/About/TopSection";
import Navbar from "../Components/Navbar";
import Description from "../Components/About/Description";
import ReachOut from "../Components/About/ReachOut";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Experience from "../Components/About/Experience";

function About() {
  useEffect(() => {
    document.title = "Lesedi Molemi | About";

    return () => {
      document.title = "Lesedi Molemi";
    };
  }, []);

  return (
    <div className="container mx-auto max-w-2xl items-center">
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <TopSection />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Description />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ReachOut />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Experience />
      </motion.div>
    </div>
  );
}

export default About;
