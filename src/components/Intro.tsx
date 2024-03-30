"use client";
import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import Img from "@/assets/news24.gif";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <Box className="min-h-screen flex justify-around items-center w-full">
      <Box className="text-white">
        <Box>Hello World!</Box>
        <Box className="text-[50px] font-bold">I'm Shubhanshu.</Box>
        <Box className="text-[50px] font-bold">
          I'm a{" "}
          <Typewriter
            words={["M.E.R.N Developer", "Full-Stack Developer"]}
            loop={0} // 0 for infinite loop
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={100}
          />{" "}
          <Cursor />.
        </Box>
        <Box className="text-[50px] font-semibold">From India.</Box>
        <Box className="flex items-center gap-20">
          <Box className="py-3 border px-10 text-lg text-white border-white rounded-full">
            Contact Me
          </Box>
          <Box className="py-3 border px-10 text-lg text-white border-white rounded-full">
            Resume
          </Box>
        </Box>
      </Box>
      <Box className="">
        <Image src={Img} alt="a" height={800} width={800} />
      </Box>
    </Box>
  );
};

export default Intro;
