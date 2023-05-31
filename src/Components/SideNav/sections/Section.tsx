import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch, useSelector } from "react-redux"
import { SectionDataModel } from "./SectionData"
import { projectDataTypeObject } from "../../../Models/projectDataTypes"
import { setShowGroupTask } from "../../../Store/sectionsSlice"
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

type sectionProps = {
    key: number,
    heading: string,
    subheadings: {
        name: string,
        dispatch: ActionCreatorWithoutPayload
    } []
}


const Section: React.FC<sectionProps> = (props) => {
    const dispatch = useDispatch()
    //const checkState = useSelector((state: rootState) => state.showGroupTask)
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }

    const handleButton = () => {
        dispatch(setShowGroupTask())
        //console.log(checkState)
    }
     // console.log(checkState)
    return (
       
        <div className={classes.container}>
             <button onClick={handleButton}>ChangeState</button>
            <h4 className={classes.title} onClick={handleDropDown}>{props.heading}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.map((item) => {
                        const handleDispatch = () => {
                            dispatch(item.dispatch())
                            //console.log("dispatch issued")
                            //console.log(item.dispatch)
                            //console.log(checkState)
                        }
                        return <h4 className={classes.subtitle} onClick={handleDispatch} key={item.name}>{item.name}</h4>
                    })}
                </div>}
        </div>
    )
}

export default Section; 