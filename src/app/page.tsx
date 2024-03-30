import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box className=" bg-[#1e1842]">
      <Box className="fixed top-0 left-0 right-0">
      <Navbar />
      </Box>
      <Intro/>
      <Skills/>
    </Box>
  );
}
