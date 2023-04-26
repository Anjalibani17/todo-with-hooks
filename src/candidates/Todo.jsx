import React, { useState } from "react";
import styled from "styled-components";


const Todo = () => {
   
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [inputvalue, setInputValue] = useState("");
    const [completed,setCompleted]=useState([]);
    const add = () => {
        
        setList([...list, inputvalue]);
        setInputValue("");

       
    };
    const resetList = () => {
        setList([]);

    }
    const change = (event) => {
        setInputValue(event.target.value)
    }
    const check=(e,index)=>
    {
        if(e.target.checked==true)
        {
            console.log("hi")
            console.log(e.target.list[index].value)
            // setCompleted(e.target.checked)
            // setList2([...list2,completed])
            
        }
        else
        { console.log("j")
        console.log(e.target.li[index].value)
            setList([...list,completed]);
        }
    }
    return (<>
        <input type="text" onChange={change} value={inputvalue} />
        <input type="button" value="ADD task" onClick={add} />
        <input type="button" value="reset" onClick={resetList} />
        
        <ul>
            <h3>tasks</h3>
            {list.map((list, index) =>
                <li key={index}>{list}<input type="checkbox" onClick={(e) => change(e, index)}></input></li> )}
        </ul>
        <ul>
            <h3>completed task</h3>
            { list2.map((list, index) =>
                <li key={index}>{list}<input type="checkbox" onClick={check}></input></li> )}
        </ul>
        
    </>)


}



export default Todo;