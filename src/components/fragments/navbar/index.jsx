import Menu from "./menu";
import Sosmed from "./sosmed";
import Hamburger from "./hamburger";

const Nav = () => {

  return (
    <nav className="flex lg:justify-around justify-between px-4 items-center w-full h-16 text-white bg-slate-950 z-50 sticky top-0 right-0 left-0">
      <h2 className="text-2xl font-semibold text-main">Imamgg();</h2>
      <Menu />
      <Sosmed />
      <Hamburger />
    </nav>
  );
};

export default Nav;
