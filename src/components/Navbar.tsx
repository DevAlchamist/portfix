"use client";
import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    // Set the selected link based on the current route
    switch (pathname) {
      case "/":
        setSelectedLink("Home");
        break;
      case "/projects":
        setSelectedLink("Projects");
        break;
      case "/about":
        setSelectedLink("About");
        break;
      case "/contact":
        setSelectedLink("Contact");
        break;
      default:
        setSelectedLink("");
    }
  }, [pathname]); // Re-run the effect when the pathname changes

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };
  return (
    <Box className="text-white absolute backdrop-blur-sm bg-transparent/10 w-full p-5 flex items-center justify-around">
      <Box className="text-xl font-semibold">Dev Alchamist</Box>
      <Box className="flex gap-5">
        <Link
          href="/"
          className={`text-md font-md cursor-pointer ${
            selectedLink === "Home" ? "border-b-2 border-red-500" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`text-md font-md cursor-pointer ${
            selectedLink === "Projects" ? "border-b-2 border-red-500" : ""
          }`}
          onClick={() => handleLinkClick("Projects")}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`text-md font-md cursor-pointer ${
            selectedLink === "About" ? "border-b-2 border-red-500" : ""
          }`}
          onClick={() => handleLinkClick("About")}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`text-md font-md cursor-pointer ${
            selectedLink === "Contact" ? "border-b-2 border-red-500" : ""
          }`}
          onClick={() => handleLinkClick("Contact")}
        >
          Contact
        </Link>
      </Box>
      <Box className="flex gap-2">
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
    </Box>
  );
};

export default Navbar;
