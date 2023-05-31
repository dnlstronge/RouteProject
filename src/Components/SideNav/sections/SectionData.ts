import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { setShowGroupTask } from "../../../Store/sectionsSlice"


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
        subheadings: [ {name: "GroupTask App", dispatch: setShowGroupTask}, {name: "Fetching App", dispatch: setShowGroupTask} ]
        
    },
    {
        key: 2,
        id: 2,
        heading: "Welfare Calculators",
        subheadings: [ {name: "Universal Credit", dispatch: setShowGroupTask}, {name: "Pension Credit", dispatch: setShowGroupTask} ]
        
    },

   
]