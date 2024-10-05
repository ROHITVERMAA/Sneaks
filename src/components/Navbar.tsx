import { navbarLinks } from "@/lib/data";
import { NavLink } from "react-router-dom";

type NavbarProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const Navbar = ({ isOpen, toggleMenu }: NavbarProps) => {
    return (
        <nav className=''>
            <ul
                className={`fixed right-0 top-0 z-10 flex flex-col gap-8 h-full pt-16 pl-8 bg-lightYellow rounded-l-xl transition-slide lg:relative lg:flex-row lg:w-full lg:h-auto lg:pt-0 lg:pl-0 lg:opacity-100 lg:text-xl xl:gap-12  ${
                    isOpen ? "w-3/4 opacity-100" : "w-0 opacity-0 pl-0"
                }`}
            >
                {navbarLinks.map((link) => {
                    const { id, name, path } = link;
                    return (
                        <li key={id}>
                            <NavLink
                                onClick={toggleMenu}
                                to={path}
                                className='transition-ease hover:text-darkYellow hover:opacity-90'
                            >
                                {name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Navbar;
