import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch, useSelector } from "react-redux"
import { SectionDataModel } from "./SectionData"
import { projectDataTypeObject } from "../../../Models/projectDataTypes"
import { resetGroupTask, setShowGroupTask } from "../../../Store/sectionsSlice"
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { RootState } from "../../../Store/store"
import { resetFetchingApp } from "../../../Store/fetchingSlice"

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
    const grouptaskstate = useSelector((state: RootState) => state.showGroupTask)
    const fetchingappstate = useSelector((state: RootState) => state.showFetchProject )
    const [showDropDown, setShowDropDown] = useState(false)

    /* Handlers */
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }


    return (

        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.heading}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.map((item) => {
                        const handleDispatch = async() => {
                        
                            
                           dispatch(resetGroupTask)
                           dispatch(resetFetchingApp)
                           dispatch(item.dispatch())
                            
                       
                            
                        }
                        return <h4 className={classes.subtitle} onClick={handleDispatch} key={item.name}>{item.name}</h4>
                    })}
                </div>}
        </div>
    )
}

export default Section; 