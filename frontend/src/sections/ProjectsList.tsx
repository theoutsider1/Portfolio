import { ProjectsInfos } from "../constants/Globals/types";

interface CardProps {
    currentProject: ProjectsInfos;
    swiperRight: boolean;
    swiperLeft: boolean;
    swipeProjects: (dir: 'r' | 'l')=> void ;
}

export const ProjectsList:React.FC<CardProps> =({currentProject,swiperLeft, swiperRight, swipeProjects }) =>{
   
    return (
    
        <div key={currentProject.id} className=" relative order-1 sm:order-2 sm:w-1/2 sm:flex sm:flex-col justify-between m-3 sm:m-4 border rounded-lg border-slate-100 border-opacity-15">
            {/* <img src='/assets/spotlight5.png' className="absolute opacity-70 rounded-lg" alt="" /> */}

            <div className="flex flex-col justify-around gap-3 p-2">
                <div className="text-white sm:mx-4">
                    <img src={currentProject.logo} alt="logo" className={`${currentProject.style} `}/>
                </div>
                <div className="text-white text-xl sm:px-6 font-semibold sm:text-2xl sm:font-bold">
                    <h4>{currentProject.name}</h4>
                </div>
            </div>
            <div className="px-2 sm:px-8 font-roboto font-light opacity-70 text-sm text-slate-200 sm:text-base">
                <p>{currentProject.description}</p>
            </div>
            {/* icons div */}
            <div className="flex justify-between pt-4">
                {/* tech used & live project btn */}
                <div className="flex flex-wrap items-center gap-2 p-2 sm:px-8 ">
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
                    <button onClick={() => swipeProjects('l')} disabled={swiperLeft}  className={` border-2 rounded-xl text-center sm:inline-flex items-center border-secondary ${swiperLeft === false ? `border-opacity-50 text-gray-100` : ` border-opacity-25 text-gray-400`}  p-1.5 sm:p-2.5`}>
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
                    </button>
                    <button onClick={()=>swipeProjects('r')} disabled={swiperRight} className={`border-2 border-secondary rounded-xl p-1.5 sm:p-2.5 text-center ${swiperRight === false ? `border-opacity-50 text-gray-100` : ` border-opacity-25 text-gray-400`} sm:inline-flex items-center`}>
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
                    </button>
                </div>
            </div>
    </div>
   
    )
}