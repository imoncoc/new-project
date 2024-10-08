import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <nav className="container relative mx-auto p-6">
      {/* <!-- Flex Container For Nav Items --> */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* <!-- Logo  --> */}
        <div className="z-30">
          {/* <img src="./images/logo-bookmark.svg" alt="" id="logo" /> */}
          <NavLink
            to={"/"}
            className="font-bold text-3xl uppercase text-gray-500"
          >
            Green<span className="text-lime-500">LN</span>
          </NavLink>
        </div>
        {/* <!-- Menu Items --> */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? " tracking-widest text-softBlue"
                : "tracking-widest hover:text-softBlue"
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/product-and-category"}
            className="tracking-widest hover:text-softBlue"
          >
            Product_And_Category_Management
          </NavLink>
          <NavLink
            to={"/photo-gallery"}
            className="tracking-widest hover:text-softBlue"
          >
            Photo Gallery
          </NavLink>
        </div>
        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className={` z-30 block md:hidden focus:outline-none hamburger
            ${isHamburgerMenuOpen ? "open" : ""}
            `}
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}

      <div
        id="menu"
        className={`
            ${isHamburgerMenuOpen ? "flex" : "hidden"}
            fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? " block text-softBlue" : "block hover:text-softBlue"
            }
          >
            Products
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink
            to={"/product-and-category"}
            className="block hover:text-softBlue"
          >
            Product And Category Management
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink to={"/photo-gallery"} className="block hover:text-softBlue">
            Photo Gallery
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink to={"/cart"} className="block hover:text-softBlue">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
