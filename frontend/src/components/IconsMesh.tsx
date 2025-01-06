import { Svg } from "@react-three/drei"
import github from "/assets/github.svg"
import react from "/assets/react.svg"
import nestjs from "/assets/nestjs.svg"
import typescript from "/assets/typescript.svg"
import redux from "/assets/redux.svg"
import nodejs from "/assets/nodejs.svg"
import tailwindcss from "/assets/tailwindcss.svg"
import express from "/assets/expressSvg.svg"
import mongo from "/assets/mongo.svg"
import postgresql from "/assets/postgresql.svg"
import { RefObject, useEffect, useRef } from "react"
import { Mesh } from "three"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface propInterface{
    testRef: RefObject<HTMLDivElement>;
}
interface MeshRef {
  mesh: Mesh;  // The Mesh object
  name: string; // The custom name
  //scale: number;
  position: [number, number, number];
  
}
type PositionInterface = [number, number, number]

gsap.registerPlugin(ScrollTrigger)
export const IconsMesh =({testRef} : propInterface) => {
    
  const meshRefs  = useRef<MeshRef[]>([]);
  //const initialScale = 0.001
  const initialPositionY = -7

  const meshScale = (direction: 'forward' | 'reverse') => {
    meshRefs.current.forEach((meshElem)=>{
      //const targetScale = direction === 'forward' ? meshElem.scale : initialScale;
      const targetPositionY = direction === 'forward' ? meshElem.position[1] : -7; 
      if (meshElem ) {
            gsap.to(meshElem.mesh.position, {
              y: targetPositionY,
              duration: 1,
              ease: 'power1.inOut',

            })
          } 
        // console.log(meshElem.mesh.position);
        
    })
  }
  
  const fillMeshRefs = (el: Mesh, svgName: string,
     //svgScale:number,
      newPosition:number[]) => {
    if (el && !meshRefs.current.some(info => info.mesh.uuid === el.uuid)) {
      el.name = svgName;  // Update the mesh's name property
     // el.scale.set( initialScale, initialScale,  initialScale)
      //el.position= newPosition
      el.position.set(newPosition[0], initialPositionY, newPosition[2])
      const pos : PositionInterface =[
        newPosition[0],
         newPosition[1],
         newPosition[2],
      ]
      meshRefs.current.push({
        mesh: el,   // Store the entire mesh
        name: svgName,  // Store the custom name
       // scale: svgScale,
        position: pos,
      });
     // console.log(pos);
      
    }
  };

  useEffect(() => {
    if (testRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testRef.current,
          start: 'center center',
          end: 'center center',
          scrub: true,
          markers: false,
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
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', [-0.1,0.7, 3])}
                src={react}
                position={[-0.1,initialPositionY,3]}
                scale={0.001}
            />
            {/* </Mesh> */}
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'redux', [-0.7,0.7,2])}
                src={redux}
                position={[-0.7,initialPositionY,2]}
                scale={0.001}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'taiwlind', [0.4,0.6,2.2])}
                src={tailwindcss}
                position={[0.4,initialPositionY,2.2]}
                scale={0.001}
            /> 
        {/* backend */}
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'nest', [-0.5,-2,-3])}
                src={nestjs}
                position={[-0.4,initialPositionY,-3]}
                scale={0.04}
            />

            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'github', [2.2,0.8,-3])}
                src={github}
                position={[2.2,initialPositionY,-3]}
                scale={0.001}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', [-1.7,0.7,0])}
                src={nodejs}
                position={[-1.7,initialPositionY,0]}
                scale={0.001}
            />
            <Svg 
                // ref={(el)=> fillMeshRefs(el as Mesh, 'typescript',[-4,0.7,-3])}
                ref={(el)=> fillMeshRefs(el as Mesh, 'typescript',[1.2,-1.7,-3])}
                src={typescript}
                position={[1.2,initialPositionY,-3]}
                scale={0.001}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', [-2,-1.7,-4])}
                src={express}
                position={[-2,initialPositionY,-4]}
                scale={0.03}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', [-2.7,-0.2,-3])}
                src={mongo}
                position={[-2.7,initialPositionY,-3]}
                scale={0.025}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', [2.2,-0.3,-3])}
                src={postgresql}
                position={[2.2,initialPositionY,-3]}
                scale={0.002}
            />
           
            
        </>
    )
}