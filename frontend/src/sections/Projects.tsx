import { Btn } from "../components/Btn"
import { SectionContent } from "../constants"

interface ProjectProps {
    isMobile : boolean;
}
export const Projects: React.FC<ProjectProps> = ({isMobile})=> {
    
    const projectSectionContent = SectionContent.Project
    return (
        <section id="work" className="flex">
            {/* Paragraph section */}
            {!isMobile ? 
            <>
            <div className="sm:w-1/2">
                    <div className="w-full h-full flex flex-col justify-end items-end text-secondary ">
                   <Btn
                        btnText={projectSectionContent.btnText}
                        isMobile={isMobile}
                    />

                        <p className="w-full sm:mb-0 pt-8 sm:pt-0 text-sm sm:text-base font-thin sm:leading-loose sm:px-12 text-right">
                            {projectSectionContent.paragraph}
                        </p>
                    </div>
            </div>

            {/* Tittle & Button section */}
            <div className="sm:w-1/2">
                <div className="flex flex-col  px-4 sm:px-0">
                    <div className="">
                        <h2 className="text-right items-center text-secondary text-3xl sm:text-6xl font-bold sm:px-12">{projectSectionContent.title}</h2>
                    </div>
                   
                </div>
                
            </div>
            </>
            : 
            <div className="flex flex-col">
            {/* Tittle & Button section */}
            <div className="sm:w-1/2">
                <div className="flex flex-col  px-4 sm:px-0">
                    <div className="">
                        <h2 className="text-right items-center text-secondary text-3xl sm:text-6xl font-bold sm:px-12">{projectSectionContent.title}</h2>
                    </div>
                   
                </div>
                
            </div>
            <div className="">
                    <div className="w-full h-full flex flex-col justify-end items-end text-secondary ">
                        <p className="w-full sm:mb-0 pt-8 sm:pt-0 text-sm sm:text-base font-thin sm:leading-loose sm:px-12 text-right">
                            {projectSectionContent.paragraph}
                        </p>
                    </div>
            </div>

            
            <Btn
                        btnText={projectSectionContent.btnText}
                        isMobile={isMobile}
                    />
            </div>
            }
        </section>
    )
}