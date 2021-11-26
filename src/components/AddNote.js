import React,{useState,useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import axios from "axios"
const AddNote = () => {
    const {addNote}=useContext(noteContext);
    const [note, setNote] = useState({title:"",description:"",c_id:"",ctc:"",deadline:"",location:"",role:"",cg:0,tenth:0,twelfth:0,branch:"",appliedUsers:[]})

    const handleClick = async (e)=>{
        e.preventDefault(); //to prevent page reload upon submitting
        addNote(note.title,note.description,note.c_id,note.ctc,note.deadline,note.location,note.role,note.cg,note.tenth,note.twelfth,note.branch);
        setNote({title:"",description:"",c_id:"",ctc:"",deadline:"",location:"",role:"",cg:0,tenth:0,twelfth:0,branch:""});

        try {
            await axios.post("http://localhost:5000/api/mail",{
                to:"jainetiksha@gmail.com",
                subject:`Company ${note.title} is on campus!`,
                text:`Company ${note.title} is on campus. Go to the website to check if you are eligible and apply. Also refer to the resources section to prepare! Cheers.`
            });
        } catch (error) {
            console.log(error);
        }
    }
    const handleOnChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

    return (
        <div>
            <div className="container">
            <h1>Add a Company:</h1>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    <textarea className="form-control" id="title" name="title" rows="1" value={note.title}  onChange={handleOnChange}  ></textarea>

                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description"  value={note.description} rows="4" onChange={handleOnChange} placeholder="Enter Text" minLength={5} required></textarea>

                    <label htmlFor="c_id" className="form-label">Compnay Id</label>
                    <input type="c_id" className="form-control" id="c_id" onChange={handleOnChange} name="c_id" value={note.c_id} />

                    <label htmlFor="ctc" className="form-label">CTC</label>
                    <input type="ctc" className="form-control" id="ctc" onChange={handleOnChange} name="ctc" value={note.ctc} />

                    <label htmlFor="role" className="form-label">Role</label>
                    <input type="role" className="form-control" id="role" onChange={handleOnChange} name="role" value={note.role} />

                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="location" className="form-control" id="location" onChange={handleOnChange} name="location" value={note.location} />

                    <label htmlFor="cg" className="form-label">Cgpa</label>
                    <input type="cg" className="form-control" id="cg" onChange={handleOnChange} name="cg" value={note.cg} />

                    <label htmlFor="tenth" className="form-label">Class tenth percentage</label>
                    <input type="tenth" className="form-control" id="tenth" onChange={handleOnChange} name="tenth" value={note.tenth} />

                    <label htmlFor="twelfth" className="form-label">Class 12th percentage</label>
                    <input type="twelfth" className="form-control" id="twelfth" onChange={handleOnChange} name="twelfth" value={note.twelfth}  />

                    <label htmlFor="branch" className="form-label">Branch</label>
                    <input type="branch" className="form-control" id="branch" onChange={handleOnChange} name="branch" value={note.branch} />
                
                    <label htmlFor="deadline" className="form-label">Deadline</label>
                    <input type="date" className="form-control" id="deadline" onChange={handleOnChange} name="deadline" value={note.deadline} />
                </div>
                <div className="my-2">
                <button disabled={note.title.length<1 || note.description.length<5  ? true:false} type="submit" className="btn btn-primary" onClick={handleClick}>AddNote</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default AddNote
