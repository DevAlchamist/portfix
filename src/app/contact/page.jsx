"use client";
import { Mail, Map } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
    <Box>
      <Box className="flex items-center justify-center h-[586px] lg:h-[789px] py-24 bg-[#1e1842] w-full">
        <Box className="flex w-[75%] h-[75%] items-center gap-10">
          <Box className="w-full h-full">
            <Box className="text-[20px] lg:text-[50px] text-white font-bold">
              <span className="text-blue-500">_</span>
              <Typewriter
                words={["Get In Touch"]}
                loop={0} // 0 for infinite loop
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={75}
              />
              <Cursor />
            </Box>
            {/* further code */}
            <Box className="text-white flex lg:flex-row flex-col gap-10">
              <Box className="flex items-center gap-5">
                <Map className=" h-4 w-4 lg:h-8 lg:w-8 
                transition-transform transform duration-200 ease-in-out hover:scale-110 " />
                <Box>
                  <Box className="text-sm lg:text-xl font-semibold">Location</Box>
                  <Box className="text-xs lg:text-base font-light">Delhi, India</Box>
                </Box>
              </Box>
              <Box className="flex items-center gap-5">
                <Mail className="transition-transform transform duration-200 ease-in-out hover:scale-110 h-4 w-4 lg:h-8 lg:w-8" />
                <Box>
                  <Box className="text-sm lg:text-xl font-semibold">Email</Box>
                  <Box className="text-xs lg:text-base font-light">
                    nayakshubhanshu060705@gmail.com
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
