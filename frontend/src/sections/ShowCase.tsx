import {Suspense, useRef, useState } from "react";
import { ProjectsInfo } from "../constants";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import Laptop from "../components/Laptop";
import { ProjectsList } from "./ProjectsList";

const ShowCase = ()=>{

    const [currentIndex , setCurrentIndex]= useState<number>(0)
    const [swiperRight, setSwiperRight] = useState(false)
    const [swiperLeft, setSwipeLeft] = useState(false)
    const currentProject = ProjectsInfo[currentIndex]
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const swipeProjects = (direction : 'r' | 'l')=>{
        if (direction === 'r') {
            if (currentIndex < ProjectsInfo.length - 1) {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                
                // Update button states
                if (currentIndex + 1 === ProjectsInfo.length - 1) {
                    setSwiperRight(true);
                }
                setSwipeLeft(false);
            }
        }
    
        if (direction === 'l') {
            if (currentIndex > 0) {
                setCurrentIndex((prevIndex) => prevIndex - 1);
    
                // Update button states
                if (currentIndex - 1 === 0) {
                    setSwipeLeft(true);
                }
                setSwiperRight(false);
            }
        }
    }


    return(
        <section ref={sectionRef} className="mb-16 sm:h-[450px] flex flex-col sm:flex-row gap-4" >
            
            <ProjectsList currentProject={currentProject} swiperLeft={swiperLeft} swiperRight={swiperRight} swipeProjects={swipeProjects}/>
           
            <div className=" sm:w-1/2 sm:m-4 order-2 sm:order-1">
                <Canvas camera={{ position: [0, 0, -20], fov: 50 }}>
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                            <Suspense fallback={null}>
                                <group 
                                    rotation={[-0.2, Math.PI, 0]} 
                                    position={[0, -1, -2]}  //  animation values  position={[0, -1, -9]}  
                                    > 
                                        <Laptop currentProject= {currentProject} sectionRef={sectionRef}/>
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