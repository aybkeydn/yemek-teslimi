import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logoNav from "../assets/restaurant.png";
import CartIcon from '../components/CartIcon';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);


  return (
    <div className='bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200 shadow-lg fixed top-0 z-50 opacity-95 w-full'>
    <div className='flex justify-between items-center p-4 max-w-[1400px] mx-auto'>
        <a href="/" className='flex items-center'>
        <span className="font-custom text-2xl font-bold text-gradient">vantexfood</span>
        <img src={logoNav} alt="logo" className='max-w-[50px]'/>
        </a>

        <Link to="/cart">
            <CartIcon/>
        </Link>

        <button onClick={toggleNav} className='text-white lg:hidden'>
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <nav className={`${nav ? "flex bg-yellow-200" : "hidden"} absolute lg:static w-full lg:w-auto lg:flex flex-col lg:flex-row items-center
                            space-y-5 lg:space-y-0 lg:space-x-6 top-14 left-0 right-0 py-5 lg:py-0 z-20`}>
                        <Link to="/" className='text-black'>Ana sayfa</Link>
                        <Link to="/contact" className='text-black'>İletişim</Link>
        </nav>
    </div>
</div>
  )
}

export default Navbar