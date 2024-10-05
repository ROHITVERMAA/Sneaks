import { useState } from "react";
import { useCartContext } from "@context/cartContext";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import iconSearch from "@icons/search.svg";
import iconPerson from "@icons/user.svg";
import iconCart from "@icons/cart.svg";
import iconCartYellow from "@icons/cart-yellow.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const { pathname } = useLocation();
    const { totalItemsInCart } = useCartContext();

    return (
        <header className='flex justify-between items-center w-full py-4 md:py-8 2xl:py-16'>
            <Logo />
            <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className='flex items-center gap-4 xl:gap-8'>
                <div className='hidden lg:block'>
                    <img src={iconSearch} alt='' />
                </div>
                <div className='hidden lg:block'>
                    <img src={iconPerson} alt='' />
                </div>
                <Link
                    to='/cart'
                    className='relative z-20'
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={pathname === "/cart" ? iconCartYellow : iconCart}
                        alt='cart'
                        className='w-5 md:w-6'
                    />
                    <div className='absolute z-20 -top-6 left-2 bg-darkYellow text-white px-2 rounded-full'>
                        {totalItemsInCart}
                    </div>
                </Link>

                <div className='relative z-20 lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} />
                </div>
            </div>
        </header>
    );
};
export default Header;
