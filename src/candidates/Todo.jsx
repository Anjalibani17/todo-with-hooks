import React, { useState } from "react";
import styled from "styled-components";


const TODO = () => {
    const [inputvalue, setInputValue] = useState("");
    const [list, setList] = useState();
    const add = () => {


    }
    const resetList = () => {

    }
    return (<>
        <input type="text" />
        <input type="button" value="ADD task" onClick={add} />
        <input type="button" value="rest" onClick={resetList} />
    </>)


}



export default Todo