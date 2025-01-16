import {  Suspense, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {wandControlConfig } from "../constants/Globals/objectsControls";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import MagicWand from "../components/MagicWand";
import { IconsMesh } from "../components/IconsMesh";
import { Environment, Stars } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger)
export const Stack = () => {

  const isMobile = useMediaQuery({maxWidth: 368})
  const testRef = useRef<HTMLDivElement>(null)
  const [showMuggleVersion, setShowMuggleVersion] = useState(false);
  const getConfigValues = (config: any, type: 'position' | 'rotation' | 'scale', isMobile: boolean) : [number, number, number] => {
    const device = isMobile ? 'mobile' : 'desktop';
    if (type == 'scale') {
      console.log(config.scale[device].value);
      
      return config.scale[device].value;
    };
      return [
        config[`${type}X`][device].value,
        config[`${type}Y`][device].value,
        config[`${type}Z`][device].value,
      ];
  };
  const scaleValue = getConfigValues(wandControlConfig, 'scale', isMobile);
const HumanLangue = ()=>{
    return (
      <p className="font-roboto my-4 text-base sm:text-lg font-light sm:leading-loose">
                    In my spells room,I weave magic using Html, 
                    Tailwind-Css, JavaScript, Typescript,
                     React Js, Redux Toolkit, Axios, Prime React, GSAP, React Fiber Three, Nest js, Express js , RESTApi, MongoDB, PostgreSQL, Prisma, Supabase, and WordPress Craftia to weave modern digital enchantments. 
      </p>
    )
}
  
  return (
        <section id='stack' ref={testRef} className="w-full rounded-3xl sm:pt-24 p-2 ">
          <div className="bg-[#0a1020] rounded-3xl flex flex-col sm:flex-row px-4 gap-4 sm:bg-slate-[#0d0d12] sm:shadow-lg sm:shadow-[#0d0d12]">
            <div className="sm:w-1/2 sm:pr-12 relative">
                <img src='/assets/spotlight5.png' className="absolute transform  -scale-x-100 -left-4 opacity-70 rounded-3xl pointer-events-none" alt="" />
                <h2  className="squada pt-4 sm:text-right items-center text-third text-5xl sm:text-7xl">Stack</h2>
                <div className=" w-full sm:text-right sm:my-8  text-secondary ">
                  {!showMuggleVersion ? (
                    <>
                      <p className="font-roboto text-base my-4 sm:text-lg font-light sm:leading-loose">
                        In my spells room, I weave magic using HTMLus Arcana, CSSus Shieldum,
                        Tailwindus Bractum, JavaScriptus Fluxia, Typescriptus Magica, Reacto
                        Interfacia, Reduxus Imperium, Axiosum Revelia, Prime Reactum Lumina,
                        GSAPus Tempus, React Fiberum Revelia, Nestus Fortificus, Expressium
                        Maxima, Rest APIus Revelia, MongoDBus Mysticius, PostgreSQLum Datafluxia,
                        Prismaum Arcana, Supabaseum Revelia, and WordPresso Craftia to weave
                        modern digital enchantments.
                      </p>
                    </>
                  ) : (
                    <HumanLangue />
                  )}
                <div>
                <span
                  className="font-roboto text-xs text-third underline cursor-pointer z-50"
                  onClick={() => setShowMuggleVersion(!showMuggleVersion)}>
                    {showMuggleVersion ? "Magical version!" : "Muggle version!"}
                </span>

          </div>
                </div>
            </div>

            <div className="sm:w-1/2 mt-2 sm:mt-0 h-[50vh] sm:h-auto">
               
                    <Canvas shadows camera={{position: [0,0,5], fov:50}} >
                    <color attach="background" args={['#0a1020']}/>
                    <Stars saturation={0} count={1000} speed={2} />
                    <Suspense fallback={null}>
                 
                      {/* MagicWand component */}
                      <MagicWand 
                        castShadow
                        position={getConfigValues(wandControlConfig, 'position', isMobile)}
                        rotation={getConfigValues(wandControlConfig, 'rotation', isMobile)}
                        scale={scaleValue}
                        testRef={testRef}
                        />
                      {/* Icons */}
                      <IconsMesh testRef={testRef}/>
                      {/*Envirement  */}
                      <Environment preset="dawn"/> 
                    </Suspense>  
                    </Canvas>     
            </div>
          </div>      
        </section>

  );
};