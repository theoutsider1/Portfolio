import {Suspense, useRef, useState } from "react";
import { ProjectsInfo } from "../constants";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Laptop from "../components/Laptop";
import { ProjectsList } from "./ProjectsList";
import { ProjectsInfos } from "../constants/Globals/types";
import { useMediaQuery } from "react-responsive";

const ShowCase = ()=>{

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [rightPro, setRightPro] = useState<ProjectsInfos>(ProjectsInfo[0])
    const handleSwipeProjects = (ProjectsInfo: ProjectsInfos)=>{
        setRightPro(ProjectsInfo)        
    }
    const isMobile = useMediaQuery({maxWidth:468})

    return(
        <section ref={sectionRef} className="mb-16 mt-16 flex flex-col sm:flex-row" >
            
            <ProjectsList onProjectSelect={handleSwipeProjects}/>
           
            <div className=" sm:w-1/2 sm:m-4 order-2 sm:order-1 h-[50vh] sm:h-auto">
                <Canvas camera={{ position: [0, 0, -20], fov: 50 }}>
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                            <Suspense fallback={null}>
                                <Laptop currentProject= {rightPro}  isMobile={isMobile} sectionRef={sectionRef}/>
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