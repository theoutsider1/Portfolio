export function ProjectsList() {
    return (
        <section className="w-full sm:flex flex-col justify-center px-4 sm:px-12 my-12">
            {/* Divider */}
             {/* <hr className="px-96 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" /> */}
            {/* Section contains Title Projects & Description */}
            <div className="w-full border-y-2 border-secondary ">
                <div className="flex flex-col sm:flex-row gap-4 py-4">
                    <div className="sm:w-1/4 text-sm sm:text-base text-secondary font-thin">
                        2024
                    </div>
                    <div className="sm:w-2/4  text-secondary ">
                         <h4 className="text-xl font-semibold sm:text-3xl sm:font-bold">2jobs</h4>
                        <p className="mt-2 text-sm font-thin sm:text-base">Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                             your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life.</p>
                    </div>
                    <div className="sm:w-1/4 flex justify-end sm:justify-start sm:static">
                        <button className="border-2">button</button>
                    </div>
                </div>
            </div>

            {/* Section contains project description  */}
            
        </section>
    )
}