
import { projectDataType } from "../../Models/projectDataTypes"




//images & type 


// grouptask
import groupTaskImageA from "../../Assets/ProjectScreens/GroupTask/1001a.png"
import groupTaskImageB from "../../Assets/ProjectScreens/GroupTask/1001b.png"
import groupTaskImageC from "../../Assets/ProjectScreens/GroupTask/1001d.png"
// fetch site
import fetchImageA from "../../Assets/ProjectScreens/FetchSite/fetch1.png"
import fetchImageB from "../../Assets/ProjectScreens/FetchSite/fetch2.png"
import fetchImageC from "../../Assets/ProjectScreens/FetchSite/fetch3.png"
// moneyman
import mmimageA from "../../Assets/ProjectScreens/MoneyMan/3001.png"
import mmimageB from "../../Assets/ProjectScreens/MoneyMan/3002.png"
import mmimageC from "../../Assets/ProjectScreens/MoneyMan/3003.png"
// UC calc
import ucImageA from "../../Assets/ProjectScreens/UCcalc/uc001.png"
import ucImageB from "../../Assets/ProjectScreens/UCcalc/uc002.png"
import ucImageC from "../../Assets/ProjectScreens/UCcalc/uc003.png"


//  migrate data to DB w/ FB backend to begin with



export const projectData: projectDataType  = [
  {
     id: 1001,
     name: 'Task Manager Application',
     description: 
            `Project management app built with React, allows different users to log in and exchange messages, ideas and update tasks etc.
             Uses firebase for authentication and to accommodate CRUD operations`,
     screenShots: [groupTaskImageA, groupTaskImageB, groupTaskImageC],
     liveDemo: "https://grouptaskapp-4eccd.web.app/",
     gitHub: "https://github.com/dnlstronge/groupTask",
     
  },


]
export const fetchingProjectData = {
  id: 1002,
  name: "Fetching and Api app",
  description: `I built this React app to experiment with different apis and 
  play around with custom hooks. It helped me get comfortable getting react to interact with various apis,
   manipulating data from external sources and rendering.`,
   screenShots: [fetchImageA, fetchImageB, fetchImageC],
   liveDemo: `https://apifetch-5ea29.web.app/`,
   gitHub: `https://github.com/dnlstronge/fetchapp`
}

export const moneyManProjectData = {
  id: 1003,
  name: "Expense Tracker",
  description: `This is a simple expense tracker I built with react and using firebase services for authentication and data, 
  It's a more developed version of a simple CRUD app or list which stores data in memory, instead this uses a DB and 
  has user authentication in place using firebase
  .`,
   screenShots: [mmimageA, mmimageB, mmimageC],
   liveDemo: `https://moneyman-99322.web.app/login`,
   gitHub: `https://github.com/dnlstronge/React-Projects/tree/master/moneyMan`
}

export const universalCreditCalcData = {
  id: 2001,
  name: "UC calculator",
  description: `Universal Credit calculator: one of a series of welfare benefit reckoners I have built to work out entitlement. It's front-end logic takes
   user input and provides an estimate based on the claimants circumstances, I built this with primarily with React JS`,
  screenShots: [ucImageA, ucImageB, ucImageC],
  liveDemo: `https://uccalc-11c98.web.app/`,
  gitHub: `https://github.com/dnlstronge/benefitscalc2`,

  
}

export const pensionCreditCalcData = {
  id: 2002,
  name: "PC calculator",
  description: `Pension Credit Calculator: this is another welfare benefit calculator I built using React. It takes the 
  relatively complex logic required to work out pension credit - a means-tested benefit and implements it in a UI I created with react. It returns
  an estimated entitlement to both pension credit and savings credit based on a number of inputs.`,
  screenShots: [],
  liveDemo: `https://pccalc-3dbcd.web.app/`,
  gitHub: `https://github.com/dnlstronge/pccalc`
}