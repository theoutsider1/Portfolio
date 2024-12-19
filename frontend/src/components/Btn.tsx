interface BtnProps {
    btnText: String;
    // onClick?: ()=> void ;
    isMobile : boolean
}
export const Btn: React.FC<BtnProps> = ({btnText, isMobile})=>{

    
    return (
        <>
            <button className="flex items-center font-thin text-secondary">
                    <span className="border-2 text-sm sm:text-base sm:font-light inline-flex items-center sm:my-4 border-secondary rounded-full py-1.5 sm:py-2.5 px-4 sm:px-8">
                       {btnText}
                    </span>
                    {
                        isMobile ? 
                            null :
                                <span className="border-2 border-secondary rounded-full p-1.5 sm:p-2.5 text-center inline-flex items-center">
                                <svg
                                className="w-5 h-5 transform -rotate-45"
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
            </button>
        </>
    )
}