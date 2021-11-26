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
        <div style={{textAlign:"center"}}>
            <div className="my-4" style={{textAlign:"center"}}>
                <img src={"http://localhost:5000/public/images/"+state.profile} alt="image" style={{align:"center",width:"200px"}}/>

            </div>
            <h3 style={{textAlign:"center"}}>{state.name}</h3> <br/>
            <strong>Email id: </strong>{state.email} <br/>
            <strong>Class 10th %: </strong>{state.tenth} <br/>
            <strong>Class 12th %: </strong>{state.twelfth} <br/>
            <strong>Branch: </strong>{state.branch} <br/>
            <strong>CGPA: </strong>{state.cg}
        </div>
    )
}

// Home.propTypes = {

// }
// Home.defaultProps={

// }

export default Home
