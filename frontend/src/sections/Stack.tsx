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
        <section id='stack' ref={testRef} className="w-full flex h-screen mt-8">
            <Leva/>
            <div className="w-1/2">
                <h2 className="text-right items-center text-secondary text-4xl sm:text-6xl font-bold sm:px-12">Stack</h2>
            </div>
            
           
            
                 
        </section>

  );
};