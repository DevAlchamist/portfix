import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className="flex border-t border-white/30 flex-col text-white items-center justify-center p-10 bg-[#070d1a]">
      <Box className="w-[80%]">
        <Box className="flex items-center justify-between">
          <Box className="text-xl font-semibold">Dev Alchamist</Box>
          <Box className="flex gap-5">
            <IconButton
              href="https://www.linkedin.com/in/shubhanshu-nayak-9332562a4/"
              target="_blank"
              className="text-md text-white font-md"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://twitter.com/irl_introvert06/"
              target="_blank"
              className="text-md text-white font-md"
            >
              <X />
            </IconButton>
            <IconButton
              href="https://github.com/DevAlchamist"
              target="_blank"
              className="text-md text-white font-md"
            >
              <GitHub />
            </IconButton>
          </Box>
          <Box className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="inline-flex"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path>
            </svg>
            Copyright 2024 Dev Alchamist. All Rights Reserved.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
