import React,{useState,useRef,useEffect} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEventModal from "./AddEventModal";
import { useHistory } from "react-router-dom";
import axios from "axios" ;
import moment from "moment";
const host="http://localhost:5000";

export const Calendar=(props)=>{
    //document.getElementsByClassName("fc-today-button")[0].innerHTML="Today"

    let history=useHistory();
    const [admin, setadmin] = useState(false);
    useEffect(async () => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            const response = await fetch(`${host}/api/auth/getUser`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token':localStorage.getItem('token')
                },
              });
              const json= await response.json(); 
              if(json.user.user_id==="admin"){
                  setadmin(true);
              }
        }
        else{
            history.push("/login");
        }
    }, [])

    const [modalOpen,setModalOpen] = useState(false);
    const[events,setEvents]=useState([]);
    const calendarRef = useRef(null );
    const onEventAdded = event =>{

        let CalendarApi = calendarRef.current.getApi();
        CalendarApi.addEvent({
            start : moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
        });


    };
    async function handleEventAdd(data){
       await axios.post('http://localhost:5000/api/calendar/create-event',data.event); //saving to data base
    }
    async function handleDateSet(data){
        const response = await axios.get("http://localhost:5000/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        setEvents(response.data);
    }
    return (
        <section className="my-2">
        
        <div style ={{position: "relative", zIndex:0}}>
        {admin?<button className="btn btn-secondary" onClick={() => setModalOpen(true)}>Add Event</button>:<p></p>} 
        <FullCalendar
        ref ={calendarRef}
        events={events}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventAdd={event => handleEventAdd(event)}
        datesSet ={(date) => handleDateSet(date)}
        />
        </div>
       
        <AddEventModal 
        isOpen={modalOpen} 
        onClose ={() => setModalOpen(false)}
        onEventAdded ={(event) => onEventAdded(event)} 
            
        />
        </section>
    )
}
