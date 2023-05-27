import React, { useState } from "react"
import classes from "./Section.module.css"

const Section = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className={classes.container}>
            <h4 onClick={handleDropDown}>Dummy Header</h4>
        </div>
    )
}

export default Section; 