
import { projectDataType } from "../../Models/projectDataTypes"
import { setShowGroupTask } from "../../Store/sectionsSlice"



//images 
import groupTaskImage from "../../Assets/ProjectScreens/GroupTask/1001a.png"
import fetchImageA from "../../Assets/ProjectScreens/FetchSite/fetch1.png"
import fetchImageB from "../../Assets/ProjectScreens/FetchSite/fetch1.png"
import fetchImageC from "../../Assets/ProjectScreens/FetchSite/fetch1.png"

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
     gitHub: "https://github.com/dnlstronge/groupTask",
     
  },


]
export const fetchingProject = {
  id: 1002,
  name: "Fetching and Api app",
  description: `I built this React app to experiment with different apis and 
  play around with custom hooks. It helped me get comfortable getting react to interact with various apis,
   manipulating data from external sources and rendering.`,
   screenShots: [fetchImageA, fetchImageB, fetchImageC],
   liveDemo: `https://apifetch-5ea29.web.app/`,
   gitHub: `https://github.com/dnlstronge/fetchapp`
}