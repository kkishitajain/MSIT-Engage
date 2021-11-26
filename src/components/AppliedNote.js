import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
const AppliedNote = (props) => {

    const {deleteNote}=useContext(noteContext);
    
    return (
        

        <div className="card my-2 mx-4" style={{width:"90%",backgroundColor:"#66BFBF"}}>
                <div className="card-body">
                <h4 className="card-title">{props.note.title}</h4>

                <strong>Role: </strong>{props.note.role} <br/>
                <strong>Location: </strong>{props.note.location} <br/>
                <strong>CTC: </strong>{props.note.ctc}

                </div>
                </div>
              
            
    )
}

export default AppliedNote
