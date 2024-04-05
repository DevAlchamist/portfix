"use client";
import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import Img from "@/assets/news24.gif";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <Box className="flex items-center h-full justify-center">
    <Box className="lg:h-screen h-[300px] flex justify-between items-center w-[80%]">
      <Box className="text-white">
        <Box>Hello World!</Box>
        <Box className="text-[20px] lg:text-[50px] font-bold">I am Shubhanshu.</Box>
        <Box className="text-[20px] lg:text-[50px] font-bold">
          I am a 
          <Typewriter
            words={[" M.E.R.N Developer", " Full-Stack Developer"]}
            loop={0} // 0 for infinite loop
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={100}
          />
          <Cursor />.
        </Box>
        <Box className="text-[20px] lg:text-[50px] font-semibold">From India.</Box>
        <Box className="flex items-center gap-5 lg:gap-20">
          <Box className="py lg:py-3 border px-2 lg:px-10 text-xs lg:text-lg text-white border-white rounded-full">
            Contact Me
          </Box>
          <Box className="py lg:py-3 border px-2 lg:px-10 text-xs lg:text-lg text-white border-white rounded-full">
            Resume
          </Box>
        </Box>
      </Box>
      <Box className="hidden lg:flex items-center">
        <Image src={Img} alt="a" height={800} width={800} />
      </Box>
    </Box>
            </Box>
  );
};

export default Intro;
