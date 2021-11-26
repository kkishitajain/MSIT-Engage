import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios" ;
const host="http://localhost:5000";

const Signup = () => {
    let history=useHistory();
    const [creds, setCreds] = useState({user_id:"",name:"",email:"",password:"",cg:0,tenth:0,twelfth:0,branch:"",appliedTo:[],profilePic:""});

    const imageUpload=(e)=>{
        setCreds({...creds,profilePic:e.target.files[0]});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let url=`${host}/api/auth/createuser`
        const formdata=new FormData();
        formdata.append('myFile',creds.profilePic,creds.profilePic.name);
        formdata.append('name',creds.name);
        formdata.append('email',creds.email);
        formdata.append('password',creds.password);
        formdata.append('cg',creds.cg);
        formdata.append('tenth',creds.tenth);
        formdata.append('twelfth',creds.twelfth);
        formdata.append('branch',creds.branch);
        formdata.append('appliedTo',creds.appliedTo);

        const response = await axios.post(url,formdata);
        //console.log(response);
        // const json= response.json(); 
        //    console.log(json)
        if(response.status===200){
            // localStorage.setItem('token',json.token);
            //redirecting to login:
            window.location.reload();
            //history.push("/login");

        }
        else{
            alert("This email id is already registered")
        }
    }

    const handleOnChange = (e)=>{
        setCreds({...creds,[e.target.name]:e.target.value});
    }

    return (
        <div className="container">
        <h1 className="my-3">Create New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user_id" className="form-label">User_id</label>
                    <input type="user_id" className="form-control" id="user_id" onChange={handleOnChange} name="user_id" value={creds.user_id}  />

                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control" onChange={imageUpload} name="myFile"  />


                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" onChange={handleOnChange} name="name" value={creds.name} aria-describedby="emailHelp" minLength={5} required/>

                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={handleOnChange} name="email" value={creds.email} aria-describedby="emailHelp"/>

                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={handleOnChange} name="password" value={creds.password} id="password" minLength={5} required/>

                    <label htmlFor="cg" className="form-label">Cgpa</label>
                    <input type="cg" className="form-control" id="cg" onChange={handleOnChange} name="cg" value={creds.cg} />

                    <label htmlFor="tenth" className="form-label">Class tenth percentage</label>
                    <input type="tenth" className="form-control" id="tenth" onChange={handleOnChange} name="tenth" value={creds.tenth} />

                    <label htmlFor="twelfth" className="form-label">Class 12th percentage</label>
                    <input type="twelfth" className="form-control" id="twelfth" onChange={handleOnChange} name="twelfth" value={creds.twelfth}  />

                    <label htmlFor="branch" className="form-label">Branch</label>
                    <input type="branch" className="form-control" id="branch" onChange={handleOnChange} name="branch" value={creds.branch} />
                
                </div>
                <div className="my-3">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
