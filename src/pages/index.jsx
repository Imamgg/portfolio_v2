import React,{useEffect} from "react";
import Nav from "@/components/fragments/navbar";
import avatar from "@/../public/image/yoru.jpg";
import { ReactTyped } from "react-typed";
import Waves from "@/components/elements/waves/waves";
import { FcReuse } from "react-icons/fc";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Nav />
      <div className="w-full h-full">
        <div className="text-white flex flex-wrap-reverse justify-center items-center h-screen gap-4 relative mt-20 lg:mt-0">
          < Waves />
          <div className="flex flex-col justify-start lg:justify-center lg:items-start items-center w-full lg:w-1/4 h-80 gap-2">
            <h3 data-aos="fade-down" className="text-xl font-semibold text-main">
              {`Hello World, I'm`}
            </h3>
            <h1 data-aos="fade-right" data-aos-duration="900" className="text-6xl font-bold">Imam Syafii</h1>
            <ReactTyped
              className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1323f2]"
              strings={["Web Developer", "Fullstack Mobile", "Informatics Student"]}
              typeSpeed={150}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
            <p data-aos="fade-left" data-aos-duration="900" className="flex items-center font-semibold text-sm ">
              Welcome to My personal website.
              <FcReuse size={22} />
            </p>
          </div>
          <div data-aos="fade-up">
            <Image
              className="lg:hidden rounded-full w-[300px] drop-shadow-shadow"
              src={avatar}
              width={400}
              height={450}
              alt="Profile"
            />
            <Image
              className="hidden relative rounded-full lg:flex flex-col -z-10 drop-shadow-shadow"
              src={avatar}
              layout="responsive"
              objectFit="cover"
              width={100}
              height={100}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}
