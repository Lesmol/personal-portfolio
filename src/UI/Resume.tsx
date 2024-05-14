import Navbar from "../Components/Navbar";
import ResumeHeader from "../Components/Resume/ResumeHeader";
import Project from "../Components/Resume/Project";
import Education from "../Components/Resume/Education";

import { motion } from "framer-motion";
import Certifications from "../Components/Resume/Certifications";

function CloudResume() {
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
        <Education
          title="CTU Training Solutions - Pretoria"
          duration="2022-Present"
          description="I'm in my final year, specialising in Big Data Analytics 
          to earn my Information Technology: Database Development qualification."
        />
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
