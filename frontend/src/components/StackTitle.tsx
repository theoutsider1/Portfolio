import { CameraControls, Environment, MeshReflectorMaterial, OrbitControls, Text, Text3D } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils.js"
import MagicWand from "./MagicWand"


export const StackTitle = ()=>{
    
return (
    <>
        <CameraControls 
            minPolarAngle={Math.PI/2}
            maxPolarAngle={Math.PI/2}
            //enableZoom={false}
            />
        
        <Text
            position-x={-1.3}
            position-y={0}
            position-z={-1.5}
            lineHeight={10}
           // textAlign="center"
            rotation-x={degToRad(-10)}
            rotation-y={degToRad(50)}>
                &lt; &gt;
                <meshStandardMaterial color="#425092" />
            </Text>
            

        <mesh position={-0.48} rotation-x={[-Math.PI /2]}>
            <planeGeometry  args={[100,120,1,32]}/>
                <MeshReflectorMaterial 
                    blur={[600, 200]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={80}
                    roughness={0.8} // Adjusted for a more natural surface
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#171720" // Harmonized with the background
                    metalness={0.1} // Lower for a matte appearance
                    mirror={1}
                />
        </mesh>
        <Environment preset="sunset"/>
    </>
)
}