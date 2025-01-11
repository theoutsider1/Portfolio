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
import { useState } from "react";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 468 });
  // Track loading state using useProgress
  const { active } = useProgress();
  // Conditionally render the loader based on `active`
  const [isLoading, setIsLoading] = useState(true);

 
  return (
    <>
      
        <main className="">
          <ScrollTopBtn />

          <div className="sm:max-w-7xl sm:mx-auto">
            <Hero />
            {/* <Navbar/> */}
            <About isMobile={isMobile} />
            <Projects isMobile={isMobile} />
            {/* <ProjectsList/> */}
            <ShowCase />
            <Stack />
          </div>

          <ContactForm />
          <Footer />
        </main>
      
    </>
  );
}

export default App;
