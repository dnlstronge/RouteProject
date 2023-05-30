import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch } from "react-redux"
import { sectionDataModel } from "./SectionData.ts"



const Section: React.FC<sectionDataModel> = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    console.log(props.subheadings)
    return (
        
        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.title}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                 {props.subheadings.map((item) => {
                    const handleDispatch = () => {
                        item.dispatch()
                        console.log("dispatch issued")
                    }
                    return <h4 onClick={handleDispatch} key={item.name}>{item.name}</h4>
                 })}
                </div>}
        </div>
    )
}

export default Section; 