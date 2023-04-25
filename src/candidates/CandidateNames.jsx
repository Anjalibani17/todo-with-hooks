import CandidatesContainer from "./CandidatesContainer";

const CandidateNames = (props) =>{
    return(<ul>
    {
        // props.names.map((name)=>{
        //     return <li key={name}>{name}</li>
        // })
        props.CandidateNames.map((CandidateName)=>{
            return <li>{CandidateName}</li>;
        })
    }

</ul>);
};

export default CandidateNames;