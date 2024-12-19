import React from "react";
import { Btn } from "../components/Btn";
import { SectionContent } from "../constants";
import { SectionDetails } from "../constants/Globals/types";

interface AboutProps {
    isMobile : boolean;
}
export const About: React.FC<AboutProps> = ({isMobile})=>{
    const aboutContent: SectionDetails = SectionContent.About
    return (
        <section id="about" className="w-full flex flex-col sm:flex-row px-4 sm:px-12 sm:my-12">
            {/* Section Title */}
            <div className="sm:w-1/2">
                <h2 className="text-left sm:text-right items-center text-secondary text-4xl sm:text-6xl font-bold sm:px-12">
                    {aboutContent.title}
                </h2>
            </div>
            
            {/* Button Section & Description */}
           
           { 
           !isMobile ? (
            <div className="sm:w-1/2">
                <div className="w-full flex sm:justify-end items-center">
                
                    <Btn btnText={aboutContent.btnText}/>

                </div>
                <div className="w-full my-4 py-12 text-secondary ">
                    <p className="text-sm sm:text-lg font-thin sm:leading-loose">
                        {aboutContent.paragraph}
                    </p>
                </div>

               
                
            </div>)
            : 
            <div className="sm:w-1/2">
                <div className="w-full flex justify-start my-4 py-12 text-secondary ">
                
                <p className="text-sm sm:text-lg font-thin sm:leading-loose">
                    {aboutContent.paragraph}
                </p>
                </div>
                <div className= "w-full flex justify-end items-center sm:py-0" >
                    <Btn btnText={aboutContent.btnText}/>
                </div>   
            </div>
            }
        </section>
    )
}