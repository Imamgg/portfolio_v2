import Nav from "@/components/fragments/navbar";
import React, { useState, useEffect } from "react";
import ig from "@/../public/image/ig.jpg";
import x from "@/../public/image/x.jpg";
import tiktok from "@/../public/image/tiktok.jpg";
import github from "@/../public/image/github.jpg";
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
    instagram: ig,
    github: github,
    twitter: x,
    tiktok: tiktok,
  };

  const icons = {
    instagram: <FaInstagram />,
    github: <FaGithub />,
    twitter: <FaXTwitter />,
    tiktok: <FaTiktok />,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <div className="h-screen w-full text-white relative mt-4">
        <h2
          data-aos="fade-up"
          className="text-4xl lg:pl-40 pl-5 font-bold mb-3"
        >
          Contact Me
        </h2>
        <div className="flex justify-between w-[90%] flex-col lg:flex-row">
          <div className="w-full flex justify-evenly relative lg:gap-6 gap-0 -ml-4">
            <div>
              {Object.keys(profiles).map((key) => (
                <div
                  key={key}
                  className="cursor-pointer relative font-bold lg:text-lg mt-3 text-base pl-11"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="flex items-center lg:h-10 h-6 gap-x-2 before:ease relative w-40 overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white hover:text-main before:opacity-10 before:duration-700 hover:shadow-main hover:before:-translate-x-40"
                    onClick={() => setSelected(key)}
                  >
                    <span className="relative">{icons[key]}</span>
                    <span className="relative">{key.toUpperCase()}</span>
                  </div>

                  {selected === key && (
                    <div className="hidden lg:flex absolute right-[-1rem] top-0 bottom-0 w-1 h-12 bg-main rounded"></div>
                  )}
                  {selected === key && (
                    <div className="lg:hidden flex absolute right-[30px] top-0 bottom-0 w-1 h-12 bg-main rounded"></div>
                  )}
                </div>
              ))}
            </div>
            <Image
              data-aos="fade-right"
              data-aos-duration="900"
              className="lg:h-[500px] h-[400px] w-[270px] rounded-xl lg:-ml-36 -ml-6"
              src={profiles[selected]}
              alt="profile"
            />
          </div>
          <Fieldform />
          {/* <WavesContact /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
