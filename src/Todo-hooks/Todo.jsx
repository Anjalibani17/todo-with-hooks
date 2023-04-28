import React, { useState } from "react";
import styled from "styled-components";


const Todo = () => {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const add = () => {
        const currentValue = inputValue;
        const updateList = [...list];
        updateList.push({
            name: currentValue,
            ischecked: false,
        });
        setList(updateList);
        setInputValue("");
        // setList([...list, inputvalue]);
        // setInputValue("");


    };
    const resetList = () => {
        setList([]);

    }
    const change = (event) => {
        setInputValue(event.target.value)
    }
    const check = (e, index) => {
        const newList = [...list];
        //console.log(list[index].ischecked)
        // console.log("check", newList[index].ischecked)
        // console.log("e", e.target.checked)
        newList[index].ischecked = e.target.checked;
       //console.log("newchecked", newList[index].ischecked)
        setList(newList);
   
    }
    const deleteList =(index)=>
    {
        const updatedList = [...list];
        console.log(updatedList[index])
    updatedList.splice(index,1);
    setList(updatedList);
    console.log(list)
    }
    const edit=(index)=>
    {
        const newValue = prompt("enter value");
        const updatedList = [...list];
        updatedList[index].name=newValue;
       setList(updatedList);
    }

    return (<>
        <input type="text" onChange={change} value={inputValue} />
        <input type="button" value="ADD task" onClick={add} />
        <input type="button" value="reset" onClick={resetList} />

        <ul>
            <h3>tasks</h3>
            {list.map((list, index) =>
                (!list.ischecked)
                && <li key={index}>{list.name}<input type="checkbox" onClick={(e) => check(e, index)}></input>
                <button onClick={()=>deleteList(index)}>del</button>
                <button onClick={()=>edit(index)}>edit</button></li>)}
        </ul>
        <ul>
            <h3>completed task</h3>
            {list.map((list, index) =>
                (list.ischecked)
                && <li key={index}>{list.name}<input type="checkbox" checked={true} onClick={(e) => check(e, index)}></input>
                <button onClick={()=>deleteList(index)}>del</button>
                <button onClick={()=>edit(index)}>edit</button></li>)}
        </ul>

    </>)


}



export default Todo;