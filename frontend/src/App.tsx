import { About } from "./sections/About"
import { Stack } from "./sections/Stack"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { ContactForm } from "./sections/ContactForm"
import { Footer } from "./sections/Footer"
import ShowCase from "./sections/ShowCase"
import { useMediaQuery } from "react-responsive"
import { ScrollTopBtn } from "./components/ScrollTopBtn"
import { Suspense } from "react"
import CanvasLoader from "./components/CanvasLoader"

function App() {
 const isMobile = useMediaQuery({maxWidth:368})

  return (
    <>
      <Suspense fallback={<CanvasLoader/>}>
        <main className="">
        <ScrollTopBtn/>

          <div className="sm:max-w-7xl sm:mx-auto">
            <Hero/>
            {/* <Navbar/> */}
            <About isMobile={isMobile}/>
            <Projects isMobile={isMobile}/>
            {/* <ProjectsList/> */}
            <ShowCase/>
          <Stack/>
          </div>

          <ContactForm/>
          <Footer/>
        </main>
      </Suspense>
    </>
  )
}

export default App
