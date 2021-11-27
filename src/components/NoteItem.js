import React,{useContext,useState,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import Applicant from "./Applicant"
const host="http://localhost:5000";
const NoteItem = (props) => {
    const [admin, setadmin] = useState(false);
    const [apply, setapply] = useState("apply")
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
              const id=json.user._id
              if(json.user.user_id==="admin"){
                  setadmin(true);
              }
              //console.log(id);
              for(let i=0;i<props.note.appliedUsers.length;i++){
                  //console.log(props.note.appliedUsers[i]._id);
                    if(props.note.appliedUsers[i]===id){
                        console.log("hi");
                        setapply("Applied");
                    }
              }

              if(json.user.cg<props.note.cg || json.user.tenth<props.note.tenth || json.user.twelfth<props.note.twelfth || json.user.branch!==props.note.branch){
                  setapply("Not Eligible");
              }
        }
    }, [])
    const {deleteNote,applUsers,fetchUsers}=useContext(noteContext);
    let dt = new Date();
    let d = new Date(props.note.deadline);
    if(dt>d){
        if(apply==="apply"){
            setapply("Deadline Passed")
        }
    }

    const [hover, sethover] = useState(false)
    const toggleHover=()=> {
        sethover(!hover);
    }
    var linkStyle;
    if (hover) {
        linkStyle = {textDecoration:"underline",cursor: 'pointer'}
    } else {
        linkStyle = {color: '#000'}
    }

    const [hover2, sethover2] = useState(false)
    const toggleHover2=()=> {
        sethover2(!hover2);
    }
    var linkStyle2;
    if (hover2) {
        linkStyle2 = {textDecoration:"underline",cursor: 'pointer'}
    } else {
        linkStyle2 = {color: '#000'}
    }
    return ( 
            <>
                <div className="my-3">
                <span className="badge bg-success" style={{width:"60px",marginLeft:"25px"}}>New</span>
                {dt>d ? <span className="badge bg-danger" style={{width:"160px",marginLeft:"25px"}}>Deadline passed</span>: parseInt((d - dt) / (1000 * 60 * 60 * 24), 10)<=2 ? <span className="badge bg-warning" style={{width:"160px",marginLeft:"25px"}}>Deadline approaching</span>:<></>}
                <div className="card my-2 mx-4" style={{width:"90%",backgroundColor:"white"}}>
                <div className="card-body"> 
                <h4 className="card-title" style={{display:"inline"}}><a type="button" style={linkStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={()=>{props.ViewCompany(props.note)}}>{props.note.title}</a></h4>

                <p style={{marginBottom:"0px"}} className="my-2"><strong>Profile : </strong>{props.note.role } </p>
                <p style={{marginBottom:"0px"}} className="my-2"><strong>Deadline : </strong>{dt>d  ? "Ended":props.note.deadline.substring(0,10) } </p>

                <div className="my-2">
                {admin?<></>:apply==="apply"?
                    <button type="button" className="btn btn-primary" onClick={()=>{props.Apply(props.note)}} style={{marginLeftt:"50px"}}>{apply}</button>
                :<button className="btn btn-primary disabled" style={{marginBottom:"0px"}}>{apply}</button>}
                
                {admin?<><i className="fas fa-users mx-2" onClick={()=>{props.ViewApplicants(props.note)}}></i>
                <i className="fas fa-edit" onClick={()=>{props.updateNote(props.note)}}></i></>:<></>}
                </div>

                </div>
                </div>

              {/* <tr>
                <td style={{textAlign:"center",border:"0.5px solid",borderColor:"#66BFBF"}}><a type="button" style={linkStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={()=>{props.ViewCompany(props.note)}}>{props.note.title}</a></td>
                <td style={{textAlign:"center",border:"0.5px solid",borderColor:"#66BFBF"}}>{dt>d  ? "Deadline Passed":props.note.deadline.substring(0,10) } </td>
                <td style={{textAlign:"center",border:"0.5px solid",borderColor:"#66BFBF"}}>{admin?<></>:apply==="apply"?
                    <a type="button" style={linkStyle2} onMouseEnter={toggleHover2} onMouseLeave={toggleHover2} onClick={()=>{props.Apply(props.note)}}>{apply}</a>
                :<p style={{marginBottom:"0px",textDecoration:"underline"}}>{apply}</p>}
                {admin?<><i className="fas fa-users mx-2" onClick={()=>{props.ViewApplicants(props.note)}}></i>
                <i className="fas fa-edit" onClick={()=>{props.updateNote(props.note)}}></i></>:<></>}
                </td>
            </tr> */}

                    {/* 
                <div className="my-2">
                    <button type="button" className="btn btn-primary mx-2" onClick={()=>{props.ViewApplicants(props.note)}}>View Applicants</button>
                    <button type="button" className="btn btn-primary " onClick={()=>{props.updateNote(props.note)}}>Edit</button>
                </div> */}

                

                </div>   
          </>
          
    )
}

export default NoteItem
