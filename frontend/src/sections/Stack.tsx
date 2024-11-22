// import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
 import MagicWand from "../components/MagicWand";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
// import { CrystalBall } from "../components/CrystalBall";
import { wandControlConfig } from "../constants/Globals/objectsControls";
import { StackTitle } from "../components/StackTitle";
import { IconsMesh } from "../components/IconsMesh";
import { gsap } from "gsap";
import { Mesh } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger)
export const Stack = () => {
  
  const wandControl = useControls('wand Controls',{...wandControlConfig}) 
  const isMobile = useMediaQuery({maxWidth: 768})
  // const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
  const titleRef = useRef<Mesh>(null);
  // const tlRef = useRef<gsap.core.Timeline | null>(null);
  const testRef = useRef<HTMLDivElement>(null)
  
  
  return (
        <section id='three' ref={testRef} className="w-full min-h-screen  relative">
            <Leva/>
            <Canvas shadows dpr={[1, 1.5]} camera={{position: [0,0,5], fov:50}} 
                style={{
                  width: `100vw`,
                  height: `100vh`
                }}>
              <color attach="background" args={['#171720']}/>

              <Suspense fallback={<CanvasLoader/>}>

                {/* StackTitle Component */}
                <StackTitle ref={titleRef}/>
                
                {/* MagicWand component */}
                <MagicWand 
                  castShadow
                  position={[wandControl.positionX, wandControl.positionY, wandControl.positionZ]} 
                  rotation={[wandControl.rotationX, wandControl.rotationY, wandControl.rotationZ]}
                  scale={isMobile ? 0.13 : wandControl.scale}
                  testRef={testRef}
                  /> 

                {/* Icons */}
                
                    <IconsMesh testRef={testRef}/>
                
                  <Environment preset="sunset"/>
                  <ambientLight intensity={3}/>
                  
                  <directionalLight 
                    castShadow 
                    position={[0,0,5]} 
                    intensity={0.5}
                    shadow-radius={8}  /> 
                  
                </Suspense>
            </Canvas>            
        </section>

  );
};
