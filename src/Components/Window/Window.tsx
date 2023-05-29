import React from "react"
import classes from "./Window.module.css"
import { projectData } from "../Data/Projects"
import GroupTaskProject from "../Projects/GroupTask/GroupTaskProject"

// window panel which displays section selected, get state from props

const groupTaskData = projectData[0]

const Window: React.FC = () => {
    return (
        <div className={classes.container}>
            <GroupTaskProject 
                id={groupTaskData.id}
                name={groupTaskData.name}
                description={groupTaskData.description}
                screenShot={groupTaskData.screenShot}
                liveDemo={groupTaskData.liveDemo}
                gitHub={groupTaskData.gitHub}
            />
        </div>
    )
}

export default Window;