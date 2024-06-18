import React, { useEffect } from "react";
import Nav from "@/components/fragments/navbar";
import { ReactTyped } from "react-typed";
import { FcReuse } from "react-icons/fc";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Waves from "@/components/elements/waves/waves";

export default function Home() {
  const title = [
    "Frontend Developer",
    "Backend Developer",
    "Informatics Student",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto flex flex-col">
        <Waves />
        <div className="flex justify-evenly items-center md:flex-row flex-col-reverse h-screen md:mt-0 mt-8">
          <div className="flex flex-col gap-2 font-semibold md:text-left text-center">
            <h3 className="text-xl text-purple-600">{`Hello World, I'm`}</h3>
            <h1 className="text-6xl font-bold text-white">Imam Syafii</h1>
            <ReactTyped
              className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1323f2]"
              strings={title}
              typeSpeed={130}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
            <p className="text-sm text-amber-50">
              Welcome to My personal website.
              <FcReuse size={22} className="inline-block" />
            </p>
          </div>
          <div>
            <Image
              className="rounded-full drop-shadow-shadow md:max-w-[400px] max-w-[300px]"
              src="/image/profil.jpg"
              width={400}
              height={100}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}
