import { Btn } from "../components/Btn"
import { SectionContent } from "../constants"

interface ProjectProps {
    isMobile : boolean;
}
export const Projects: React.FC<ProjectProps> = ({isMobile})=> {
    
    const projectSectionContent = SectionContent.Project
    const gitLink = "https://github.com/theoutsider1"
    return (
        <section id="work" className="flex items-center my-14 sm:my-0 sm:pt-16">
            {/* Paragraph section */}
            {!isMobile ? 
            <div className="w-full flex">
            <div className="sm:w-1/2">
                    <div className="w-full flex flex-col justify-end items-end text-secondary ">
                    <div className="sm:px-12">
                        <Btn
                                btnText={projectSectionContent.btnText}
                                isMobile={isMobile}
                                link={gitLink}
                            />
                    </div>
                        <p className="w-full sm:mb-0 my-8 text-base sm:text-lg font-roboto font-light leading-loose px-12 text-right">
                            {projectSectionContent.paragraph}
                        </p>
                    </div>
            </div>

            {/* Tittle & Button section */}
                <div className=" w-1/2 flex flex-col px-4 sm:px-0">
                    <div className="">
                        <h2 className="text-right items-center text-third squada text-5xl sm:text-7xl font-bold px-12">{projectSectionContent.title}</h2>
                    </div>
                   
                </div>
            </div>
            : 
            <div className="flex flex-col justify-between gap-14 px-4">
            {/* Tittle & Button section */}
                 <div className="">
                        <h2 className="text-left items-center text-third squada text-5xl font-bold">{projectSectionContent.title}</h2>
                </div>
            
                    <div className="w-full h-full flex flex-col justify-end items-end text-white ">
                        <p className="w-full pt-8 text-base sm:text-lg font-roboto font-light text-left">
                            {projectSectionContent.paragraph}
                        </p>
                    </div>
                    <div className="w-full flex justify-end items-center my-2">
                        <Btn
                                    btnText={projectSectionContent.btnText}
                                    isMobile={isMobile}
                                    link={gitLink}
                                />
                    </div>
         

            
            </div>
            }
        </section>
    )
}