import Career from "@/components/home/career";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";
import Writing from "@/components/home/writing";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Work />
        <Writing />
        <Career />
      </main>
      <Footer />
    </>
  );
}
