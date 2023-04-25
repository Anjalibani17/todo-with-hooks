import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Parent from "./Parent";
import Uncle from "./uncle";
const GrandParent=(tresureMap)=>{
//const [tresureMap,setTresureMap]=useState(false);
return(
    <div style={{border:"solid red 1 px",
    padding:"10px",
    margin:"5px",
    }}>
        <h2>Child 1</h2>
        { tresureMap && <div>i have trasure map</div>
        }

    </div>
)
}
export default GrandParent;