export const Projects = ()=> {
    return (
        <section className="max-w-7xl mx-auto flex">
            {/* Paragraph section */}
            <div className="w-1/2">
                    <div className="w-full h-full flex flex-col justify-end text-secondary ">
                        <p className=" sm:mb-0 pt-8 sm:pt-0 text-sm sm:text-base font-thin sm:leading-loose sm:px-12 text-right">Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                             your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.</p>
                    </div>
            </div>

            {/* Tittle & Button section */}
            <div className="w-1/2">
                <div className="flex flex-col gap-y-64 sm:gap-36 px-4 sm:px-0">
                    <div className="">
                        <h2 className="text-right items-center text-secondary text-3xl sm:text-6xl font-bold sm:px-12">Projects</h2>
                    </div>
                    <div className="w-full flex justify-end items-end sm:px-12">

                        <button className="flex items-center font-thin text-secondary">
                                    <span className="border-2 text-sm sm:text-base sm:font-light inline-flex items-center sm:my-4 border-secondary rounded-full py-1.5 sm:py-2.5 px-4 sm:px-8">
                                        Learn More
                                    </span>

                                    {/* Hidden svg, when if the screen is small, to get more space */}
                                    <span className="hidden border-2 border-secondary rounded-full p-1.5 sm:p-2.5 text-center sm:inline-flex items-center">
                                        <svg
                                        className="w-5 h-5 transform -rotate-45"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                        >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="0.5"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                        </svg>
                                        <span className="sr-only">Icon description</span>
                                    </span>
                            </button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}