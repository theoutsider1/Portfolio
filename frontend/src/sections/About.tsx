import React from "react";
import { Btn } from "../components/Btn";
import { SectionContent } from "../constants";
import { SectionDetails } from "../constants/Globals/types";

interface AboutProps {
    isMobile : boolean;
}
export const About: React.FC<AboutProps> = ({isMobile})=>{
    const aboutContent: SectionDetails = SectionContent.About;
    const linkedinLink = 'https://www.linkedin.com/in/hatim-tagmi/'
    return (
        <section id="about" className="w-full flex flex-col sm:flex-row px-4 sm:px-12 sm:pt-14">
            {/* Section Title */}
            <div className="sm:w-1/2">
                <h2 className="text-left squada sm:text-right items-center text-secondary text-5xl sm:text-7xl sm:px-12">
                    {aboutContent.title}
                </h2>
            </div>
            
            {/* Button Section & Description */}
           
            <div className="sm:w-1/2 flex flex-col-reverse items-center sm:flex-col gap-10 sm:gap-5">
                <div className=" w-full flex justify-end items-center ">
                
                    <Btn 
                        btnText={aboutContent.btnText} 
                        isMobile={isMobile}
                        link={linkedinLink}
                        />

                </div>
                <div className=" w-full my-4 sm:py-12 text-secondary ">
                    <p className="text-base sm:text-lg font-roboto font-light opacity-70 sm:leading-loose">
                        {aboutContent.paragraph}
                    </p>
                </div>

               
                
            </div>
            
        </section>
    )
}