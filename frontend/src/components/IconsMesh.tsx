import { Svg } from "@react-three/drei"
import github from "/assets/github.svg"
import figma from "/assets/figma.svg"
import react from "/assets/react.svg"
import notion from "/assets/notion.svg"
import { useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

export const IconsMesh =() => {
    const meshRef  = useRef<Mesh>(null);
    const gitMeshRef  = useRef<Mesh>(null);
    const figmaMeshRef  = useRef<Mesh>(null);
    const reactMeshRef  = useRef<Mesh>(null);

    useFrame(()=>{
        if(meshRef.current){
            meshRef.current.rotation.y +=0.01
        }
        if(gitMeshRef.current){
            gitMeshRef.current.rotation.y +=0.01
        }
        if(figmaMeshRef.current){
            figmaMeshRef.current.rotation.y +=0.01
        }
        if(reactMeshRef.current){
            reactMeshRef.current.rotation.y +=0.01
        }
    })

    return (
        <>
            <Svg 
                ref={gitMeshRef}
                src={github}
                position={[0,1,-3]}
                scale={0.002}
            />
            <Svg 
                ref={figmaMeshRef}
                src={figma}
                position={[1.5,2,-3]}
                scale={0.03}
            />
            <Svg 
                ref={reactMeshRef}
                src={react}
                position={[1.5,1,-3]}
                scale={0.005}
            />
            <Svg 
            ref={meshRef}
                src={notion}
                position={[-1,1,-3]}
                scale={0.02}
            />
           
            
        </>
    )
}