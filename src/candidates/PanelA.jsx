import React, { useEffect ,useState} from "react";


const PanelA = ({ change, activePanel }) => {
    //component did mount
    useEffect(()=>
    {
        console.log("mount");
    },[]);  //first para is fun second is dependency array
//component did update with condition 
useEffect(()=>
{
    console.log(" active value updated");//if activepanel update then it is run
},[activePanel]); //intially is prints bcz starting value is asignh to active panel hence 
//component
//we can give many values in dependency array any one is updated then it is run
//component did update without condition
    useEffect(()=>
    {
        console.log("something update");
}); 
//component will unmount
useEffect(()=>
    {
      return(()=>{
        console.log("panel A is going to unmount") //call back fun
      })
},[]); 

    return (<>
        <h2>Panel A </h2>
        <button onClick={()=>change(1)}>click</button>
        {activePanel === 1
            ? <><p>Panel A </p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui quam doloremque
                    magni quasi suscipit consequuntur voluptate!
                    Facere consectetur vitae sapiente.</p></>
            : null
        }
    </>
    )
}
export default PanelA;