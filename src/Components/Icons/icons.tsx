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
const colorFireB = ` rgb(248, 184, 65)` // lighter orange
const colorGithub = `rgb(255, 255, 255)` // white


export const projectIcons = {
  react: <FaReact color={colorReact} size="4rem"/>,
  css: <BsFiletypeCss color={colorCSS} size="4rem" />,
  html5: <AiOutlineHtml5 color={colorTypes} size="4rem"/>,
  typescript: <TbBrandTypescript color={colorHtml} size="4rem"/>,
  node: <FaNodeJs color={colorNode} size="4rem"/>,
  javascript: <IoLogoJavascript color={colorJS} size="4rem"/>,
  git: <FaGitAlt color={colorGit} size="4rem"/>,
  github: <VscGithub color={colorGithub} size="4rem"/>,
  firebase: < IoLogoFirebase color={colorFireB} size="4rem"/>

};

// individual icons export so can be used individually
export const reactICON = projectIcons.react
export const cssICON = projectIcons.css
export const html5ICON = projectIcons.html5
export const typeScriptICONS = projectIcons.typescript 
export const nodeICON = projectIcons.node
export const javaScriptICON = projectIcons.javascript
export const gitICON = projectIcons.git
export const gitHubICON = projectIcons.github
export const firebaseICONS = projectIcons.firebase