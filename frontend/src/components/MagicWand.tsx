import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {RefObject, useEffect, useRef } from 'react'
import { Group, Mesh } from 'three'



interface handletri {
  castShadow: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  testRef : RefObject<HTMLDivElement>;
}
gsap.registerPlugin(ScrollTrigger)

const MagicWand = (props : handletri)=> {
 
  const { nodes, materials } = useGLTF('/models/the_elder_wand.glb')
  const {testRef, ...restProps} = props;
  const meshRef = useRef<Group>(null);
  
  

// 2nd Animation
  // const shakeWand = ()=> {
  //   if(meshRef.current){
  //     gsap
  //     .timeline()
  //     .to(meshRef.current.rotation,{
  //       // x:-0.1,
  //       y: 0.5,
  //       duration: 0.1,
  //       ease:"power1.inOut"
  //     }).to(meshRef.current.rotation,{
  //       // x:-0.1,
  //       y:1.8,
  //       duration:3,
  //       ease:"power1.inOut",
  //       onComplete: handleTriggerIcons ,
  //     })
  //   }
  // }

  useEffect(() => {

    if(meshRef.current ){
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
          markers: true,
        },
      })

      tl.to(meshRef.current.rotation, {
        // x: 0.5,       // Move to a new x position
        // y: 0.5, 
        z: 0,   // Move to a new y position (upwards arc)
        duration: 1,
        ease: "power1.inOut",
        // onComplete:()=> {
        //   shakeWand()},  // Call the flip function after moving
      })
      tl.to(meshRef.current.position, {
        x: 0,       // Move to a new x position
        y: 0.2, 
        z: 2,   // Move to a new y position (upwards arc)
        duration: 1,
        ease: "power1.inOut",
        // onComplete:()=> {
        //   shakeWand()},  // Call the flip function after moving
      })
    }
  }, [testRef]);
  
   return (
    <group {...restProps}
     ref={meshRef} 
     dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.07}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder__0 as Mesh ).geometry}
            material={materials['Scene_-_Root']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/the_elder_wand.glb')
export default MagicWand;