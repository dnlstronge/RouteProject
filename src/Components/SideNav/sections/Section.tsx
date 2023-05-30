import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch } from "react-redux"


type propsForSection = {
    key: number,
    title: string,
    subheadings: string[]
}

/* config:

props: subheadings need a dispatch to fire in connected onclick
-----> make subheadings an configurable object

*/ 

const Section: React.FC<propsForSection> = (props) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.title}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.names.map((item) => {
                        
                        const handleDispatch = (item) => {}
                        return (
                            
                            <h5 className={classes.subtitle} key={item}>{item}</h5>
                        )
                    })}
                </div>}
        </div>
    )
}

export default Section; 