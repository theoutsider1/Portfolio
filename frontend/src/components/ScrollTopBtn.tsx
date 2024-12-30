import { useEffect, useState } from "react";

export const ScrollTopBtn = ()=>{

    const [showTopBtn, setShowTopBtn]= useState(false)
    const handleScrollTop = ()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    return (
        <div className={`relative z-20 cursor-pointer` }>
            {showTopBtn && 
               <span className="bg-white-0 backdrop-filter backdrop-blur-sm bg-opacity-20 fixed right-2 bottom-10 text-white border rounded-xl text-center sm:inline-flex items-center border-secondary p-1.5 sm:p-2.5" onClick={handleScrollTop} >
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