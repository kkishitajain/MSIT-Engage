import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
export const Resources = () => {
    let history=useHistory();
    useEffect(async () => {
        if(localStorage.getItem('token')){
        }
        else{
            history.push("/login");
        }
    }, [])
    return (
        <div className="container mb-3">
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Geeks For Geeks</h1><br/>
                <ul>
                    <li><h4>Interview Experiences:</h4></li>
                    <ul>
                        <li><a href="#">Microsoft</a></li>
                        <li><a href="#">Google</a></li>
                        <li><a href="#">RedHat</a></li>
                        <li><a href="#">VMWare</a></li>
                        <li><a href="#">Goldman Sachs</a></li>
                    </ul>
                    <br/>
                    <li><h4>Past Year Archives:</h4></li>
                    <ul>
                        <li><a href="#">Microsoft</a></li>
                        <li><a href="#">Google</a></li>
                        <li><a href="#">RedHat</a></li>
                        <li><a href="#">VMWare</a></li>
                        <li><a href="#">Goldman Sachs</a></li>
                    </ul>
                    <br/>
                    <li><h4>TopicWise DSA Questions:</h4></li>
                    <ul>
                        <li><a href="#">Trees</a></li>
                        <li><a href="#">Heap</a></li>
                        <li><a href="#">Binary Search</a></li>
                        <li><a href="#">BST</a></li>
                        <li><a href="#">Graphs</a></li>
                    </ul>
                    <br/>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="#">DSA Self Paced Course</a></li>
                        <li><a href="#">CSE Core Subjects</a></li>
                        <li><a href="#">OOPS</a></li>
                        <li><a href="#">Web Devlopment</a></li>
                        <li><a href="#">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Udemy</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="#">DSA Self Paced Course</a></li>
                        <li><a href="#">CSE Core Subjects</a></li>
                        <li><a href="#">OOPS</a></li>
                        <li><a href="#">Web Devlopment</a></li>
                        <li><a href="#">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Coursera</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="#">DSA Self Paced Course</a></li>
                        <li><a href="#">CSE Core Subjects</a></li>
                        <li><a href="#">OOPS</a></li>
                        <li><a href="#">Web Devlopment</a></li>
                        <li><a href="#">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>MIT OCW</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="#">DSA Self Paced Course</a></li>
                        <li><a href="#">CSE Core Subjects</a></li>
                        <li><a href="#">OOPS</a></li>
                        <li><a href="#">Web Devlopment</a></li>
                        <li><a href="#">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Important Github Repos</h1><br/>
                <ul>
                    
                        <li><a href="#">DSA Self Paced Course</a></li>
                        <li><a href="#">CSE Core Subjects</a></li>
                        <li><a href="#">OOPS</a></li>
                        <li><a href="#">Web Devlopment</a></li>
                        <li><a href="#">Android Development in Kotlin</a></li>
                </ul>
            </div>
        </div>
    )
}

