import noteContext from "./noteContext"
import React,{useState} from "react"

const NoteState=(props)=>{

    const host="http://localhost:5000";

    const [notes, setNotes] = useState([]);

    const [applNotes, setapplNotes] = useState([]);

    const [applUsers, setapplUsers] = useState([]);

    //getALL NOTES:
    const getAllNotes=async()=>{
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const json= await response.json(); 
        //   console.log(json);

        //adding in front end
        setNotes(json);
    }

    //get only applied to companies
    const getApplNotes=async()=>{
      //api call
      const response = await fetch(`${host}/api/notes/fetchapplied`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
        });
        const json= await response.json(); 
      //   console.log(json);

      //adding in front end
      setapplNotes(json);
  }



    //fetch all applicants
  //   const fetchUsers=async (id)=>{
      //api call
  //     const response = await fetch(`${host}/api/notes/fetchusers/${id}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //       });
  //     const users= await response.json();
      //console.log(users) 
      
  //     return users
      // setapplUsers(users);
      // console.log(applUsers) 
      // console.log("fecthed all users registred to:"+id);
  // }

    //apply to a company
    const apply=async (id)=>{
      //api call
      const response = await fetch(`${host}/api/notes/apply/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
        });
      //   const json= await response.json(); 
      getApplNotes();
      // res.send(response);
      // console.log("applied to:"+id);
  }

    //add a note:
    const addNote=async(title, description,c_id,ctc,deadline,location,role,cg,tenth,twelfth,branch)=>{
        //api call
        let data={
            "title":title,
            "description":description,
            "c_id":c_id,
            "ctc":ctc,
            "deadline":deadline,
            "location":location,
            "role":role,
            "cg":cg,
            "tenth":tenth,
            "twelfth":twelfth,
            "branch":branch,
            "appliedUsers":[]
        }
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify(data) 
          });
          const json= await response.json(); 

        //adding in front end
        setNotes(notes.concat(json));
        getAllNotes();
    }


    //delete a note:
    const deleteNote=async (id)=>{
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
          });
        //   const json= await response.json(); 
        //deleting in frontend:
        let newNotes=notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);

        let newNotess=applNotes.filter((note)=>{return note._id!==id});
        setapplNotes(newNotess);

        console.log("deleted note with id"+id);
        getAllNotes();
    }


    //edit a note
    const editNote=async (id,title, description,c_id,ctc,deadline,location,role,cg,tenth,twelfth,branch)=>{
        //api call
        let data={
          "title":title,
          "description":description,
          "c_id":c_id,
          "ctc":ctc,
          "deadline":deadline,
          "location":location,
          "role":role,
          "cg":cg,
          "tenth":tenth,
          "twelfth":twelfth,
          "branch":branch,
          appliedUsers:[]
      }
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          });
          const json= await response.json(); 
        //editing in frontend
        for (let index = 0; index < notes.length; index++) {
            if(notes[index]._id===id){
                notes[index].title=title;
                notes[index].description=description;
                break;
            }
        }
        setNotes(notes);
        setapplUsers([]);
        let newNotess=applNotes.filter((note)=>{return note._id!==id});
        setapplNotes(newNotess);
        getAllNotes();
    }
    return(
        <noteContext.Provider value={{notes,applNotes,applUsers,getApplNotes,apply,addNote,deleteNote,editNote,getAllNotes}}>
            {props.children}
        </noteContext.Provider>
    );
}

export default NoteState;