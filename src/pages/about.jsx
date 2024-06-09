import Nav from "@/components/fragments/navbar";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto flex flex-col mt-16">
        <div className="bg-zinc-900 px-12 py-8 border border-purple-500 rounded-3xl">
          <div className="relative">
            <h1 className="text-2xl font-bold text-white mb-5">About Me</h1>
            <div className="w-96 h-[3px] block bg-purple-600 absolute top-[50%] left-[8rem]"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <Image
                className="w-8/12 rounded-full"
                src="/image/yoru.jpg"
                width={400}
                height={400}
                alt="Profile"
              />
            </div>
            <div className="w-7/12 text-amber-50 text-xl text-justify">
              <p>
                Saya seorang mahasiswa yang menekuni bidang Teknik Informatika
                dengan fokus pada pengembangan front-end dan back-end. Saya
                memiliki tekad yang kuat untuk terus belajar dan mengasah
                keterampilan saya demi mencapai kesempurnaan melalui perjalanan
                pendidikan saya, saya terus mengasah keterampilan dan
                kreativitas dalam bidang ini. Selamat datang di dunia saya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
