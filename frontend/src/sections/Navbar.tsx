import { useState } from "react"

const NavItems = ()=>{
    return (
        <div></div>
    )
}


export  const Navbar = ()=>{
    const [isOpen, setisOpen] = useState(false);
    // Toggle Menu
    const toggleMenu = ()=>{
        setisOpen((prevIsOpen => !prevIsOpen))
    }
    return (
        <header className="fixed top-o left-0 z-50 w-full">
            
            <div className=" max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto sm-px-10 px-5">
                    
                    {/* Add LOGO */}
                    <a href="/" className="text-secondary font-bold text-xl hover:font-semibold transition-colors" >
                        Hatim Tagmi
                    </a>

                    {/* Burger */}
                    <button onClick={toggleMenu} className="text-secondary hover:text-black"> 
                        <img 
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg" } 
                            alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                    
                    
                </div>
            </div>
        
        </header>


    )
}