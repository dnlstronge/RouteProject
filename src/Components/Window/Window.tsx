import React from "react"
import classes from "./Window.module.css"
import { projectData } from "../Data/Projects"
import GroupTaskProject from "../Projects/GroupTask/GroupTaskProject"
import { useSelector } from "react-redux"
import sectionsSlice from "../../Store/sectionsSlice"
import { RootState } from "../../Store/store"
import Fetching from "../Projects/Fetching/Fetching"
import { fetchingProjectData } from "../Data/Projects"
import MoneyMan from "../Projects/MoneyMan/MoneyMan"
import { moneyManProjectData } from "../Data/Projects"


// window panel which displays section selected, get state from redux state slice
// add props to each based on project data


const groupTaskData = projectData[0]

const Window: React.FC = () => {
    const showGroupTask = useSelector((state: RootState) => state.showGroupTask )
    const showFetchProject = useSelector((state: RootState) => state.showFetchProject)

    return (
        <div className={classes.container}>
            {showGroupTask.show && 
            <GroupTaskProject 
                id={groupTaskData.id}
                name={groupTaskData.name}
                description={groupTaskData.description}
                screenShots={groupTaskData.screenShots}
                liveDemo={groupTaskData.liveDemo}
                gitHub={groupTaskData.gitHub}
            />}
            {showFetchProject.show && 
            <Fetching
                id={fetchingProjectData.id}
                name={fetchingProjectData.name}
                description={fetchingProjectData.description}
                screenShots={fetchingProjectData.screenShots}
                liveDemo={fetchingProjectData.liveDemo}
                gitHub={fetchingProjectData.gitHub}
            />}
            <MoneyMan
                id={moneyManProjectData.id}
                name={moneyManProjectData.name}
                description={moneyManProjectData.description}
                screenShots={moneyManProjectData.screenShots}
                liveDemo={moneyManProjectData.liveDemo}
                gitHub={moneyManProjectData.gitHub} />
        </div>
    )
}

export default Window;