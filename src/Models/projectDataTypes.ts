import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

export type projectDataType = 
{
id: number,
name: string,
description: string,
screenShot: string,
liveDemo: string
gitHub: string,

 } []


// type for props

export type projectDataTypeObject = {
id: number,
name: string,
description: string,
screenShot: string,
liveDemo: string
gitHub: string

} 

// subheadings object - 
// names should correspond with dispatches

export type subheadings = {
    names: string[]
    dispatches: string[]
}