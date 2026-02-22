import { useEffect,useState } from "react"
import { db } from "../firebase"
import { collection,getDocs } from "firebase/firestore"

export default function BookingDashboard(){

const [bookings,setBookings] = useState([])

useEffect(()=>{

const load = async()=>{

const snap = await getDocs(collection(db,"bookings"))

setBookings(
snap.docs.map(doc=>({

id:doc.id,
...doc.data()

}))
)

}

load()

},[])

return(

<div>

<h2>all bookings</h2>

{bookings.map(b=>(

<div key={b.id}>

<p>{b.email}</p>

<p>{b.service}</p>

<p>{b.date}</p>

<p>{b.time}</p>

<hr/>

</div>

))}

</div>

)

}
