import About from "@/components/home/about";
import Articles from "@/components/home/articles";
import Socials from "@/components/home/socials";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl items-center p-4 md:p-0 md:pb-4">
      <Navbar />
      <About />
      <Socials />
      <Articles />
    </div>
  );
}
