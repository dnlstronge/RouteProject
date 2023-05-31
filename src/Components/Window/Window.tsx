import React from "react"
import classes from "./Window.module.css"
import { projectData } from "../Data/Projects"
import GroupTaskProject from "../Projects/GroupTask/GroupTaskProject"
import { useSelector } from "react-redux"
import sectionsSlice from "../../Store/sectionsSlice"
import { RootState } from "../../Store/store"


// window panel which displays section selected, get state from redux state slice


const groupTaskData = projectData[0]

const Window: React.FC = () => {
    const showGroupTask = useSelector((state: RootState) => state.showGroupTask )
    return (
        <div className={classes.container}>
            {showGroupTask.show && 
            <GroupTaskProject 
                id={groupTaskData.id}
                name={groupTaskData.name}
                description={groupTaskData.description}
                screenShot={groupTaskData.screenShot}
                liveDemo={groupTaskData.liveDemo}
                gitHub={groupTaskData.gitHub}
            />}
        </div>
    )
}

export default Window;