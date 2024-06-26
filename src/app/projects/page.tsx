"use client";
import { Box, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import next from "@/assets/icons/next-16-svgrepo-com.svg";
import react from "@/assets/icons/react-svgrepo-com.svg";
import css from "@/assets/icons/scss-svgrepo-com.svg";
import redux from "@/assets/icons/redux-svgrepo-com.svg";
import movix from "@/assets/Cine-Verse1.jpeg";
import stripe from "@/assets/icons8-stripe.svg";
import convex from "@/assets/icons/Logo-2048-white.png";
import shop1 from "@/assets/Shop-Pulse1.jpeg";
import ts from "@/assets/icons/typescript.svg";
import tail from "@/assets/icons/Tailwind CSS.svg";
import Live from "@/assets/icons/live-location-svgrepo-com.svg";
import Task from "@/assets/icons/task-mate-app.png";
import { Cursor, Typewriter } from "react-simple-typewriter";
import NotToday from "@/components/NotToday";

const Page = () => {
  const Images = [
    {
      image: shop1,
      alt: "pr1",
      name: "Shop-Pulse",
      date: "2 Dec, 2023",
      desc: "Shop-Pulse is an e-commerce platform leveraging React, Tailwind CSS, Redux, and Stripe for efficient operations. It boasts a seamless shopping journey with a modern UI and secure payment handling. React's component-based structure. Redux centralizes state management, enhancing performance and scalability. Stripe's integration guarantees reliable and secure transactions, instilling customer confidence.",
      tech: [
        { img: react, title: "React" },
        { img: tail, title: "Tailwind" },
        { img: redux, title: "Redux" },
        { img: stripe, title: "Stripe" },
      ],
    },
    {
      image: Task,
      alt: "pr2",
      name: "Task-Mate",
      desc: "Task-Mate is a real-time collaboration platform built with Next.js, TypeScript, and Convex Clerk, enabling users to exchange tasks and create organizations in real-time. It features a freehand drawing library, allowing for dynamic and interactive task management. Users can invite others, assign roles, and engage in collaborative workspaces, facilitating efficient project management and teamwork.",
      date: "12 Feb, 2024",
      tech: [
        { img: next, title: "Next" },
        { img: ts, title: "TS" },
        { img: tail, title: "Tailwind" },
        { img: convex, title: "Convex" },
        { img: Live, title: "LiveBlocks" },
      ],
    },
    {
      image: movix,
      alt: "pr1",
      name: "Cine-Verse",
      date: "2 Jan, 2024",
      desc: "Cine-Verse is an online platform that serves as a comprehensive database for film and television content, offering detailed information on movies, TV shows, cast, production crew, ratings, genres, and related videos. It encompasses a wide range of entertainment services, including digital cinema, streaming channels, content marketing, and distribution, catering to a broad audience interested in visual entertainment media.",
      tech: [
        { img: react, title: "React" },
        { img: css, title: "SCSS" },
        { img: redux, title: "Redux" },
      ],
    },
  ];

  return (
    <Box className="bg-[#1e1842] h-full">
      <NotToday />
      <Box>
        <Box className="flex items-center justify-center px-5 lg:px-10 py-20">
          <Box className="w-full lg:w-[80%]">
            <Box className="text-[20px] lg:text-[40px] text-white font-bold">
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
            <Divider variant="fullWidth" className="my-5 border-white" />
            <Box>
              <Box className="grid-cols-1 my-10 grid gap-5">
                {Images.map((img) => (
                  <Box key={img.name}>
                    <Box className="col-span-1 grid grid-cols-8 justify-start items-start gap-10">
                      <Box className="relative lg:col-span-4 col-span-8 shadow-2xl overflow-hidden h-fit lg:h rounded-xl">
                        <Image
                          src={img.image}
                          alt={img.alt}
                          className={`w-full z-0 h-fit  duration-1000 ease-linear`}
                        />
                        <Box
                          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 hover:opacity-100"
                          style={{ position: "absolute" }}
                        >
                          <Box className="text-white font-semibold text-lg p-3">
                            {img.name}
                          </Box>
                        </Box>
                        <Box className="absolute right-1 top-1 bg-red-500 rounded-lg text-white py-1 px-5">
                          Web
                        </Box>
                      </Box>
                      <Box className="text-white col-span-8 lg:col-span-4">
                        <Box className="text-xs lg:text-base font-normal">
                          {img.date}
                        </Box>
                        <Box className="text-xl lg:text-4xl font-semibold">
                          {img.name}
                        </Box>
                        <Box className="text-sm lg:text-xl w-fit font-normal">
                          {img.desc}
                        </Box>
                        <Box className="text-2xl mt-3 font-semibold">
                          Tech-Stack
                        </Box>
                        <Box className="flex gap-3">
                          {img.tech?.map((tech) => (
                            <Box
                              key={tech.title}
                              className="flex items-center flex-col group"
                            >
                              <Image
                                src={tech.img}
                                alt="a"
                                className="p-2 my-3 shadow-xl rounded-full bg-transparent/20 transition-transform transform duration-200 ease-in-out hover:scale-110 w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]"
                              />
                              {tech.title}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Divider
                      variant="fullWidth"
                      className="my-5 border-white"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
