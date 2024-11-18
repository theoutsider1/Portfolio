import { Svg } from "@react-three/drei"
import github from "/assets/github.svg"
import figma from "/assets/figma.svg"
import react from "/assets/react.svg"
import notion from "/assets/notion.svg"
import nestjs from "/assets/nestjs.svg"
import typescript from "/assets/typescript.svg"
import redux from "/assets/redux.svg"
import postman from "/assets/postman.svg"
import nodejs from "/assets/nodejs.svg"
import tailwindcss from "/assets/tailwindcss.svg"
import { RefObject, useEffect, useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface propInterface{
    testRef: RefObject<HTMLDivElement>;
}


gsap.registerPlugin(ScrollTrigger)
export const IconsMesh =({testRef} : propInterface) => {
    const tailwindRef  = useRef<Mesh>(null);
    const reduxMeshRef  = useRef<Mesh>(null);
    const reactMeshRef  = useRef<Mesh>(null);
   // const { viewport } = useTh()
  const initialScale = 0
  const targetScale = 0.001

  const meshScale = (direction: 'forward' | 'reverse') => {
    if (reactMeshRef.current
         ) {
      gsap.to(reactMeshRef.current.scale, {
        x: direction === 'forward' ? targetScale : initialScale,
        y: direction === 'forward' ? targetScale : initialScale,
        z: direction === 'forward' ? targetScale : initialScale,
        duration: 0.2,
        ease: 'none',
      })
     
    }
  }

  useEffect(() => {
    if (testRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testRef.current,
          start: 'center center',
          end: 'center center',
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            if (self.direction === 1) {
              meshScale('forward')
            } else {
              meshScale('reverse')
            }
          },
        },
      })
      return () => {
        tl.kill()
      }
    }
  }, [testRef])

    return (
        <>
        {/* frontend */}
            <Svg 
                ref={reactMeshRef}
                src={react}
                position={[0,0,2.5]}
                scale={initialScale}
            />
            {/* </Mesh> */}
            <Svg 
                ref={reduxMeshRef}
                src={redux}
                position={[-0.3,0.1,2]}
                scale={initialScale}
            />
           
            <Svg 
                ref={tailwindRef}
                src={tailwindcss}
                position={[0.3,0,2]}
                scale={initialScale}
            /> 
        {/* backend */}
            {/* <Svg 
                // ref={gitMeshRef}
                src={github}
                position={[0,1,-3]}
                scale={0.002}
            />
            <Svg 
                // ref={figmaMeshRef}
                src={figma}
                position={[1.5,2,-3]}
                scale={0.03}
            />
            
            <Svg 
                // ref={meshRef}
                src={notion}
                position={[-1,1,-3]}
                scale={0.02}
            />
            <Svg 
                // ref={meshRef}
                src={nestjs}
                position={[-0.1,0.5,-2]}
                scale={0.005}
            />
            <Svg 
                 ref={tpMeshRef}
                src={typescript}
                position={[-0.5,3.2,-5]}
                scale={0.007}
            />
            <Svg 
                // ref={meshRef}
                src={postman}
                position={[-0.7,0.1,-3]}
                scale={0.002}
            />
            <Svg 
                // ref={meshRef}
                src={nodejs}
                position={[0.7,0.1,-3]}
                scale={0.001}
            /> */}
           
            
        </>
    )
}