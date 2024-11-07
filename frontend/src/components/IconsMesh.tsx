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
        {/* frontend */}
        <Svg 
                // ref={reactMeshRef}
                src={react}
                // position={[0,0,2]}
                position={[-0.1,0.7,-1.8]}
                scale={0.0009}
            />
             <Svg 
                // ref={reactMeshRef}
                src={react}
                position={[0,0,2]}
                scale={0.001}
            />
            <Svg 
                // ref={meshRef}
                src={redux}
                position={[-0.3,0.1,2]}
                scale={0.001}
            />
            <Svg 
                // ref={meshRef}
                src={tailwindcss}
                position={[0.3,0,2]}
                scale={0.001}
            />
        {/* backend */}
            <Svg 
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
                // ref={meshRef}
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
            />
           
            
        </>
    )
}