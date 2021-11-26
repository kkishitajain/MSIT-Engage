import React,{useContext, useEffect,useRef,useState} from 'react'
// import PropTypes from 'prop-types'
import noteContext from '../context/notes/noteContext'
import AppliedNote from "./AppliedNote"

import { useHistory } from "react-router-dom";

export const AppliedComps = () => {
    const {notes,applNotes,applUsers,getApplNotes,fetchUsers,apply,addNote,deleteNote,editNote,getAllNotes}=useContext(noteContext);

    let history=useHistory();
    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            getApplNotes();
        }
        else{
            history.push("/login");
        }
    }, [])

    

    return (
        <>
         

        <div className="row my-3">
            <h1 className="text-center my-3">Companies you have applied to:</h1>
                    
            {applNotes.map((note)=>{
                return <AppliedNote key={note._id} note={note} />
            })}
            </div>
        </>
    )
}





