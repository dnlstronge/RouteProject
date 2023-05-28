import groupTaskImage from "../../Assets/ProjectScreens/GroupTask/1001a.png"
import { projectDataType } from "../../Models/projectDataTypes"

//  migrate data to DB w/ FB backend to begin with



export const projectData: projectDataType  = [
  {
     id: 1001,
     name: 'Task Manager Application',
     description: 
            `Project management app built with React, allows different users to log in and exchange messages, ideas and update tasks etc.
             Uses firebase for authentication and to accommodate CRUD operations`,
     screenShot: groupTaskImage,
     liveDemo: "https://grouptaskapp-4eccd.web.app/",
     gitHub: "https://github.com/dnlstronge/groupTask"

  },


]