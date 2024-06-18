import Nav from "@/components/fragments/navbar";
import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Fieldform from "@/components/fragments/main/form/fieldform";

const Contact = () => {
  const profiles = [
    {
      title: "instagram",
      image: "/image/ig.jpg",
      icon: <FaInstagram />,
    },
    {
      title: "github",
      image: "/image/github.jpg",
      icon: <FaGithub />,
    },
    {
      title: "twitter",
      image: "/image/x.jpg",
      icon: <FaXTwitter />,
    },
  ];
  const [selected, setSelected] = useState("instagram");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto flex flex-col mt-20">
        <div className="flex justify-evenly items-center md:flex-row flex-col md:pb-36 pb-4">
          <main className="px-4">
            <h2 className="md:text-4xl text-3xl font-bold mb-3 text-white">Contact Me</h2>
            <div className="flex">
              <div className="pl-6">
                {profiles.map((profile, index) => (
                  <div key={index} className="cursor-pointer relative">
                    <div
                      className="flex items-center h-10 md:w-40 w-28 gap-1 before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white hover:text-purple-500 before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40"
                      onClick={() => setSelected(profile.title)}
                    >
                      <span>{profile.icon}</span>
                      <span className="md:text-lg text-sm font-bold">
                        {profile.title.toUpperCase()}
                      </span>
                    </div>
                    {selected === profile.title && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 h-10 bg-purple-500 rounded"></div>
                    )}
                  </div>
                ))}
              </div>
              <Image
                className="md:h-[500px] md:w-[300px] h-[400px] w-[250px] ml-2 rounded-xl shadow-2xl transition-all duration-700 hover:shadow-purple-500 hover:scale-105 md:hover:translate-x-6 hover:translate-y-6 border border-zinc-700"
                src={
                  profiles.find((profile) => profile.title === selected).image
                }
                alt="profile"
                width={300}
                height={300}
              />
            </div>
          </main>
          <Fieldform />
        </div>
      </div>
    </>
  );
};

export default Contact;
