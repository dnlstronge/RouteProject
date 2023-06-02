import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

export type projectDataType = 
{
id: number,
name: string,
description: string,
screenShots: string[],
liveDemo: string
gitHub: string,

 } []


// type for props

export type projectDataTypeObject = {
id: number,
name: string,
description: string,
screenShots: string[],
liveDemo: string
gitHub: string
icons: React.JSX.Element []

} 
export type fetchingProjectDataType = {
    id: number,
    name: string,
    description: string,
    screenShots: string[],
    liveDemo: string,
    gitHub: string,
    icons: React.JSX.Element []

}

// subheadings object - 
// names should correspond with dispatches

