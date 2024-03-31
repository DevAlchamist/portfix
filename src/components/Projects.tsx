"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import movix from "@/assets/icons/cine-verse-app.jpeg";
import Task from "@/assets/icons/task-mate-app.jpeg";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const Images = [
    {
      image: movix,
      alt: "pr1",
      translate: "custom",
    },
    {
      image: Task,
      alt: "pr2",
      translate: "0",
      height: "full",
    },
  ];
  return (
    <Box className="flex items-center justify-center px-10 py-20">
      <Box className="w-[80%]">
        {" "}
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
            <Box className="col-span-1 border-white border-2 w-full overflow-hidden h-[430px] rounded-xl ">
              <Image
                src={img.image}
                alt={img.alt}
                className={`w-full h-${img.height} transform hover:translate-y-${img.translate} duration-1000 ease-linear`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
