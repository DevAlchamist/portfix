"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import figma from "@/assets/icons/figma.svg";
import git from "@/assets/icons/git.svg";
import html from "@/assets/icons/html.svg";
import js from "@/assets/icons/javascript.svg";
import mongo from "@/assets/icons/mongo.svg";
import node from "@/assets/icons/nodejs.svg";
import react from "@/assets/icons/react.svg";
import Next from "@/assets/icons/image.png";
import redux from "@/assets/icons/redux.svg";
import ts from "@/assets/icons/typescript.svg";
import css from "@/assets/icons/Tailwind CSS.svg";
import con from "@/assets/icons/favicon.png";
import vs from "@/assets/icons/vscode.svg";
import React, { useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={html} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">HTML/CSS</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={js} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">JavaScript</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image
        src={ts}
        alt="as"
        height={75}
        width={75}
        className=" my-5"
      />
      <Box className="text-4xl font-bold">TypeScript</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={Next} alt="as" height={90} width={90} className=" my-5" />
      <Box className="text-4xl font-bold">Next Js</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={react} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">React</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={redux} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">Redux</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={con} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">Convex/Clerk</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={mongo} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">MongoDB</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={css} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">Tailwind</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={git} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">GitHub</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={node} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">Node js</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={figma} alt="as" height={75} width={75} className="my-5" />
      <Box className="text-4xl font-bold">Figma</Box>
      <Box>
        Proficient in creating responsive and visually appealing we layouts
        using HTML and CSS{" "}
      </Box>
    </Box>,
    <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
      <Image src={vs} alt="as" height={75} width={75} className="my-5" />
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
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={75}
          />
          <Cursor />
        </Box>
        <Box className="">
          <IconButton className="mx-2 bg-[#121924]" onClick={prevSkill}>
            <ChevronLeft className="text-white " />
          </IconButton>
          <IconButton className="mx-2 bg-[#121924]" onClick={nextSkill}>
            <ChevronRight className="text-white " />
          </IconButton>
        </Box>
      </Box>
      <Box className="w-[80%] overflow-hidden">
        <motion.div
          className="flex gap-5 my-10"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 350 }} // Adjust the multiplier based on the width of your skill items
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className=" px-6 py-28 rounded-xl bg-[#121924]"
              whileHover={{ y: -20 }} // Move the skill card upward on hover
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
