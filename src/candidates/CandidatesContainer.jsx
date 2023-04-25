// import { render } from "@testing-library/react";
import React from "react";
import CandidateNames from "./CandidateNames";

const list1=["anjali", "jay", "raj", "jyot","shambhu"];



class CandidatesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            CandidateNames: list1

        };

    };


    render() {
        return (<ul>
            {
                this.state.CandidateNames.map((candidateName) => { //array.map(para)
                    return <li>{candidateName}</li>;
                })
            }

        </ul>
        );
        //map return one candidate at a time
    }

}


export default CandidatesContainer
