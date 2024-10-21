export const About = ()=>{

    return (
        <section className="w-full flex sm:flex-row px-12 my-12">
            {/* Section Title */}
            <div className="w-1/2">
                <h2 className="text-right items-center text-secondary text-6xl font-bold sm:px-12">About</h2>
            </div>
            <div className="w-1/2">
                <div className="w-full flex justify-end">
                <button className="flex items-center font-thin text-secondary">
                    <span className="border-2 text-base font-light inline-flex items-center my-4 border-secondary rounded-full py-2.5 px-8">
                        Contact me
                    </span>

                   
                </button>
                   
                </div>
                <div className="w-full flex justify-start my-4 py-12 text-secondary font-extralight">
                    <p>Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                        your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.</p>
                </div>

                
            </div>
        </section>
    )
}