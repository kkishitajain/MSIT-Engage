import React,{useEffect,useState} from 'react'
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,Link,useLocation
  } from "react-router-dom";
  const host="http://localhost:5000";
const Navbar = props => {
    let location = useLocation();
    useEffect(() => {
        //console.log(location.pathname);
    }, [location]);

    const [admin, setadmin] = useState(false);
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
              if(json.user!==null && json.user.user_id==="admin"){
                  setadmin(true);
              }
              else{
                  setadmin(false);
              }
        }
    }, [])

    let history=useHistory();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        history.push("/login");
    }


    return (
        
        <>
        <nav style={{textAlign:"center"}} className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#66BFBF"}}>
            <div className="container-fluid" style={{textAlign:"center"}}>
                <a className="navbar-brand" href="/" style={{textAlign:"center"}}>MSIT Engage</a>
            </div>
        </nav>


        {localStorage.getItem('token')?
            <div className="sidebar">
                    <a className={location.pathname==="/CompaniesOC"?"active":""}><Link to="/CompaniesOC">Job Openings</Link></a>
                    {!admin ?
                    <a className={location.pathname==="/"?"active":""}><Link aria-current="page" to="/">Profile</Link></a>
                    :<></>}
                    
                    {admin?
                    <a className={location.pathname==="/AddComp"?"active":""}><Link to="/AddComp">Add Company</Link></a>
                    :<></>}
                    {admin?<a className={location.pathname==="/signup"?"active":""}><Link to="/signup">Add Candidate</Link></a>:<></>}
                    {!admin?
                    <a className={location.pathname==="/AppliedComps"?"active":""}><Link  to="/AppliedComps">Applications</Link></a>
                    :<></>}
                    <a className={location.pathname==="/OffCampus"?"active":""}><Link  to="/OffCampus">Off-Campus</Link></a>
                    <a className={location.pathname==="/Msit"?"active":""}><Link  to="/Msit">MSIT Updates</Link></a>
                    <a className={location.pathname==="/Cal"?"active":""}><Link  to="/Cal">Calender</Link></a>
                    <a className={location.pathname==="/Resources"?"active":""}><Link  to="/Resources">Resources</Link></a>
                    
                    {localStorage.getItem('token') ? 
                    <a className={location.pathname==="/login"?"active":""}><Link onClick={handleLogout} to="/login">Logout</Link></a>:<a className={location.pathname==="/login"?"active":""}><Link to="/login">Login</Link></a>}
                    
        </div>:<></>}
        </>
    )
}

// Navbar.propTypes = {

// }
// Navbar.defaultProps = {

// }

export default Navbar
