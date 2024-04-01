"use client";
import React from "react";
import "@/app/about/page.css";
import Image from "next/image";
import Img from "@/assets/Firefly an indian programmer 's profile pic in 3d avatar wearing hoodie and a cap 27854.jpg";
import { Box } from "@mui/material";
import { Cursor, Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
    <Box className="flex items-center justify-center h-full py-[194.5px] bg-[#1e1842] w-full">
      <Box className="flex w-[75%] items-center justify-around gap-10">
        <Box className="card">
          <Image src={Img} alt="img" className="h-full w-full" />
        </Box>
        <Box className="w-[50%] h-full">
          <Box className="text-[50px] text-white font-bold">
            <span className="text-blue-500">_</span>
            <Typewriter
              words={["About Me"]}
              loop={0} // 0 for infinite loop
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={75}
            />
            <Cursor />
          </Box>
          <Box className="text-white text-lg">
            Hello There, My self Shubhanshu Nayak, a MERN stack developer,
            currently enriching my knowledge with a BCA degree from Amity
            University. My journey in the MERN stack is a testament to my
            passion for problem-solving and collaboration, making me a valuable
            asset in any development team. With a knack for crafting interactive
            web applications, I masterfully weave together React, Node.js,
            Express, MongoDB, and cutting-edge libraries like Convex, Clerk,
            Live Blocks, Next.js, Tailwind, MUI, and Bootstrap. My proficiency
            in JavaScript and TypeScript, coupled with a keen eye for design,
            allows me to create seamless user experiences. My work is a blend of
            creativity and technical prowess, showcasing my ability to develop
            dynamic web applications and collaborate on projects using GitHub.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
