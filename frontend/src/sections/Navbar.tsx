import { useState } from "react"
import { navLinks } from "../constants"

const NavItems = ()=>{
    return (
        <ul className="nav-ul w-full flex flex-col items-center sm:flex-row sm:justify-around relative z-20">
             {navLinks.map(navLink => (
                    <li className="nav-li text-secondary hover:text-white max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-10 p-4 " 
                        key={navLink.id}>
                            <a 
                                href={navLink.href} 
                                className="nav-li_a text-lg md:text-lg transition-colors" 
                                onClick={()=>{}}>{navLink.name}</a>
                    </li>
                ))} 
        </ul>
    )
}


export  const Navbar = ()=>{
    const [isOpen, setisOpen] = useState(false);
    // Toggle Menu
    const toggleMenu = ()=>{
        setisOpen((prevIsOpen => !prevIsOpen))
    }
    return (
        //fixed top-o left-0
        <header className="fixed top-0 right-0 sm:static sm:top-auto sm:left-auto z-50 w-full">
            
            <div className=" max-w-7xl mx-auto">
                <div className="flex justify-end sm:block sm:justify-center py-5 mx-auto sm:px-10 px-5">
                    
                    {/* Add LOGO */}

                    {/* <a href="/" className="text-white font-bold text-xl hover:font-semibold transition-colors" >
                        Hatim Tagmi
                    </a> */}

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
            
            <div className={`nav-sidebar absolute left-0 right-0 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block
                ${isOpen ? `max-h-screen` : `max-h-0`}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>

        </header>


    )
}