// import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
 import MagicWand from "../components/MagicWand";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { wandControlConfig } from "../constants/Globals/objectsControls";
import { IconsMesh } from "../components/IconsMesh";
import { gsap } from "gsap";
import { Mesh } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";

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
            <h2 className="text-right items-center text-secondary text-3xl sm:text-6xl font-bold sm:px-12">Projects</h2>
            <Canvas shadows dpr={[1, 1.5]} camera={{position: [0,0,5], fov:50}} 
                style={{
                  width: `100vw`,
                  height: `100vh`
                }}>
              <color attach="background" args={['#171720']}/>
              <mesh position={-0.48} rotation-x={[-Math.PI /2]}>
            <planeGeometry  args={[100,120,1,32]}/>
                <MeshReflectorMaterial 
                    blur={[600, 200]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={80}
                    roughness={0.8} // Adjusted for a more natural surface
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#171720" // Harmonized with the background
                    metalness={0.1} // Lower for a matte appearance
                    mirror={1}
                />
        </mesh>
              <Suspense fallback={<CanvasLoader/>}>

                {/* StackTitle Component */}
                {/* <StackTitle ref={titleRef}/> */}
                
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
                  <ambientLight castShadow intensity={3}/>
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