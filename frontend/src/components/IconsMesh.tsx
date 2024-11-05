import { Svg } from "@react-three/drei"
import github from "/assets/github.svg"
import figma from "/assets/figma.svg"
import react from "/assets/react.svg"
import notion from "/assets/notion.svg"


export const IconsMesh =() => {
    
    return (
        <>
            <Svg 
                
                src={github}
                position={[0,1,-3]}
                scale={0.002}
            />
            <Svg 
                
                src={figma}
                position={[1.5,2,-3]}
                scale={0.03}
            />
            <Svg 
               
                src={react}
                position={[1.5,1,-3]}
                scale={0.005}
            />
            <Svg 
            
                src={notion}
                position={[-1,1,-3]}
                scale={0.02}
            />
           
            
        </>
    )
}