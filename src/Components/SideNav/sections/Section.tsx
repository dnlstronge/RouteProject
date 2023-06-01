import React, { useEffect, useState } from "react"
import classes from "./Section.module.css"

// redux
import { useDispatch, useSelector } from "react-redux"

//types
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { RootState } from "../../../Store/store"

//resets
import { resetGroupTask } from "../../../Store/sectionsSlice"
import { resetFetchingApp } from "../../../Store/fetchingSlice"
import { resetMoneyMan } from "../../../Store/moneyManSlice"

type sectionProps = {
    key: number,
    heading: string,
    subheadings: {
        name: string,
        dispatch: ActionCreatorWithoutPayload
    }[]
}


const Section: React.FC<sectionProps> = (props) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false)
    const showGroupTask = useSelector((state: RootState) => state.showGroupTask)
    const showFetchProject = useSelector((state: RootState) => state.showFetchProject)
    const showMoneyMan = useSelector((state: RootState) => state.showMoneyMan)

    /* Handlers */
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    /* 
       Conditional/animation Style (sets subheading background color) 
       will need new if case for each subheading added
    */

    useEffect(() => {
      if(showGroupTask.show) {
        document.getElementById("GroupTask App")!.className = classes.subtitleActive
        document.getElementById("Fetching App")!.className = classes.subtitle
        document.getElementById("Expense Tracker")!.className = classes.subtitle
      } 
      if(showFetchProject.show) {
        document.getElementById("Fetching App")!.className = classes.subtitleActive
        document.getElementById("GroupTask App")!.className = classes.subtitle
        document.getElementById("Expense Tracker")!.className = classes.subtitle
        
      }
      if(showMoneyMan.show) {
        document.getElementById("Expense Tracker")!.className = classes.subtitleActive
        document.getElementById("GroupTask App")!.className = classes.subtitle
        document.getElementById("Fetching App")!.className = classes.subtitle
      }

      /* add further if cases as needed */
            
    }, [showGroupTask.show, showFetchProject.show, showMoneyMan.show])
    return (

        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.heading}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.map((item) => {
                        const handleDispatch = async () => {
                            // - reset
                            dispatch(resetGroupTask())
                            dispatch(resetFetchingApp())
                            dispatch(resetMoneyMan())
                            // - action
                            dispatch(item.dispatch())
                        }
                        return <h4 className={classes.subtitle} id={item.name} onClick={handleDispatch} key={item.name}>{item.name}</h4>
                    })}
                </div>}
        </div>
    )
}

export default Section; 