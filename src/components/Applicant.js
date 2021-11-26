import React,{useContext} from 'react'

const Applicant = (props) => {

    return (
            <tr style={{ border:"1px solid black"}}>
                <td style={{textAlign:"center", border:"1px solid black"}}>{props.name}</td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{props.email} </td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{props.cg} </td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{props.branch} </td>
                {/* <p className="card-text">CGPA: {props.cg} </p>
                <p className="card-text">Class 10th %: {props.tenth} </p>
                <p className="card-text">Class 12th %: {props.twelfth} </p>
                <p className="card-text">Branch: {props.branch} </p>  */}
            </tr>
    )
}

export default Applicant
