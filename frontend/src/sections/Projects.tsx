import { Btn } from "../components/Btn"
import { SectionContent } from "../constants"

interface ProjectProps {
    isMobile : boolean;
}
export const Projects: React.FC<ProjectProps> = ({isMobile})=> {
    
    const projectSectionContent = SectionContent.Project
    return (
        <section id="work" className="max-w-7xl mx-auto flex">
            {/* Paragraph section */}
            <div className="w-1/2">
                    <div className="w-full h-full flex flex-col justify-end items-end text-secondary ">
                   <Btn
                        btnText={projectSectionContent.btnText}
                        isMobile={isMobile}/>

                        <p className=" sm:mb-0 pt-8 sm:pt-0 text-sm sm:text-base font-thin sm:leading-loose sm:px-12 text-right">Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                             your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.</p>
                    </div>
            </div>

            {/* Tittle & Button section */}
            <div className="w-1/2">
                <div className="flex flex-col  px-4 sm:px-0">
                    <div className="">
                        <h2 className="text-right items-center text-secondary text-3xl sm:text-6xl font-bold sm:px-12">Projects</h2>
                    </div>
                   
                </div>
                
            </div>
        </section>
    )
}