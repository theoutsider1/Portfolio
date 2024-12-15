import {Suspense, useState } from "react";
import { ProjectsInfo } from "../constants";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import Laptop from "../components/Laptop";
const ShowCase = ()=>{

    const [currentIndex , setCurrentIndex]= useState<number>(0)
    const [swiperRight, setSwiperRight] = useState(false)
    const [swiperLeft, setSwipeLeft] = useState(false)
    const currentProject = ProjectsInfo[currentIndex]

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
        <section className="mb-16 h-[450px] grid grid-cols-2 gap-4 border rounded-xl border-zinc-50 " >
            
            <div key={currentProject.id} className="flex flex-col justify-between bg-slate-200 bg-opacity-15 col-span-1 m-4 border rounded-lg border-slate-100 border-opacity-15">
                
                <div className="flexflex-col justify-around gap-2 p-8">
                    <div className="text-white">
                        <div>{currentProject.date}</div>
                    </div>
                    <div className="text-white text-xl font-semibold sm:text-2xl sm:font-bold">
                        <h4>{currentProject.name}</h4>
                    </div>
                </div>
                <div className="px-8 font-normal text-sm text-slate-200 sm:text-base">
                    <p>{currentProject.description}</p>
                </div>
                {/* icons div */}
                <div className="flex justify-between pt-4">
                    {/* tech used & live project btn */}
                    <div className="flex flex-wrap items-center gap-2 px-8 ">
                    {currentProject.tech.map(stack => 
                        <img 
                            key={stack.id}
                            src={stack.href} 
                            alt="toggle" className="w-10 h-10 bg-slate-300 bg-opacity-15 px-2 rounded-lg" />
                            )}
                    </div>
                </div>

                {/* swiper arrows */}
                <div className="flex flex-col">
                <span className="flex items-center justify-end px-4">
                    <button className="text-slate-100 underline text-base font-extralight opacity-75">Check live site</button>
                </span>

                <div className="flex justify-between p-4">
                    <button onClick={() => swipeProjects('l')} disabled={swiperLeft}>
                        <span className={`hidden border-2 rounded-xl text-center sm:inline-flex items-center border-secondary ${swiperLeft === false ? `border-opacity-50 text-gray-100` : ` border-opacity-25 text-gray-400`}  p-1.5 sm:p-2.5`}>
                            <svg
                                className="w-5 h-5 transform -rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.5"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </span>
                    </button>
                    <button onClick={()=>swipeProjects('r')} disabled={swiperRight}>
                        <span className={`hidden border-2 border-secondary rounded-xl p-1.5 sm:p-2.5 text-center ${swiperRight === false ? `border-opacity-50 text-gray-100` : ` border-opacity-25 text-gray-400`} sm:inline-flex items-center`}>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.5"
                                d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </span>
                    </button>
                </div>
                </div>
            </div>
           
            <div className=" col-span-1 m-4 border-2">
                <Canvas camera={{ position: [0, 0, -20], fov: 50 }}>
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                            <Suspense fallback={<CanvasLoader/>}>
                                <group 
                                    rotation={[-0.2, Math.PI, 0]} 
                                    position={[0, -1, -2]}  //  animation values  position={[0, -1, -9]}  
                                    > 
                                        <Laptop currentProject= {currentProject}/>
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