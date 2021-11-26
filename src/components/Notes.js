import React,{useContext, useEffect,useRef,useState} from 'react'
// import PropTypes from 'prop-types'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import Applicant from "./Applicant"
import { useHistory } from "react-router-dom";
const host="http://localhost:5000";
export const Notes = () => {
    const {notes,applNotes,getApplNotes,apply,addNote,deleteNote,editNote,getAllNotes}=useContext(noteContext);
    const [note,setNote]=useState({id:"",etitle:"",edescription:"",ec_id:"",ectc:"",edeadline:"",elocation:"",erole:"",ecg:0,etenth:0,etwelfth:0,ebranch:"",appliedUsers:[]});
    let history=useHistory();
   
    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            getAllNotes();
        }
        else{
            history.push("/login");
        }
    }, [])

    const ref=useRef("");
    const refClose=useRef("");

    const [modal,setModal]=useState("");

    const[appls,setAppls]=useState([]);
    const ViewApplicants = async (curr_note)=>{
        setModal("applicants")
        const response = await fetch(`${host}/api/notes/fetchusers/${curr_note._id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
        const users= await response.json();
        // console.log(users);
        setAppls(users);
        // console.log(appls)
        ref.current.click();
        refClose.current.click();
        //console.log(applUsers);
    }
    const ViewCompany = async (curr_note)=>{
        setModal(curr_note)
        
        // console.log(appls)
        ref.current.click();
        refClose.current.click();
        //console.log(applUsers);
    }

    const Apply = async (curr_note)=>{
        apply(curr_note._id);
        alert("Application successful!");
        window.location.reload(false);
    }
        

    const updateNote = (curr_note)=>{
        setModal("edit");
        ref.current.click();
        refClose.current.click();
        setNote({id:curr_note._id,etitle:curr_note.title,edescription:curr_note.description,ec_id:curr_note.c_id,ectc:curr_note.ctc,edeadline:curr_note.deadline,elocation:curr_note.location,erole:curr_note.role,ecg:curr_note.cg,etenth:curr_note.tenth,etwelfth:curr_note.twelfth,ebranch:curr_note.branch,appliedUser:[]});
        //applied users have been nulled->send mail!
    }
    const handleOnChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    const handleClick = (e)=>{
        editNote(note.id,note.etitle,note.edescription,note.ec_id,note.ectc,note.edeadline,note.elocation,note.erole,note.ecg,note.etenth,note.etwelfth,note.ebranch);
        refClose.current.click();
    }
    return (
        <>
        <h1 className="my-4 mx-3 text-center">Companies on Campus:</h1>
         {/* EDIT COMPNAY MODAL  */}
         <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl">
            Launch demo modal
            </button>

            <div className="modal fade bd-example-modal-xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">{modal==="edit"?"Edit Company":modal==="applicants"?"Applicants":modal.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form className="my-3">
                    {modal==="edit"?<div className="mb-3">
                    <label htmlFor="etitle" className="form-label"><h3>Name</h3></label>
                    <textarea className="form-control" id="etitle" value={note.etitle} name="etitle" rows="2" onChange={handleOnChange} placeholder="Enter Text" minLength={5} required></textarea>

                    <label htmlFor="edescription" className="form-label">Description</label>
                    <textarea className="form-control" value={note.edescription} id="edescription" name="edescription" rows="4" onChange={handleOnChange} placeholder="Enter Text" minLength={5} required></textarea>

                    <label htmlFor="ec_id" className="form-label">Compnay Id</label>
                    <input  className="form-control" id="ec_id" onChange={handleOnChange} name="ec_id" value={note.ec_id} />

                    <label htmlFor="ectc" className="form-label">CTC</label>
                    <input  className="form-control" id="ectc" onChange={handleOnChange} name="ectc" value={note.ectc} />

                    <label htmlFor="erole" className="form-label">Role</label>
                    <input className="form-control" id="erole" onChange={handleOnChange} name="erole" value={note.erole} />

                    <label htmlFor="elocation" className="form-label">Location</label>
                    <input  className="form-control" id="elocation" onChange={handleOnChange} name="elocation" value={note.elocation} />

                    <label htmlFor="ecg" className="form-label">Cgpa</label>
                    <input  className="form-control" id="ecg" onChange={handleOnChange} name="ecg" value={note.ecg} />

                    <label htmlFor="etenth" className="form-label">Class tenth percentage</label>
                    <input type="etenth" className="form-control" id="etenth" onChange={handleOnChange} name="etenth" value={note.etenth} />

                    <label htmlFor="etwelfth" className="form-label">Class 12th percentage</label>
                    <input type="etwelfth" className="form-control" id="etwelfth" onChange={handleOnChange} name="etwelfth" value={note.etwelfth}  />

                    <label htmlFor="ebranch" className="form-label">Branch</label>
                    <input type="ebranch" className="form-control" id="ebranch" onChange={handleOnChange} name="ebranch" value={note.ebranch} />
                
                    <label htmlFor="edeadline" className="form-label">Deadline</label>
                    <input type="date" className="form-control" id="edeadline" onChange={handleOnChange} name="edeadline" value={note.edeadline} />
                    </div>: modal==="applicants"?
                    <div className="mb-3">
                    <table className="table" style={{border:"1px solid black"}}>
                    <thead>
                        <tr style={{textAlign:"center", border:"1px solid black"}}>
                        <th scope="col" style={{textAlign:"center", border:"1px solid black"}}>Name</th>
                        <th scope="col" style={{textAlign:"center", border:"1px solid black"}}>Email</th>
                        <th scope="col" style={{textAlign:"center", border:"1px solid black"}}>CGPA</th>
                        <th scope="col" style={{textAlign:"center", border:"1px solid black"}}>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        appls.map((user)=>{
                         if(user!==null){
                        const name=user.name;
                         const email=user.email;
                         const cg=user.cg;
                         const tenth=user.tenth;
                         const twelfth=user.twelfth;
                         const branch=user.branch;
                         console.log(name,email,branch);
                         return <Applicant name={name} email={email} cg={cg} tenth={tenth} twelfth={twelfth} branch={branch}/>}   
                    })}
                    </tbody>
                    </table>
                    </div>:
                    <div className="mb-3">
                        <h5>Job Description:</h5>
                        <p>{modal.description}</p> 
                        <h6 style={{display:"inline"}}>CTC: </h6> {modal.ctc} <br/>
                        <h6 style={{display:"inline"}}>Location: </h6> {modal.location} <br/>
                        <h6 style={{display:"inline"}}>Role: </h6> {modal.role} <br/>
                    </div>
                    }
                </form>
                </div>
                <div className="modal-footer">
                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {modal==="edit"?<button disabled={note.etitle.length<1 || note.edescription.length<5 ? true:false} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>:<p></p>}
                </div>
                </div>
            </div>
            </div>



        <div className="row my-3">
            {/* <h1 className="my-3">Companies currently on Campus:</h1> */}
            <div className="container mx-2">
            {notes.length===0 && "No Companies on Campus right now"}
            </div>
            {  
                notes.slice(0).reverse().map((note)=>{
                return <><NoteItem key={note._id} note={note} updateNote={updateNote} ViewApplicants={ViewApplicants} ViewCompany={ViewCompany} Apply={Apply}/></>
            })}
            </div>
        </>
    )
}


