import groupTaskImage from "../../Assets/ProjectScreens/GroupTask/1001a.png"


//  migrate data to DB w/ FB backend to begin with

type projectDataType = 
    {
    id: number,
    name: string,
    description: string,
    screenShot: string,
    liveDemo: string
    gitHub: string
     } []


const projectData = [
  {
     name: 'Task Manager Application',
     description: 
            `Project management app built with React, allows different users to log in and exchange messages, ideas and update tasks etc.
             Uses firebase for authentication and to accommodate CRUD operations`,
     screenShot: groupTaskImage,
     liveDemo: "",

  },


]