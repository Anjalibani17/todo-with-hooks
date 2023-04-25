import React from "react";
import styled from "styled-components";


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            inputvalue: "",
            list: [],
            list2: [],
            isdeleted: false,

        }
        this.handleClick = this.handleClick.bind(this);
        this.add = this.add.bind(this);
        this.change = this.change.bind(this);
    }
    handleClick(e) {

        this.setState({ inputvalue: e.target.value });
        this.state.inputvalue = e.target.value;
        // console.log("hi");
    }
    add() {
        //one way
        const currentValue = this.state.inputvalue;
        const updateList = [...this.state.list];
        updateList.push(
            {
                name: currentValue,
                ischecked: false,
               

            })
        this.setState({
            list: updateList,
            inputvalue: ""
        });
        //second way

        // this.setState({ list: [...this.state.list, this.state.inputvalue] }) //here we use spread op for copy obj 
        //  this.setState({ inputvalue: "" })
        //a={ p:"anjali"} 
        //b={..a,b.p="bani"} //here we make imuted copy of a then update it 
        //console.log(this.state.list)

    }
    change(e, index) {
        //console.log(e.target.checked)
        // if(e.target.checked==true)
        // {
        const activeList = [...this.state.list];
        activeList[index].ischecked = e.target.checked;
        this.setState({ list2: activeList });

        const newList = [...this.state.list];
        newList[index].ischecked = e.target.checked;
      //  console.log(newList)
        
            // console.log("now", newList[index])
            // newList.splice(index)
            this.setState({ list: newList });
        
       
       
        //  const obj= newList[index];
       
        // console.log(this.state.list[index].splice)
        // this.setState({list[index]})


        //  this.setState({list})



        //this.setState({list:})
        // }
        // else
        // {

        // }

            }
            delete(index)
            {
                const  del = [...this.state.list];
                // del[index].ischecked = e.target.checked;
               console.log(del(index)) 

                this.setState({ isdeleted: true });
                // if(this.state.isdeleted==true)
                // {

                // }
            }

    render() {
       // console.log("list", this.state.list)
     //   console.log(this.state.list2)
        return (<>
            <input type="button" value="add Task" onClick={this.add} />
            <input type="text" placeholder="enter" value={this.state.inputvalue} onChange={this.handleClick} />
            <h2>active task </h2>
            {<ol >
                {
                    this.state.list.map((item, index) => {//array.map(para)
                        if (this.state.list[index].ischecked == false) {
                            return <><li key={index}  >{item.name}<input type="checkbox" name="" id="" onClick={(e) => this.change(e, index)}
                            /><button onClick={this.delete}>Del</button></li>
                            
                            </>;
                        }

                    })
                }
            </ol>
            }
            <h2>done task</h2>

            {<ol>
                {
                    this.state.list2.map((item, index) => {//array.map(para)
                        // console.log(this.state.list2[index]);
                        // console.log(this.state.list2[index].ischecked);
                        if (this.state.list2[index].ischecked == true) {
                            return <><li key={index} style={{ textDecoration: "line-through" }}>{item.name}<input type="checkbox" name="" id="" checked="true" onClick={(e) => this.change(e, index)}
                            /><button onClick={(index)=>this.delete(index)}>Del</button></li>

                            </>;
                        }


                    })
                }
            </ol>
            }
        </>
        )

    }
}

export default Todo