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

const Contact = () => {
  const [selected, setSelected] = useState("instagram");
  const profiles = {
    instagram: ig.src,
    github: github.src,
    twitter: x.src,
    tiktok: tiktok.src,
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
      <div className="h-screen w-full text-white relative">
        <h2 data-aos="fade-up" className="text-3xl ml-40 font-bold">
          Contact Me
        </h2>
        <div className="flex justify-evenly pt-6 w-[95%]">
          <div className="w-1/4 flex relative gap-7">
            <div className="space-y-3">
              {Object.keys(profiles).map((key) => (
                <div
                  key={key}
                  className="cursor-pointer relative font-bold text-lg mt-3"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="flex items-center h-10 gap-x-2 before:ease relative w-40 overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-main hover:before:-translate-x-40"
                    onClick={() => setSelected(key)}
                  >
                    <span className="relative">{icons[key]}</span>
                    <span className="relative">{key.toUpperCase()}</span>
                  </div>

                  {selected === key && (
                    <div className="absolute right-[-1rem] top-0 bottom-0 w-1 h-12 bg-main rounded"></div>
                  )}
                </div>
              ))}
            </div>
            <img
              data-aos="fade-right"
              data-aos-duration="900"
              src={profiles[selected]}
              alt="Profile"
              className="h-[550px] object-cover rounded-xl"
            />
          </div>

          <div className="w-[35%] flex flex-col pr-32 z-50">
            <h2
              data-aos="fade-right"
              data-aos-duration="900"
              className="text-2xl font-bold mb-4"
            >
              Have something to discuss? Send me a message and let's talk.
            </h2>
            <form className="space-y-4">
              <div data-aos="fade-up" data-aos-duration="900">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-slate-950 border border-gray-700 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="900">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  className="w-full p-3 bg-slate-950 border border-gray-700 rounded"
                  placeholder="From"
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="900">
                <label
                  className="block text-white mb-2 font-bold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-slate-950 border border-gray-700 rounded"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                data-aos="fade-right"
                data-aos-duration="900"
                type="submit"
                className="w-full p-3 bg-main hover:bg-indigo-950 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <WavesContact />
      </div>
    </>
  );
};

export default Contact;
