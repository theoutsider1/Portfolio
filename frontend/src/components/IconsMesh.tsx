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
  scale: number;
  position: [number, number, number];
  
}
type PositionInterface = [number, number, number]

gsap.registerPlugin(ScrollTrigger)
export const IconsMesh =({testRef} : propInterface) => {
    
  const meshRefs  = useRef<MeshRef[]>([]);
  const initialScale = 0.001
  const initialPositionY = -1

  const meshScale = (direction: 'forward' | 'reverse') => {
    meshRefs.current.forEach((meshElem)=>{
      const targetScale = direction === 'forward' ? meshElem.scale : initialScale;
      const targetPositionY = direction === 'forward' ? meshElem.position[1] : -1; 
      if (meshElem 
          ){

            gsap.to(meshElem.mesh.scale, {
              x: targetScale,
              y: targetScale,
              z: targetScale,
              duration: 0.1,
              ease: 'none',

            })
            gsap.to(meshElem.mesh.position, {
              y: targetPositionY,
              duration: 2,
              ease: 'power1.inOut',

            })
          } 
        console.log(meshElem.mesh.position);
        
    })
  }
  
  const fillMeshRefs = (el: Mesh, svgName: string, svgScale:number, newPosition:number[]) => {
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
        scale: svgScale,
        position: pos,
      });
      console.log(pos);
      
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
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', 0.001, [-0.1,-0.2, 3])}
                src={react}
                position={[-0.1,initialPositionY,3]}
                scale={initialScale}
            />
            {/* </Mesh> */}
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'redux',0.001, [-0.7,-0.2,2])}
                src={redux}
                position={[-0.7,initialPositionY,2]}
                scale={initialScale}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'taiwlind',0.001, [0.4,-0.3,2.2])}
                src={tailwindcss}
                position={[0.4,initialPositionY,2.2]}
                scale={initialScale}
            /> 
        {/* backend */}
            <Svg 
               ref={(el)=> fillMeshRefs(el as Mesh, 'figma',0.008, [0.9,0.1,2])}
                src={figma}
                position={[0.9,initialPositionY,2]}
                scale={0.009}
            />
            
            <Svg 
               ref={(el)=> fillMeshRefs(el as Mesh, 'notion',0.006,[0.9, 0.6, 2])}
                src={notion}
                position={[0.9,initialPositionY,2]}
                scale={initialScale}
            />
            {/* <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'nest',0.03)}
                src={nestjs}
                position={[0.6,0.2,-3]}
                scale={initialScale}
            /> */}
            {/* <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'typescript',0.001)}
                src={typescript}
                position={[-1.5,0.4,-5]}
                scale={initialScale}
            /> */}
            {/* <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'postman',0.002)}
                src={postman}
                position={[2.9,0.8,-3]}
                scale={initialScale}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'github',0.001)}
                src={github}
                position={[2.2,0.8,-3]}
                scale={initialScale}
            /> */}
            {/* <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={nodejs}
                position={[-1.5,0.4,-1]}
                scale={initialScale}
            /> */}
            {/* <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.03)}
                src={express}
                position={[-1.5,0.1,-4]}
                scale={initialScale}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.02)}
                src={mongo}
                position={[-0.7,0.1,-7]}
                scale={initialScale}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.002)}
                src={postgresql}
                position={[-0.1,0.1,-7]}
                scale={initialScale}
            /> */}
           
            
        </>
    )
}