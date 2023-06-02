import React from 'react'
import classes from "./SideNav.module.css"
import { SectionData } from './sections/SectionData'
import Section from './sections/Section'
import { FaBeer } from 'react-icons/fa'
import WelfareCalcs from './WelfareCalcs/WelfareCalcs'



const SideNav = () => {
  return (
    <>
    
    <div className={classes.container}>
      {SectionData.map((section) => {
        return (
          
          <Section key={section.id} heading={section.heading} subheadings={section.subheadings}/>
          
          
        )
      })}
      <WelfareCalcs />
    </div>
    </>
  )
}
export default SideNav;
