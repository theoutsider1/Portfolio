import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MagicWand from "../components/MagicWand";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";

export const Stack = () => {
  const controls = useControls({
    rotationX: {
      value : 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value : -6.6,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value : 0.4,
      min: -10,
      max: 10,
    },
    positionX: {
      value : 0,
      min: -10,
      max: 10,
    },
    positionY: {
      value : -1.9,
      min: -10,
      max: 10,
    },
    positionZ: {
      value : -5.5,
      min: -10,
      max: 10,
    },
    scale : {
      value: 0.2,
      min: 0.1,
      max: 10,
    }
  }) 
  return (
        <section className="w-full min-h-screen border-2 relative">
            <hr className="hidden sm:block px-96 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
            <Leva/>
            <Canvas className="h-full absolute">
              <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,3]} />
                <MagicWand 
                    // scale={[0,0,7]}
                    // position={[0,0,0]} 
                    // rotation={[0,280,0]}
                    position={[controls.positionX, controls.positionY, controls.positionZ]} 
                    rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                    scale={controls.scale}                  
                    />
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]}/>
              </Suspense>
            </Canvas>
            
        </section>

  );
};
