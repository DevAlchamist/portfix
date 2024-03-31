"use client";
import { Box, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import movix from "@/assets/icons/cine-verse-app.jpeg";
import Task from "@/assets/icons/task-mate-app.jpeg";
import { Cursor, Typewriter } from "react-simple-typewriter";

const page = () => {
  const Images = [
    {
      image: movix,
      alt: "pr1",
      translate: "custom",
      name: "Cine-Verse",
      date: "2 Jan, 2024",
    },
    {
      image: Task,
      alt: "pr2",
      translate: "0",
      height: "full",
      name: "Task-Mate",
      date: "12 Feb, 2024",
    },
  ];
  return (
    <Box className=" bg-[#1e1842] h-full">
      <Box>
        {" "}
        <Box className="flex items-center justify-center px-10 py-20">
          <Box className="w-[80%]">
            {" "}
            <Box className="text-[40px] text-white font-bold">
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
            <Box>
              <Box className="grid-cols-1 my-10 grid gap-5">
                {Images.map((img) => (
                  <>
                    <Divider variant="fullWidth" className="border-white" />
                    <Box className="col-span-1 flex justify-start items-start gap-10">
                      <Box className="relative col-span-3 w-[343px] lg:w-[632px] shadow-2xl overflow-hidden h-[400px] rounded-xl ">
                        {img.height && (
                          <div className="w-full z-10 h-full absolute inset-0 hover:bg-gradient-to-t hover:from-gray-600 hover:to-transparent"></div>
                        )}
                        <Box className="absolute z-20  left-1 bottom-1 text-xl font-bold rounded-lg text-white py-1 px-5 ">
                          Visit
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
                      <Box className="text-white col-span-5">
                        <Box className="text-base font-normal">{img.date}</Box>
                        <Box className="text-4xl font-semibold">{img.name}</Box>
                      </Box>
                    </Box>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
