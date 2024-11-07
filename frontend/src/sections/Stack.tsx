// import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
 import MagicWand from "../components/MagicWand";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
// import { CrystalBall } from "../components/CrystalBall";
import { crystallBallControlConfig, wandControlConfig } from "../constants/Globals/objectsControls";
import { StackTitle } from "../components/StackTitle";
import { IconsMesh } from "../components/IconsMesh";


export const Stack = () => {
  
  const wandControl = useControls('wand Controls',{...wandControlConfig}) 
  const isMobile = useMediaQuery({maxWidth: 768})
  // const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
  const [triggerIconsRef, setTriggerIncons] = useState<boolean>(false);

  // Function to trigger the state change
  //And Check if the MagicWand animation completed
  const handleTriggerIcons = () => {
    setTriggerIncons(true); 
  };
  
  return (
        <section className="w-full min-h-screen  relative">
            <Leva/>
            <Canvas shadows dpr={[1, 1.5]} camera={{position: [0,0,3], fov:50}} 
                style={{
                 height: 400
                }}>
              <color attach="background" args={['#171720']}/>

              <Suspense fallback={<CanvasLoader/>}>

                {/* StackTitle Component */}
                <StackTitle/>
                
                {/* MagicWand component */}
                <MagicWand 
                  castShadow
                  position={[wandControl.positionX, wandControl.positionY, wandControl.positionZ]} 
                  rotation={[wandControl.rotationX, wandControl.rotationY, wandControl.rotationZ]}
                  scale={isMobile ? 0.13 : wandControl.scale}
                  handleTriggerIcons= {handleTriggerIcons}/> 

                {/* Icons */}
                {triggerIconsRef && 
                    <IconsMesh/>
                  }

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
