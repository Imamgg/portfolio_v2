import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Hamburger = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Portfolio",
    //   path: "/portfolio",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const [isopen, setIsopen] = useState(false);
  const toggleMenu = () => {
    setIsopen(!isopen);
  };
  
  return (
    <div className="flex lg:absolute z-50">
      <div onClick={toggleMenu} className="block lg:hidden cursor-pointer">
        {isopen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <ul
        className={
          isopen
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-main m-4">Imamgg.</h1>
        {navItems.map((item, index) => (
          <li key={index} className="text-white text-xl m-4">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;