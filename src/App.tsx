import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Story from "./components/Story";
import UseCases from "./components/UseCases";
import TechHighlights from "./components/TechHighlights";
import DemoSection from "./components/DemoSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Story />
        <UseCases />
        <TechHighlights />
        <DemoSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
