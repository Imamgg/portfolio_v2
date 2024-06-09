import Nav from "@/components/fragments/navbar";
import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import WavesContact from "@/components/elements/waves/wavescontact";
import Fieldform from "@/components/fragments/form/fieldform";
import Image from "next/image";

const Contact = () => {
  const [selected, setSelected] = useState("instagram");
  const profiles = {
    instagram: "/image/ig.jpg",
    github: "/image/github.jpg",
    twitter: "/image/x.jpg",
  };

  const icons = {
    instagram: <FaInstagram />,
    github: <FaGithub />,
    twitter: <FaXTwitter />,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex justify-evenly mt-16 pt-8">
          <div>
            <h2 className="text-4xl font-bold mb-3 text-white">Contact Me</h2>
            <div className="relative flex justify-between pl-6">
              <div>
                {Object.keys(profiles).map((key) => (
                  <div
                    key={key}
                    className="cursor-pointer relative font-bold text-lg mt-3"
                  >
                    <div
                      className="flex items-center h-10 gap-x-1 before:ease relative w-40 overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white hover:text-purple-500 before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40"
                      onClick={() => setSelected(key)}
                    >
                      <span>{icons[key]}</span>
                      <span>{key.toUpperCase()}</span>
                    </div>
                    {selected === key && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 h-10 bg-purple-500 rounded"></div>
                    )}
                  </div>
                ))}
              </div>
              <Image
                className="h-[500px] w-[280px] ml-2 rounded-xl shadow-2xl transition-all duration-700 hover:shadow-purple-500 hover:scale-105 hover:rotate-6 hover:translate-x-6 hover:translate-y-6 border border-purple-500"
                src={profiles[selected]}
                alt="profile"
                width={300}
                height={300}
              />
            </div>
          </div>
          <Fieldform />
        </div>
        <WavesContact />
      </div>
    </>
  );
};

export default Contact;
