"use client";
import { Box } from "@mui/material";
import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Projects = () => {
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
          <Box className="col-span-1 border-white border-2 w-full h-[430px] rounded-xl "></Box>
          <Box className="col-span-1 border-white border-2 w-full h-[430px] rounded-xl "></Box>
          <Box className="col-span-1 border-white border-2 w-full h-[430px] rounded-xl "></Box>
          <Box className="col-span-1 border-white border-2 w-full h-[430px] rounded-xl "></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
