"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import shop1 from "@/assets/Shop-Pulse1.jpeg";
import shop2 from "@/assets/Shop-Pulse2.jpeg";
import shop3 from "@/assets/Shop-Pulse3.jpeg";
import shop4 from "@/assets/Shop-Pulse4.jpeg";
import React from "react";
import movix from "@/assets/Cine-Verse1.jpeg";
import Task from "@/assets/icons/task-mate-app.png";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "../app/globals.css";
const Projects = () => {
  const Images = [
    {
      image: [shop1, shop2, shop3, shop4],
      alt: "pr0",
      name: "Shop-Pulse",
    },
    {
      image: [movix],
      alt: "pr1",
      name: "Cine-Verse",
    },
    {
      image: [Task],
      alt: "pr2",
      name: "Task-Mate",
    },
    {
      alt: "none",
      name: "More",
    },
  ];

  return (
    <Box className="flex items-center justify-center px-10 py-20">
      <Box className="w-full lg:w-[80%]">
        <Box className="text-[20px] mb-4 lg:text-[50px] text-white font-bold">
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
            <>
              <Box
                key={img.alt}
                className="relative col-span-2 lg:col-span-1  w-full overflow-hidden h-fit lg:h-[343px] rounded-xl"
                style={{ position: "relative" }}
              >
                <Box className="z-0">
                  {img.image && (
                    <Image
                      src={img.image[0]}
                      alt={img.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </Box>
                <Box
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 ${
                    img.image ? "opacity-0 hover:opacity-100" : ""
                  }`}
                  style={{ position: "absolute" }}
                >
                  <Box className="text-white font-semibold text-lg p-3">
                    {img.name}
                  </Box>
                </Box>
                {img.image && (
                  <Box className="absolute right-1 top-1 bg-red-500 rounded-lg text-white py-1 px-5">
                    Web
                  </Box>
                )}
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
