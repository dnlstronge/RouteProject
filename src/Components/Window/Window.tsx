import React from "react"
import classes from "./Window.module.css"
import { projectData } from "../Data/Projects"
import GroupTaskProject from "../Projects/GroupTask/GroupTaskProject"
import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import Fetching from "../Projects/Fetching/Fetching"
import { fetchingProjectData } from "../Data/Projects"
import MoneyMan from "../Projects/MoneyMan/MoneyMan"
import { moneyManProjectData } from "../Data/Projects"
import UCcalc from "../Projects/WACalcs/UCcalc"
import { universalCreditCalcData } from "../Data/Projects"



// import ICONS from master

import { 
        reactICON, 
        cssICON,
        html5ICON, 
        typeScriptICON,
        nodeICON, 
        javaScriptICON,
        gitICON,
        gitHubICON,
        firebaseICON,
    
    } from "../Icons/icons"



// window panel which displays section selected, get state from redux state slice
// add props to each based on project data


const groupTaskData = projectData[0]

const Window: React.FC = () => {
    const showGroupTask = useSelector((state: RootState) => state.showGroupTask )
    const showFetchProject = useSelector((state: RootState) => state.showFetchProject)
    const showMoneyMan = useSelector((state: RootState ) => state.showMoneyMan)
    const showUCcalc = useSelector((state: RootState) => state.showUCcalc)

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
                icons={[reactICON, cssICON, html5ICON, javaScriptICON, firebaseICON]}
            />}
            {showFetchProject.show && 
            <Fetching
                id={fetchingProjectData.id}
                name={fetchingProjectData.name}
                description={fetchingProjectData.description}
                screenShots={fetchingProjectData.screenShots}
                liveDemo={fetchingProjectData.liveDemo}
                gitHub={fetchingProjectData.gitHub}
                icons={[reactICON, cssICON, html5ICON, javaScriptICON, firebaseICON]}
            />}
            {showMoneyMan.show && 
            <MoneyMan
                id={moneyManProjectData.id}
                name={moneyManProjectData.name}
                description={moneyManProjectData.description}
                screenShots={moneyManProjectData.screenShots}
                liveDemo={moneyManProjectData.liveDemo}
                gitHub={moneyManProjectData.gitHub}
                icons={[reactICON, cssICON, html5ICON, javaScriptICON, firebaseICON]}
                />
                 }
            {showUCcalc.show && 
            <UCcalc
                id={universalCreditCalcData.id}
                name={universalCreditCalcData.name}
                description={universalCreditCalcData.description}
                screenShots={universalCreditCalcData.screenShots}
                liveDemo={universalCreditCalcData.liveDemo}
                gitHub={universalCreditCalcData.gitHub}
                icons={[reactICON, cssICON, html5ICON, javaScriptICON, firebaseICON]}
                /> }
        </div>
    )
}

export default Window;