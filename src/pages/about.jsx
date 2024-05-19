import Nav from "@/components/fragments/navbar";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";


const About = () => {
  return (
    <>
      <Nav />
      <div className="h-screen px-8 mx-auto grid place-items-center text-center text-white">
      <div>
        <Cog8ToothIcon className="h-20 w-20 mx-auto" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-7 !text-2xl md:text-3xl max-w-xl mx-auto !leading-snug"
        >
          I will solve this soon
        </Typography>
        <Typography className="!mt-4 md:max-w-2xl text-[18px] font-normal text-gray-500">
          -_-
        </Typography>
      </div>
    </div>
    </>
  )
}

export default About;