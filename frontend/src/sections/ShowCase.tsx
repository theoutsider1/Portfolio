import {Suspense, useRef, useState } from "react";
import { ProjectsInfo } from "../constants";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Laptop from "../components/Laptop";
import { ProjectsList } from "./ProjectsList";
import { ProjectsInfos } from "../constants/Globals/types";

const ShowCase = ()=>{

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [rightPro, setRightPro] = useState<ProjectsInfos>(ProjectsInfo[0])
    const handleSwipeProjects = (ProjectsInfo: ProjectsInfos)=>{
        setRightPro(ProjectsInfo)        
    }

    return(
        <section ref={sectionRef} className="mb-16 sm:h-[450px] flex flex-col sm:flex-row gap-4" >
            
            <ProjectsList onProjectSelect={handleSwipeProjects}/>
           
            <div className=" sm:w-1/2 sm:m-4 order-2 sm:order-1">
                <Canvas camera={{ position: [0, 0, -20], fov: 50 }}>
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                            <Suspense fallback={null}>
                                <group 
                                    rotation={[-0.2, Math.PI, 0]} 
                                    position={[0, -1, -2]}  //  animation values  position={[0, -1, -9]}  
                                    > 
                                        <Laptop currentProject= {rightPro} sectionRef={sectionRef}/>
                                </group>
                                <Environment preset="city" />
                            </Suspense>
                            <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
                            <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                        
                </Canvas>
            </div>
        </section>
    )
}

export default ShowCase;