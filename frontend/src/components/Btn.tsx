interface BtnProps {
    btnText: String;
    // onClick?: ()=> void ;
    isMobile : boolean
    link: string;
}
export const Btn: React.FC<BtnProps> = ({btnText, isMobile, link})=>{

    
    return (
        <>
            <a className="flex items-center font-roboto font-light text-white cursor-pointer group" href={link}  target="_blank"  rel="noopener noreferrer">
                    <span className="border-2 text-sm sm:text-base sm:font-light inline-flex items-center sm:my-4 border-third group-hover-styles rounded-full py-1.5 sm:py-2.5 px-4 sm:px-8">
                       {btnText}
                    </span>
                    {
                        isMobile ? 
                            null :
                                <span className="border-2 border-third text-white group-hover-styles rounded-full p-1.5 sm:p-2.5 text-center inline-flex items-center">
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
            </a>
        </>
    )
}