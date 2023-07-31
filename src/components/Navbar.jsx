import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { mylogo, carrent, logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      {/* This is the div containing the entirety of my Navbar */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* This is the link which consists of my logo and my name. When users click it, they are brought back to the top of the page. */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={mylogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Karl Richer &nbsp;
            <span className="sm:block hidden">| 3D Portfolio</span>
          </p>
        </Link>

        {/* This is the list of links that are shown at the right of my Navbar.  */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* This div contains the icon used for a dropdown menu of our links which is shown on smaller screens. */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* This div contains the dropdown menu shown when the icon is clicked on smaller screens. */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* The dropdown menu shows this list, which shows the same links that are always shown on bigger screens. */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
