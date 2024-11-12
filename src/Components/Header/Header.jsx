import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import './Header.css'
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-transparent absolute top-0 left-0 right-0 z-10">
            <header className="sticky py-5 px-4 flex justify-between items-center container mx-auto">
                <div className="logo-box">
                   <Link to={'/'}><h2 className="text-4xl font-semibold text-orange-600"><span className="text-white font-semibold text-2xl">Res</span>Tufy</h2></Link> 
                </div>
                <div className="navmenu relative">
                    <p onClick={() => { setOpen(!open) }} className="md:hidden cursor-pointer font-bold text-3xl">{open ? <GrClose></GrClose> : <RiMenu2Fill />
                    }</p>

                    <nav className={`flex flex-col md:flex-row w-[200px] md:w-auto gap-5 px-4 py-5 font-semibold absolute right-0 md:static bg-black z-50 md:bg-transparent transition-all   ${open ? 'mt-5' : 'mt-[-600px]'} md:mt-0 md:w-auto`}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/recipes">Recipes</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                </div>
            </header>


        </div>
    );
};

export default Header;