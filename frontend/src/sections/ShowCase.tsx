import {useEffect, useState } from "react";
import { ProjectsInfo } from "../constants";
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
        <section className=" grid grid-cols-2 gap-4 border rounded-xl border-zinc-50">
            
            <div key={currentProject.id} className="bg-slate-200 bg-opacity-15 grid-span-1 m-4 border rounded-lg border-slate-100 border-opacity-15">
                
            <div className="flex gap-2 p-4">
                <div className="text-white">
                    <div>{currentProject.date}</div>
                </div>
                <div className="text-white">
                    <div>{currentProject.name}</div>
                </div>
            </div>
            <div className="px-4">
                <p>{currentProject.description}</p>
            </div>
            {/* icons div */}
            <div className="flex justify-between px-4">
                {/* tech used & live project btn */}
                {currentProject.tech.map(stack => 
                <div key={stack.id} className="flex gap-2 p-4">
                    <img 
                        src={stack.href} 
                        alt="toggle" className="w-6 h-6" />
                    {/* <img 
                        src={"assets/react.svg"} 
                        alt="toggle" className="w-6 h-6" />
                    <img 
                        src={"assets/react.svg"} 
                        alt="toggle" className="w-6 h-6" /> */}
                </div>
                )}
                <div>
                    <button>Check live site</button>
                </div>
            </div>

            {/* swiper arrows */}
            <div className="flex justify-between p-4">
                <button onClick={() => swipeProjects('l')} disabled={swiperLeft}>
                    <span className="hidden border-2 border-secondary border-opacity-25 rounded-xl p-1.5 sm:p-2.5 text-center text-gray-400 sm:inline-flex items-center">
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
                    <span className="hidden border-2 border-secondary border-opacity-25 rounded-xl p-1.5 sm:p-2.5 text-center text-gray-400 sm:inline-flex items-center">
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
           
            <div className="grid-span-1 m-4 border-2">
                <canvas>

                </canvas>
            </div>
        </section>
    )
}

export default ShowCase;