

export const Hero = ()=>{
    return (
        <section className="my-10 sm:p-12 h-4/5 w-full bg-secondary flex flex-col justify-center items-center rounded-3xl">
           
            <div> 
                <h1 className="py-8 text-7xl sm:text-9xl text-primary font-black">
                    Web Wizard
                </h1>
            </div>
            <div className="w-full flex flex-row  px-4 sm:p-8">

                <div className="w-1/2 flex flex-col sm:px-20">

                    {/* paragraph */}
                    <div className="sm:w-full">
                        <p className="text-left text-base sm:text-2xl sm:font-light">
                            Casting spells with code to create magical digital experiences
                        </p>
                        
                    </div>
                    

                    {/* icons */}
                    <div>
                        icon 
                        icon 
                        icon 
                    </div>
                    
                    {/* Button */}
                    <div className="my-4 ">
                        <button className="bg-primary rounded-full py-2.5 px-8 my-4 text-secondary">Contact me</button>
                    </div>
                    
                </div>
                <div className="w-1/2 h-1/2 flex justify-start relative sm:-top-48">
                    <img src="/assets/wand.png" className="absolute" alt="wand" />
                    </div>
            </div>
            
           
           
        </section>
        
    )
}