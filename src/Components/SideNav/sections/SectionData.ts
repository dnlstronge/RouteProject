import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

// for dispatch
import { setShowGroupTask } from "../../../Store/sectionsSlice"
import { setShowFetchingApp } from "../../../Store/fetchingSlice"
import { setShowMoneyMan } from "../../../Store/moneyManSlice"
import { setShowUCcalc } from "../../../Store/UCcalcSlice"


export type SectionDataModel = {
    key: number
    id: number,
    heading: string,
    subheadings: {name: string, dispatch: ActionCreatorWithoutPayload} []
   
} []


export const SectionData: SectionDataModel = [

    {
        key: 1,
        id: 1,
        heading: "Projects",
        subheadings: [ 
            {name: "GroupTask App", dispatch: setShowGroupTask}, 
            {name: "Fetching App", dispatch: setShowFetchingApp},
            {name: "Expense Tracker", dispatch: setShowMoneyMan } ]
        
    },
    // {
    //     key: 2,
    //     id: 2,
    //     heading: "Welfare Calculators",
    //     subheadings: [
    //          {name: "Universal Credit", dispatch: setShowUCcalc}, 
    //          {name: "Pension Credit", dispatch: setShowGroupTask} ]
        
    // },

   
]