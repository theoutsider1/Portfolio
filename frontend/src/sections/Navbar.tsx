import { useEffect, useState } from "react"
import { navLinks } from "../constants"
import { useMediaQuery } from "react-responsive"

const NavItems = ({ onClick = () => {} })=>{
    return (
        <ul className="nav-ul w-full flex flex-col items-center sm:flex-row sm:justify-between relative z-20">

            {navLinks.map(navLink => (
                    <li className="nav-li text-secondary hover:text-third max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-10 p-4 " 
                        key={navLink.id}>
                            <a 
                                href={navLink.href} 
                                className="nav-li_a font-times text-lg md:text-lg " 
                                onClick={onClick}
                            >{navLink.name}</a>
                    </li>
                ))} 
        </ul>
    )
}


export  const Navbar = ()=>{
    const [isOpen, setisOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth:468})
    const [stickMenu, setStickMenu]= useState(false)

    // Toggle Menu
    const toggleMenu = ()=>{
        setisOpen((prevIsOpen => !prevIsOpen))
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= window.innerHeight * 0.8) {
                setStickMenu(true);
            } else {
                setStickMenu(false);
            }
        });
    }, []);
    return (
        //fixed top-o left-0
        <header className={`fixed top-0 right-0 z-50 w-full ${stickMenu ? `sm:stiky sm:backdrop-blur-sm sm:transition-all sm:duration-100 sm:ease-in-out top-0 sm:shadow-lg sm:shadow-[#9a9b9c12]` : `sm:static`}`}>
            
            <div className=" max-w-7xl mx-auto">
                <div className="flex justify-end sm:block sm:justify-center py-5 sm:py-2 mx-auto sm:px-10 px-5">
                     
                    {/* Burger */}

                    <button 
                        onClick={toggleMenu} 
                        className="text-white hover:text-black focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"> 
                            <img 
                                src={isOpen ? "assets/close.svg" : "assets/menu.svg" } 
                                alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>

            {/* Mobile sidebar Menu */}
            {isMobile ? <img src="/assets/owla.png" className="w-16 absolute left-0  top-0 " alt="" /> : null}

            <div className={`nav-sidebar absolute left-0 right-0 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block
                ${isOpen ? `max-h-screen` : `max-h-0`}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>

        </header>


    )
}