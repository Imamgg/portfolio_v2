import { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex z-50 md:hidden text-white">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      <div
        className={`fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-800 bg-gradient-to-b from-black to-gray-900 transition-transform ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-4xl font-extrabold text-purple-500 m-6">Imamgg;</h1>
        <nav className="mt-10">
          {navItems.map((item, index) => (
            <ul key={index} className="text-lg font-medium mx-6 my-4">
              <li className="hover:text-purple-500 transition-colors duration-200">
                <Link href={item.path} className="flex py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                    {item.name}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;