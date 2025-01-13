import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Suspense, useEffect, useRef } from "react"
import { ContactShadows, Environment} from "@react-three/drei"
import { Navbar } from "./Navbar"
import MagicWand from "../components/MagicWand"
import { gsap } from "gsap"


export const Hero = ()=>{

    const isMobile = useMediaQuery({maxWidth: 468});
    const sectionRef = useRef<HTMLDivElement | null >(null);
    useEffect(()=>{
        if(sectionRef.current){
         
            gsap.to(sectionRef.current, {
              opacity: 1,
              duration: 4,
              ease: 'Power3.out',
              delay: 0.5,
            });
        }
    },[])
    return (
        <section id="home"ref={sectionRef} className="opacity-0 w-full sm:mx-4 h-screen sm:my-10 flex flex-col justify-center sm:justify-around  items-around">
           
            <div className="w-full "> 
                <h1 className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-[#d2ff96] text-center text-7xl sm:text-9xl font-times font-large ">
                    Web Wizard
                </h1>
                <div className="">
                        <p className="px-4 sm:px-0 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-neutral-500  opacity-35 text-center text-xs font-roboto sm:text-2xl sm:font-regular">
                            Casting spells with code to create magical digital experiences
                        </p>
                    </div>
            </div>
            <div className="w-full">
                <Canvas camera={{position: [0,0,5], fov:50}}>
                <pointLight position={[5, 5, 5]} intensity={1.5} />
                    <Suspense fallback={null}>
                        <MagicWand
                            castShadow
                            position={[0,0,0]}
                            rotation={[0,0,0]}
                            scale={isMobile ? 1 : 2.2}/>
                        <Environment preset="dawn"/>
                    </Suspense>
                <ContactShadows position={[0, -0.8, 0]} scale={20} blur={2} far={4.5} />                        
                </Canvas>
            </div>
           
           <Navbar/>
           
           
        </section>
        
    )
}