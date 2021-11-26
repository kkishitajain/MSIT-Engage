import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import AddNote from "./AddNote"


export const AddComp = () => {
    let history=useHistory();
    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            //getApplNotes();
        }
        else{
            history.push("/login");
        }
    }, [])
    return (
        <div>
            <AddNote/>
        </div>
    )
}


