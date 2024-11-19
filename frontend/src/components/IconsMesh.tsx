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
interface MeshRef {
  mesh: Mesh;  // The Mesh object
  name: string; // The custom name
  scale: number;
}

gsap.registerPlugin(ScrollTrigger)
export const IconsMesh =({testRef} : propInterface) => {
    
  const meshRefs  = useRef<MeshRef[]>([]);
  const initialScale = 0
  //const targetScale = 0.001

  const meshScale = (direction: 'forward' | 'reverse') => {
    meshRefs.current.forEach((meshElem)=>{
      
      if (meshElem) {
        gsap.to(meshElem.mesh.scale, {
          x: direction === 'forward' ? meshElem.scale : initialScale,
          y: direction === 'forward' ? meshElem.scale : initialScale,
          z: direction === 'forward' ? meshElem.scale : initialScale,
          duration: 0.2,
          ease: 'none',

        })
        console.log(meshElem);
        
      }
    })
  }
  
  const fillMeshRefs = (el: Mesh, svgName: string, svgScale:number) => {
    if (el && !meshRefs.current.some(info => info.mesh.uuid === el.uuid)) {
      el.name = svgName;  // Update the mesh's name property
      el.scale.set( svgScale, svgScale,  svgScale)
      
      meshRefs.current.push({
        mesh: el,   // Store the entire mesh
        name: svgName,  // Store the custom name
        scale: svgScale
      });
      
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
                ref={(el)=> fillMeshRefs(el as Mesh, 'react', 0.001)}
                src={react}
                position={[0,0,2.5]}
                scale={initialScale}
            />
            {/* </Mesh> */}
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={redux}
                position={[-0.3,0.1,2]}
                scale={initialScale}
            />
           
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={tailwindcss}
                position={[0.3,0,2]}
                scale={initialScale}
            /> 
        {/* backend */}
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={github}
                position={[0,1.5,-2]}
                scale={initialScale}
            />
            <Svg 
               ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={figma}
                position={[1.5,2,-3]}
                scale={0.009}
            />
            
            <Svg 
               ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={notion}
                position={[-0.3,0.5,2]}
                scale={initialScale}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={nestjs}
                position={[0,1,1]}
                scale={initialScale}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={typescript}
                position={[-0.5,3.2,-5]}
                scale={initialScale}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={postman}
                position={[-0.7,0.1,-3]}
                scale={initialScale}
            />
            <Svg 
                ref={(el)=> fillMeshRefs(el as Mesh, 'react',0.001)}
                src={nodejs}
                position={[0.7,0.1,-3]}
                scale={initialScale}
            />
           
            
        </>
    )
}