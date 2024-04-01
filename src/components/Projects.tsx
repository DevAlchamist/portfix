"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import movix from "@/assets/icons/cine-verse-app.png";
import Task from "@/assets/icons/task-mate-app.png";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const Images = [
    {
      image: movix,
      alt: "pr1",
      translate: "custom",
      name: "Cine-Verse",
    },
    {
      image: Task,
      alt: "pr2",
      translate: "0",
      height: "full",
      name: "Task-Mate",
    },
  ];
  return (
    <Box className="flex items-center justify-center px-10 py-20">
      <Box className="w-[80%]">
        
        <Box className="text-[50px] text-white font-bold">
          <span className="text-blue-500">_</span>
          <Typewriter
            words={["Projects"]}
            loop={0} // 0 for infinite loop
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={75}
          />
          <Cursor />
        </Box>
        <Box className="grid-cols-2 grid gap-5">
          {Images.map((img) => (
            <Box key={img.alt} className="relative col-span-1 border-white border-2 w-full overflow-hidden h-[430px] rounded-xl ">
              {img.height && (
                <div className="w-full z-10 h-full absolute inset-0 hover:bg-gradient-to-t hover:from-gray-600 hover:to-transparent"></div>
              )}
              <Box className="absolute z-20  left-1 bottom-1 text-4xl font-bold rounded-lg text-white py-1 px-5 ">
                {img.name}
              </Box>
              <Image
                src={img.image}
                alt={img.alt}
                className={`w-full z-0 h-${img.height} transform hover:translate-y-${img.translate} duration-1000 ease-linear`}
              />
              <Box className="absolute right-1 top-1 bg-red-500 rounded-lg text-white py-1 px-5 ">
                Web
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
