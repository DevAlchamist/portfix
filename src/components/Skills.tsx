"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">HTML/CSS</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">JavaScript</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">TypeScript</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">Next Js</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">React</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">Redux</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
        <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
        <Box className="text-4xl font-bold">Convex/Clerk</Box>
        <Box>
          Proficient in creating responsive and visually appealing we layouts
          using HTML and CSS{" "}
        </Box>
      </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">MongoDB</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">Tailwind</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">GitHub</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">Node js</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">Figma</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-32 rounded-xl bg-[#121924]">
      <Box className="text-4xl font-bold">VS Code</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
  ]; // Add your skills here

  const nextSkill = () => {
    setCurrentIndex((currentIndex + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentIndex((currentIndex - 1 + skills.length) % skills.length);
  };

  return (
    <Box className="flex flex-col text-white items-center justify-center p-10 bg-[#070d1a]">
      <Box className="flex w-[80%] items-center justify-between">
        <Box className="text-[50px] font-bold">
          <span className="text-blue-500">_</span>
          <Typewriter
            words={["Skills"]}
            loop={0} // 0 for infinite loop
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={100}
          />
          <Cursor />
        </Box>
        <Box className="">
          <IconButton className="mx-2 bg-[#121924]">
            <ChevronLeft className="text-white " onClick={prevSkill} />
          </IconButton>
          <IconButton className="mx-2 bg-[#121924]">
            <ChevronRight className="text-white " onClick={nextSkill} />
          </IconButton>
        </Box>
      </Box>
      <Box className="w-[80%] overflow-hidden">
        <motion.div
          className="flex gap-5"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 350 }} // Adjust the multiplier based on the width of your skill items
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className=" px-6 py-32 rounded-xl bg-[#121924]"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skills;
