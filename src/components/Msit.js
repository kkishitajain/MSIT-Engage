import React,{useState} from 'react'

const Msit = () => {
    const data = require('./msit.json');
    let news=[]
    Object.entries(data).forEach(([key, value]) => {
        news.push([key,value]);
    })
    // console.log(data);
    return (

        <div>
            {/* {data} */}
            <h3 className="text-center my-4">MSIT Latest News and Notices</h3>
            <ul>
            {  
                news.map((note)=>{
                return <><li><a target="_blank" href={note[1]}>{note[0]}</a></li></>
            })}
            </ul>
        </div>
    )
}

export default Msit
