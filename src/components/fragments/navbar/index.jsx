import Menu from "./menu";
import HamburgerMenu from "@/components/elements/hamburger/hamburger";

const Nav = () => {
  return (
    <div className="w-full h-16 bg-slate-950 flex justify-around items-center fixed top-0 left-0 right-0 z-50 md:px-0 px-5">
      <h2 className="text-2xl font-bold text-purple-400">Imamgg;</h2>
      <Menu />
      <HamburgerMenu />
    </div>
  );
};

export default Nav;
