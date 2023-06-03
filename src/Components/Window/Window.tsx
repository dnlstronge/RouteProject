import React from "react"
import classes from "./Window.module.css"

/* Redux Selector and Types */

import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"

/* Project FCS */
import GroupTaskProject from "../Projects/GroupTask/GroupTaskProject"
import Fetching from "../Projects/Fetching/Fetching"
import MoneyMan from "../Projects/MoneyMan/MoneyMan"
import UCcalc from "../Projects/WACalcs/UCcalc"
import PCcalc from "../Projects/WACalcs/PCcalc"

/* project data */
import { pensionCreditCalcData, projectData } from "../Data/Projects"
import { fetchingProjectData } from "../Data/Projects"
import { moneyManProjectData } from "../Data/Projects"
import { universalCreditCalcData } from "../Data/Projects"


/* import ICONS from master */ 

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
                icons={[reactICON, javaScriptICON,  html5ICON, cssICON, firebaseICON]}
                /> }
            <PCcalc
                id={pensionCreditCalcData.id}
                name={pensionCreditCalcData.name}
                description={pensionCreditCalcData.description}
                screenShots={pensionCreditCalcData.screenShots}
                liveDemo={pensionCreditCalcData.liveDemo}
                gitHub={pensionCreditCalcData.gitHub}
                icons={[reactICON, javaScriptICON,  html5ICON, cssICON, firebaseICON]}
                /> 
        </div>
    )
}

export default Window;