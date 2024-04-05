
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box className=" bg-[#1e1842]"> 
      <Intro />
      <Skills />
	      <Projects />
    </Box>
  );
}
