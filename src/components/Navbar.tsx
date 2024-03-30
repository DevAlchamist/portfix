import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box className="text-white absolute bg-transparent/10 w-full p-5 flex items-center justify-around">
      <Box className="text-xl font-semibold">Dev Alchamist</Box>
      <Box className="flex gap-5">
        <Box className="text-md font-md">Home</Box>
        <Box className="text-md font-md">Projects</Box>
        <Box className="text-md font-md">About</Box>
        <Box className="text-md font-md">Contact</Box>
      </Box>
      <Box className="flex gap-2">
        <IconButton className="text-md text-white font-md"><LinkedIn/></IconButton>
        <IconButton className="text-md text-white font-md"><X/></IconButton>
        <IconButton className="text-md text-white font-md"><GitHub/></IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
