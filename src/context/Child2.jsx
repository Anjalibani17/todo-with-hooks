import React, { useState } from "react";
const Child2=(tresureMap)=>{
//const [tresureMap,setTresureMap]=useState(false);
return(
    <div style={{border:"solid red 1 px",
    padding:"10px",
    margin:"5px",
    }}>
        <h2>Child 2</h2>
        { tresureMap && <div>i have trasure map</div>
        }

    </div>
)
}
export default Child2;