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
            {showDropDown && 
            <div className={classes.dropdown}>
                <h5>Article about</h5>
                <h5>Different info</h5>
                <h5>More information</h5>
                <h5>Messing with the blues</h5>
            </div>}
          
        </div>
    )
}

export default Section; 