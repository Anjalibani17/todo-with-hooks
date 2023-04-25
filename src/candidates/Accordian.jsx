import React, { useState } from "react";
import PanelA from "./PanelA";
import PanelB from "./PanelB";
//import Panel from "../Panel";

// let panel=[{panelContent:"h",
//             panelTitle:"this"}]
            

const Accordian=()=> {
    
    const[activePanel,SetActivePanel]=useState(0)
    const change =(para)=>
    {
       if(activePanel==para)
        {
            SetActivePanel(0);

        }
        else
        {
            SetActivePanel(para);
        }
    }
    
        

    return(<>
    {activePanel==2 &&
     (<PanelA change={change} activePanel={activePanel}/>)}
    <PanelB change={change} activePanel={activePanel}/> 
    
    {/* panel.map((panelContent,panelTitle) => {
    <panel change={change} activePanel={activePanel} panelContent={panelContent} panelTitle={panelTitle} />

    }
    ) */}
    </>
    )

    
    
}
export default Accordian;