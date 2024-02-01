import TopSection from "../Components/About/TopSection";
import Navbar from "../Components/Navbar";
import Description from "../Components/About/Description";
import RandomLinks from "../Components/About/RandomRecommendations";
import ReachOut from "../Components/About/ReachOut";

import { motion } from "framer-motion";

function AboutPage() {
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
        <RandomLinks />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ReachOut />
      </motion.div>
    </div>
  );
}

export default AboutPage;
