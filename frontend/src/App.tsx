import { About } from "./sections/About";
import { Stack } from "./sections/Stack";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./sections/Footer";
import ShowCase from "./sections/ShowCase";
import { useMediaQuery } from "react-responsive";
import { ScrollTopBtn } from "./components/ScrollTopBtn";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { CanvasLoader } from "./components/CanvasLoader";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 468 });
  // Track loading state using useProgress
  const { active } = useProgress();
  // Conditionally render the loader based on `active`
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        setIsLoading(false); // Stop showing loader once loading is complete
      }, 500);
    }
  }, [active]);
  return (
    <>
      {isLoading ? (
        <CanvasLoader />
      ) : (
        <main className="">
          <ScrollTopBtn />

          <div className="sm:max-w-7xl sm:mx-auto">
            <Hero />
            {/* <Navbar/> */}
            <About isMobile={isMobile} />
            <Stack />
            <Projects isMobile={isMobile} />
            {/* <ProjectsList/> */}
            <ShowCase />
          </div>

          <ContactForm />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
