import Navbar from "../Components/Navbar";
import ResumeHeader from "../Components/Resume/ResumeHeader";
import Project from "../Components/Resume/Project";

import { motion } from "framer-motion";
import Certifications from "../Components/Resume/Certifications";
import { useEffect } from "react";
import Education from "../Components/Resume/Education";

function CloudResume() {
  useEffect(() => {
    document.title = "Lesedi Molemi | Resume";

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
        <ResumeHeader />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Project />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Education />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Certifications />
      </motion.div>
    </div>
  );
}

export default CloudResume;
