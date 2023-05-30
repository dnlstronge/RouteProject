import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { setShowGroupTask } from "../../../Store/sectionsSlice"


export type SectionDataModel = {
    id: number,
    heading: string,
    subheadings: {name: string, dispatch: ActionCreatorWithoutPayload} []
   
} []


export const SectionData: SectionDataModel = [

    {
        id: 1,
        heading: "Projects",
        subheadings: [ {name: "GroupTask App", dispatch: setShowGroupTask} ]
        
    },

   
]