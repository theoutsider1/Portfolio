import { gsap } from "gsap";
import { useEffect } from "react";

export const CanvasLoader = ()=>{
    
    useEffect(() => {
        const timeline = gsap.timeline();
    
        timeline
          .fromTo(
            ".logo",
            { scale: 0.5, opacity: 1 }, // Initial state
            { scale: 2, opacity: 0, duration: 4, ease: "power3.out" } // Animate to "coming forward"
          );
      }, []);
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            <img src="/assets/owla.svg" alt="Wizard-Logo" className="logo block"/>
        </section>
    )   
}