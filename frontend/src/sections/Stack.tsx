import {  Suspense, useRef } from "react";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import {wandControlConfig } from "../constants/Globals/objectsControls";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import MagicWand from "../components/MagicWand";
import { IconsMesh } from "../components/IconsMesh";
import { Environment, Stars } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger)
export const Stack = () => {
  
  const wandControl = useControls('wand Controls',{...wandControlConfig}) 
  const isMobile = useMediaQuery({maxWidth: 368})
  const testRef = useRef<HTMLDivElement>(null)
  
  
  return (
        <section id='stack' ref={testRef} className="bg-[#0a1020] w-full flex flex-col sm:flex-row rounded-3xl mt-8 px-4 gap-4 sm:my-12 sm:bg-slate-[#0d0d12] sm:shadow-lg sm:shadow-[#0d0d12]">
            <Leva/>
            <div className="sm:w-1/2 sm:pr-12 relative">
                <img src='/assets/spotlight5.png' className="absolute transform  -scale-x-100 -left-4 opacity-70 rounded-3xl" alt="" />
                <h2 className="pt-4 sm:text-right items-center text-secondary text-4xl sm:text-6xl font-bold ">Stack</h2>
                <div className=" w-full sm:text-right sm:my-8 pt-12 sm:pt-0 sm:py-12 text-secondary ">
                    <p className="text-sm sm:text-lg font-thin sm:leading-loose">
                    Contributed to the development of Petify, an e-commerce store built by a team during my MERN bootcamp as a PFF. The platform features a modern, responsive user interface. 
                    </p>
                </div>
            </div>

            <div className="sm:w-1/2">
               
                <div className="w-full sm:mt-12 sm:h-[250px]">
                    <Canvas shadows camera={{position: [0,0,5], fov:50}} >
                    <color attach="background" args={['#0a1020']}/>
                    <Stars saturation={0} count={1000} speed={2} />
                    <Suspense fallback={<CanvasLoader/>}>
                 
                      {/* MagicWand component */}
                      <MagicWand 
                        castShadow
                        position={[0,0,0]}
                        rotation={[0,0,0]} scale={isMobile ? 0.13 : 0.15}
                        testRef={testRef}
                        />
                      {/* Icons */}
                      <IconsMesh testRef={testRef}/>

                      {/* MagicWand component */}
                      <MagicWand 
                        castShadow
                        position={[0,0,0]}
                        rotation={[0,0,0]} scale={isMobile ? 0.13 : 0.15}
                        testRef={testRef}
                        />
                      {/* Icons */}
                      <IconsMesh testRef={testRef}/>
                      {/*Envirement  */}
                      <Environment preset="dawn"/> 
                    </Suspense>  
                    </Canvas>     
                </div>
            </div>
                
        </section>

  );
};