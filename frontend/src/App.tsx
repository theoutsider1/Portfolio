import { About } from "./sections/About"
import { ContactMe } from "./sections/ContactMe"
import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"
import { Projects } from "./sections/Projects"
import { ProjectsList } from "./sections/ProjectsList"

function App() {
 

  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Hero/>
        <Navbar/>
        <About/>
        <Projects/>
        <ProjectsList/>
        <ContactMe/>
      </main>
    </>
  )
}

export default App
