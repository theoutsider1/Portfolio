import { useEffect, useState } from "react";

export const ScrollTopBtn = ()=>{

    const [showTopBtn, setShowTopBtn]= useState(false)
   
    return (
        <div className={`relative z-20 cursor-pointer` }>
            {showTopBtn && 
               <span className="bg-white-0 backdrop-filter backdrop-blur-sm bg-opacity-20 fixed right-28 bottom-10 text-white border-2 rounded-xl text-center sm:inline-flex items-center border-secondary p-1.5 sm:p-2.5" onClick={handleScrollTop} >
                    <svg
                        className="w-5 h-5 transform -rotate-90"
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
               }
        </div>
    )
}