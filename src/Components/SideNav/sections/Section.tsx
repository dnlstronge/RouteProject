import React, { useState } from "react"
import classes from "./Section.module.css"


type propsForSection = {
    key: number,
    title: string,
    subheadings: string[]
}

const Section: React.FC<propsForSection> = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.title}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.map((item) => {
                        return (
                            <h5 className={classes.subtitle} key={item}>{item}</h5>
                        )
                    })}
                </div>}
        </div>
    )
}

export default Section; 