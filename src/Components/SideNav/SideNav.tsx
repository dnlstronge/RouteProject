import React from 'react'
import classes from "./SideNav.module.css"
import { SectionDataModel } from './sections/SectionData'
import { SectionData } from './sections/SectionData'
import Section from './sections/Section'



const SideNav = () => {
  return (
    <div className={classes.container}>SideNav
      {SectionData.map((section) => {
        return (
          <Section />
        )
      })}
    </div>
  )
}
export default SideNav;
