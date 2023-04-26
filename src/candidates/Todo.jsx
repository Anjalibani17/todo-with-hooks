import React, { useState } from "react";
import styled from "styled-components";


const Todo = () => {
   
    const [list, setList] = useState([]);
    const [inputvalue, setInputValue] = useState("");
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
    return (<>
        <input type="text" onChange={change} value={inputvalue} />
        <input type="button" value="ADD task" onClick={add} />
        <ul>
            {list.map((list, index) =>
                <li key={index}>{list}</li>)}
        </ul>
        <input type="button" value="reset" onClick={resetList} />
    </>)


}



export default Todo;