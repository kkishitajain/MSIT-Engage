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
                        <li><a href="https://www.geeksforgeeks.org/tag/microsoft/">Microsoft</a></li>
                        <li><a href="https://www.geeksforgeeks.org/tag/google/">Google</a></li>
                        <li><a href="https://www.geeksforgeeks.org/tag/samsung/">Samsung</a></li>
                        <li><a href="https://www.geeksforgeeks.org/tag/vmware/">VMWare</a></li>
                        <li><a href="https://www.geeksforgeeks.org/tag/goldman-sachs/">Goldman Sachs</a></li>
                    </ul>
                    <br/>
                    <li><h4>Past Year Archives:</h4></li>
                    <ul>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Microsoft</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Google</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">RedHat</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">VMWare</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Goldman Sachs</a></li>
                    </ul>
                    <br/>
                    <li><h4>TopicWise DSA Questions:</h4></li>
                    <ul>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Trees</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Heap</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Binary Search</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">BST</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/explore/?page=1">Graphs</a></li>
                    </ul>
                    <br/>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="https://practice.geeksforgeeks.org/courses/online">DSA Self Paced Course</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/courses/online">CSE Core Subjects</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/courses/online">OOPS</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/courses/online">Web Devlopment</a></li>
                        <li><a href="https://practice.geeksforgeeks.org/courses/online">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Udemy</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="https://www.udemy.com/">DSA Self Paced Course</a></li>
                        <li><a href="https://www.udemy.com/">CSE Core Subjects</a></li>
                        <li><a href="https://www.udemy.com/">OOPS</a></li>
                        <li><a href="https://www.udemy.com/">Web Devlopment</a></li>
                        <li><a href="https://www.udemy.com/">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>Coursera</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="https://www.coursera.org/in">DSA Self Paced Course</a></li>
                        <li><a href="https://www.coursera.org/in">CSE Core Subjects</a></li>
                        <li><a href="https://www.coursera.org/in">OOPS</a></li>
                        <li><a href="https://www.coursera.org/in">Web Devlopment</a></li>
                        <li><a href="https://www.coursera.org/in">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
            <div className="container my-4">
                <h1 style={{textDecoration:"underline", textAlign:"center"}}>MIT OCW</h1><br/>
                <ul>
                    <li><h4>Courses:</h4></li>
                    <ul>
                        <li><a href="https://ocw.mit.edu/index.htm">DSA Self Paced Course</a></li>
                        <li><a href="https://ocw.mit.edu/index.htm">CSE Core Subjects</a></li>
                        <li><a href="https://ocw.mit.edu/index.htm">OOPS</a></li>
                        <li><a href="https://ocw.mit.edu/index.htm">Web Devlopment</a></li>
                        <li><a href="https://ocw.mit.edu/index.htm">Android Development in Kotlin</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

