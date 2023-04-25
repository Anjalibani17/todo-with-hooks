import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const Parent=()=>{
const [tresureMap,setTresureMap]=useState(false);
return(<>
    <div style={{border:"solid green 1 px",
    padding:"10px",
    margin:"5px",
    }}>
        <h2>Child 1</h2>
        { tresureMap && <div>i have trasure map</div>
        }
        <Child1 tresureMap={tresureMap}/>
        <Child2 tresureMap={tresureMap}/>

    </div>
    </>)
}
export default Parent;