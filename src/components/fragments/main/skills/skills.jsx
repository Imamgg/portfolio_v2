import React, { useState } from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: "/Image/html.png",
    },
    {
      name: "CSS",
      icon: "/Image/css.png",
    },
    {
      name: "JavaScript",
      icon: "/Image/javascript.png",
    },
    {
      name: "Python",
      icon: "/Image/python.png",
    },
    {
      name: "Next.js",
      icon: "/Image/nextjs.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/Image/tailwind.png",
    }
  ];

  const tools = [
    {
      name: "npm",
      icon: "/Image/npm.png",
    },
    {
      name: "GitHub",
      icon: "/Image/github.png",
    },
    {
      name: "Git",
      icon: "/Image/git.png",
    },
    {
      name: "Vscode",
      icon: "/Image/vscode.png",
    }
  ];

  const [activeTab, setActiveTab] = useState("Skill");
  const items = activeTab === "Skill" ? skills : tools;

  return (
    <div>
      <div className="mb-4 font-medium">
        <button
          className={`px-4 py-2 mr-4 rounded ${
            activeTab === "Skill"
              ? "bg-purple-500 bg-opacity-30 text-purple-300 hover:text-amber-50"
              : "text-gray-500 hover:text-amber-50"
          }`}
          onClick={() => setActiveTab("Skill")}
        >
          Languages
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "tools"
              ? "bg-purple-500 bg-opacity-30 text-purple-300 hover:text-amber-50"
              : "text-gray-500 hover:text-amber-50"
          }`}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-32">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded cursor-pointer border bg-slate-900 bg-opacity-50 border-purple-400 p-2 hover:bg-purple-200 hover:bg-opacity-10 md:gap-3 md:px-3"
            >
              <div className="flex h-12 w-12 items-center justify-center p-0 md:h-16 md:w-16 md:p-2">
                <Image
                  src={item.icon}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="h-[65%] w-[65%] md:h-[85%] md:w-[85%]"
                />
              </div>
              <div className="text-sm md:text-lg">
                <p className="font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
