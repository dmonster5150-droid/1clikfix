import { useState } from "react"
import { db, auth } from "../firebase"

await addDoc(collection(db,"bookings"),{

uid:user.uid,
email:user.email,
service,
date,
time,
notes,

status:"pending",

paid:false,

created:serverTimestamp()

})
export default function Booking() {

const [date,setDate] = useState("")
const [time,setTime] = useState("")
const [service,setService] = useState("")
const [notes,setNotes] = useState("")
const [status,setStatus] = useState("")

const submitBooking = async () => {

const user = auth.currentUser

if(!user){
setStatus("login required")
return
}

await addDoc(collection(db,"bookings"),{

uid:user.uid,
email:user.email,
service,
date,
time,
notes,
created:serverTimestamp(),
status:"pending"

})

setStatus("booking submitted")

}

return(

<div>

<h2>book service</h2>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<input
type="time"
onChange={(e)=>setTime(e.target.value)}
/>

<select
onChange={(e)=>setService(e.target.value)}
>

<option>phone repair</option>
<option>computer repair</option>
<option>diagnostic</option>

</select>

<textarea
placeholder="notes"
onChange={(e)=>setNotes(e.target.value)}
/>

<button onClick={submitBooking}>
confirm booking
</button>

<p>{status}</p>

</div>

)

}
