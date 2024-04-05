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
import con from "@/assets/icons/Logo-2048-white.png";
import vs from "@/assets/icons/vscode.svg";
import React, { useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useGesture } from "react-use-gesture";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    {
      img: html,
      title: "HTML/CSS",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: js,
      title: "JavaScript",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: ts,
      title: "TypeScript",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: Next,
      title: "NextJs",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: react,
      title: "ReactJs",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: redux,
      title: "Redux",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: con,
      title: "Convex",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: mongo,
      title: "MongoDB",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: css,
      title: "Tailwind",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: git,
      title: "GitHub",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: node,
      title: "NodeJs",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: figma,
      title: "Figma",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
    {
      img: vs,
      title: "VsCode",
      Desc: "Proficient in creating responsive and visually appealing we layouts using HTML and CSS",
    },
  ]; // Add your skills here

  const nextSkill = () => {
    setCurrentIndex((currentIndex + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentIndex((currentIndex - 1 + skills.length) % skills.length);
  };

  // Gesture handler
  const bind = useGesture({
    onDrag: ({ direction: [xDir], distance, cancel }) => {
      if (distance > window.innerWidth / 4) {
        cancel();
        if (xDir > 0) {
          setCurrentIndex((currentIndex - 1 + skills.length) % skills.length);
        } else {
          setCurrentIndex((currentIndex + 1) % skills.length);
        }
      }
    },
  });

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
          className="cursor-pointer flex gap-5 my-10"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 350 }} // Adjust the multiplier based on the width of your skill items
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          {...bind()} // Bind the gesture handler
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className=" px-6 py-28 rounded-xl bg-[#121924]"
              whileHover={{ y: -20 }} // Move the skill card upward on hover
            >
              <Box className="w-[350px] px-6  py-14 rounded-xl bg-[#121924]">
                <Image
                  src={skill.img}
                  alt="as"
                  height={75}
                  width={75}
                  className="my-5"
                />
                <Box className="text-4xl font-bold">{skill.title}</Box>
                <Box>{skill.Desc}</Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skills;
