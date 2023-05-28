import React from "react"
import classes from "./Window.module.css"
import { projectData } from "../Data/Projects"

// window panel which displays section selected, get state from props

const groupTaskData = projectData[0]

const Window: React.FC = () => {
    return (
        <div className={classes.container}>
            
        </div>
    )
}

export default Window;