import TopSection from "../Components/About/TopSection";
import Navbar from "../Components/Navbar";
import Description from "../Components/About/Description";
import RandomLinks from "../Components/About/RandomLinks";

function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl items-center">
      <Navbar />
      <TopSection />
      <Description />
      <RandomLinks />
    </div>
  );
}

export default AboutPage;
