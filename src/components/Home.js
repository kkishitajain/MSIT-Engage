import React,{useEffect,useState} from 'react'
import { Notes } from './Notes'
import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
// import PropTypes from 'prop-types'
const host="http://localhost:5000";

const Home = props => {
    const [state, setstate] = useState("")
    let history=useHistory();
    useEffect(async () => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            const response = await fetch(`${host}/api/auth/getUser`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token':localStorage.getItem('token')
                },
              });
              const json= await response.json(); 
              setstate(json.user);
            //   console.log(json);
        }
        else{
            history.push("/login");
        }
    }, [])

    return (
        <div>
            <div className="my-4" style={{textAlign:"center"}}>
                <img src={"http://localhost:5000/public/images/"+state.profile} alt="image" style={{align:"center",width:"200px", borderRadius:"100%"}}/>

            </div>

            <div className="row my-2">
                <div className="col md-6">
                    <table className="table" style={{padding:"8px"}}>
                        <tr><td style={{padding:"8px"}}><strong>Name</strong></td><td>{state.name}</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>Email</strong></td><td>{state.email}</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>CGPA</strong></td><td>{state.cg}</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>Class 12th %:</strong></td><td>{state.twelfth}</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>Class 10th %:</strong></td><td>{state.tenth}</td></tr>
                    </table>
                </div>
                <div className="col md-6">
                    <table className="table">
                        <tr><td style={{padding:"8px"}}><strong>Gender:</strong></td><td>Male</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>Current Session</strong></td><td>Placement 2022</td></tr>
                        <tr><td style={{padding:"8px"}}><strong>Current Backlogs</strong></td><td>0</td></tr>
                    </table>
                </div>
            </div>

            
        </div>
    )
}

// Home.propTypes = {

// }
// Home.defaultProps={

// }

export default Home
