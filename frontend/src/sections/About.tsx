import React from "react";
import { Btn } from "../components/Btn";
import { SectionContent } from "../constants";
import { SectionDetails } from "../constants/Globals/types";

interface AboutProps {
    isMobile : boolean;
}
export const About: React.FC<AboutProps> = ({isMobile})=>{
    const aboutContnet: SectionDetails = SectionContent.About
    return (
        <section id="about" className="w-full flex flex-col sm:flex-row px-4 sm:px-12 sm:my-12">
            {/* Section Title */}
            <div className="sm:w-1/2">
                <h2 className="text-left sm:text-right items-center text-secondary text-4xl sm:text-6xl font-bold sm:px-12">
                    About
                </h2>
            </div>
            
            {/* Button Section & Description */}
           
           { 
           !isMobile ? (
            <div className="sm:w-1/2">
                <div className="w-full flex sm:justify-end items-center">
                
                    {/* <Btn/> */}

                </div>
                <div className="w-full my-4 py-12 text-secondary ">
                    <p className="text-sm sm:text-lg font-thin sm:leading-loose">Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                        your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.</p>
                </div>

               
                
            </div>)
            : 
            <div className="sm:w-1/2">
                <div className="w-full flex justify-start my-4 py-12 text-secondary ">
                
                <p className="text-sm sm:text-lg font-thin sm:leading-loose">Welcome to my magical realm of web development! I’m Hatim Tagmi, 
                    your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.</p>
                
                </div>
                <div className= "w-full flex justify-end items-center sm:py-0" >
                {/* <Btn/> */}
                </div>   
            </div>
            }
        </section>
    )
}