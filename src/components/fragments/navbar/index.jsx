import Menu from "./menu";

const Nav = () => {
  return (
    <div className="w-full h-16 bg-slate-950 flex justify-around items-center fixed top-0 left-0 right-0 z-50">
      <h2 className="text-2xl font-bold text-purple-400">Imamgg;</h2>
      <Menu />
    </div>
  );
};

export default Nav;
