import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MagicWand from "../components/MagicWand";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { CrystalBall } from "../components/CrystalBall";
import { crystallBallControlConfig, wandControlConfig } from "../constants/Globals/objectsControls";

export const Stack = () => {
  
  const wandControl = useControls('wand Controls',{...wandControlConfig}) 
  const crystalBallController = useControls('crystal ball',{...crystallBallControlConfig}) 
  const isMobile = useMediaQuery({maxWidth: 768})
  // const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
  return (
        <section className="w-full min-h-screen border-2 relative bg-slate-950">
            <Leva/>
            <Canvas className="w-full h-full absolute border-2"
             style={{
              height: 400}}>
              <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,5]} />
                <MagicWand 
                    // scale={[0,0,7]}
                    // position={[0,0,0]} 
                    // rotation={[0,280,0]}
                    position={[wandControl.positionX, wandControl.positionY, wandControl.positionZ]} 
                    rotation={[wandControl.rotationX, wandControl.rotationY, wandControl.rotationZ]}
                    scale={isMobile ? 0.13 : wandControl.scale}                  
                    />
                <CrystalBall
                    position={[crystalBallController.positionX, crystalBallController.positionY, crystalBallController.positionZ]} 
                    rotation={[crystalBallController.rotationX, crystalBallController.rotationY, crystalBallController.rotationZ]}
                    scale={isMobile ? 0.13 : crystalBallController.scale} />
                <ambientLight intensity={9}/>
                <directionalLight position={[10,10,10]}/>
              </Suspense>
            </Canvas>
            
        </section>

  );
};
