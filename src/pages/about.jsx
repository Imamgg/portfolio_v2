import Profile from "@/components/fragments/main/profile/profile";
import Skills from "@/components/fragments/main/skills/skills";
import Nav from "@/components/fragments/navbar";
import React from "react";

const About = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto flex flex-col mt-20">
        <Profile />
        <div className="px-12 py-10 text-amber-50">
          <div className="relative">
            <h1 className="text-2xl font-bold text-white mb-5 ml-24">{'Skills</>'}</h1>
            <div className="w-20 h-[3px] block bg-purple-600 absolute top-[50%] left-0 rounded-full"></div>
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;
