import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  const pathName = usePathname();
  const indicatorRef = useRef(null);

  const updateIndicator = () => {
    const activeLink = document.querySelector(`a[href="${pathName}"]`);
    if (activeLink && indicatorRef.current) {
      const { offsetWidth, offsetLeft } = activeLink;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    updateIndicator();
    const handleResize = () => {
      updateIndicator();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathName]);

  return (
    <div className="hidden lg:flex lg:relative">
      <ul className="flex justify-evenly gap-5 font-semibold text-base text-slate-400">
        <li className={pathName === "/" ? "text-white" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathName === "/about" ? "text-white" : ""}>
          <Link href="/about">About</Link>
        </li>
        {/* <li className={pathName === "/portfolio" ? "text-white" : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li> */}
        <li className={pathName === "/contact" ? "text-white" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <span
        ref={indicatorRef}
        className="absolute bottom-0 h-1 bg-main"
      />
    </div>
  );
};

export default Menu;
