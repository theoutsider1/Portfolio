import { ProjectsInfo } from "../constants"


export function ProjectsList() {
    return (
        <section className="scrollbar-custom w-full sm:flex flex-col justify-center px-4 sm:px-12 my-12 py-4 sm:h-[100vh] overflow-y-auto scroll-smooth">
            {ProjectsInfo.map(project => (
                <div key={project.id} className="">
                        {/* Divider */}
                    <hr className="hidden sm:block px-96 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
                    {/* Section contains Title Projects & Description */}
                    <div className="w-full border-b-2 border-secondary sm:border-none ">
                            <div className="flex flex-col sm:flex-row gap-4 py-4">
                                <div className="sm:w-1/4 text-sm sm:text-base text-secondary font-thin">
                                    {project.date}
                                </div>
                                <div className="sm:w-2/4  text-zinc-300 ">
                                    <h4 className="text-xl font-semibold sm:text-2xl sm:font-bold">{project.name}</h4>
                                    <p className="mt-2 text-sm text-zinc-500 font-thin sm:text-base">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="sm:w-1/4 flex justify-end sm:static">
                                    <button className="flex items-center font-thin text-secondary">
                                        <span className="border-2 text-sm sm:text-base sm:font-light inline-flex items-center sm:my-4 border-secondary rounded-full py-1.5 sm:py-2.5 px-4 sm:px-8">
                                            Learn More
                                        </span>     
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            {/* Section contains project description  */}
            
        </section>
    )
}