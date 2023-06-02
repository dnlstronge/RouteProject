import React from "react";

/* Icons Master File */



import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5"
import { FaGitAlt } from "react-icons/fa"
import { VscGithub} from "react-icons/vsc"
import { FaNodeJs } from "react-icons/fa"



/* color variables */
const colorReact = `rgb(155, 207, 225)` // light blue
const colorCSS = `rgb(220, 125, 220)` // pinkish
const colorTypes = `rgb(66, 163, 195)` // blueish (darker)
const colorHtml = `rgb(250, 166, 9)` // orange
const colorJS = `rgb(106, 148, 206);` // bluey
const colorNode = `rgb(71, 176, 71)` // light green
const colorGit = `rgb(211, 140, 8)` // darker orange
const colorPs = `rgb(141, 182, 225)` // light blue
const colorFireB = ` rgb(248, 184, 65)` // lighter orange
const colorGithub = `rgb(255, 255, 255)` // white


const icons = {
  react: <FaReact color={colorReact}/>,
  css: <BsFiletypeCss color={colorCSS}/>,
  html5: <AiOutlineHtml5 color={colorTypes}/>,
  typescript: <TbBrandTypescript color={colorHtml}/>,
  node: <FaNodeJs color={colorNode}/>,
  javascript: <IoLogoJavascript color={colorJS}/>,
  git: <FaGitAlt color={colorGit}/>,
  github: <VscGithub color={colorGithub}/>,
  firebase: < IoLogoFirebase color={colorFireB}/>

};