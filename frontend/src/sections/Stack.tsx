// import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { wandControlConfig } from "../constants/Globals/objectsControls";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export const Stack = () => {
  
  const wandControl = useControls('wand Controls',{...wandControlConfig}) 
  const isMobile = useMediaQuery({maxWidth: 368})
  const testRef = useRef<HTMLDivElement>(null)
  
  
  return (
        <section id='stack' ref={testRef} className="w-full flex h-screen mt-8 sm:px-12 sm:my-12">
            <Leva/>
            <div className="w-1/2">
                <h2 className="text-right items-center text-secondary text-4xl sm:text-6xl font-bold sm:px-12">Stack</h2>
            </div>

            <div className="w-1/2">
                <div className="w-full my-8 py-12 text-secondary ">
                    <p className="text-sm sm:text-lg font-thin sm:leading-loose">
                    Contributed to the development of Petify, an e-commerce store built by a team during my MERN bootcamp as a PFF. The platform features a modern, responsive user interface. 
                    </p>
                </div>
            </div>
                
        </section>

  );
};