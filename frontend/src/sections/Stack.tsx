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
        <section id='stack' ref={testRef} className="sm:bg-[#0a1020] w-full flex flex-row sm:rounded-xl mt-8 sm:px-12 sm:my-12">
            <Leva/>
            <div className="sm:w-1/2">
                <h2 className="sm:text-right items-center text-secondary text-4xl sm:text-6xl font-bold sm:px-12">Stack</h2>
                <div className="h-[450px] sm:px-12">
                    <Canvas shadows camera={{position: [0,0,5], fov:50}} >
                    <color attach="background" args={['#0a1020']}/>
                    <Stars saturation={0} count={1000} speed={0.5} />
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

            <div className="sm:w-1/2">
                <div className="w-full my-8 py-12 text-secondary ">
                    <p className="text-sm sm:text-lg font-thin sm:leading-loose">
                    Contributed to the development of Petify, an e-commerce store built by a team during my MERN bootcamp as a PFF. The platform features a modern, responsive user interface. 
                    </p>
                </div>
            </div>
                
        </section>

  );
};