import Header from "./components/Header" { useState } from "react"

export default function App() {

const [auth, setAuth] = useState(false)
const [pass, setPass] = useState("")
const [error, setError] = useState("")

const login = async () => {

const res = await fetch("/.netlify/functions/auth", {

method: "POST",

body: JSON.stringify({

pass

})

})

if (res.status === 200) {

setAuth(true)

} else {

setError("wrong password")

}

}

if (!auth) {

return (

<div style={{ padding: 40 }}>

<h2>owner access</h2>

<input
type="password"
placeholder="passkey"
onChange={(e)=>setPass(e.target.value)}
/>

<button onClick={login}>
login
</button>

<p>{error}</p>

</div>

)

}

return (

<div style={{ padding: 40 }}>

<h1>1clikfix owner dashboard</h1>

<a href="/calendar">

calendar

</a>

<br/>

<a href="/">

customer site

</a>

</div>

)

}
import Booking from "./pages/Booking"
import BookingDashboard from "./pages/BookingDashboard"
<Route path="/booking" element={<Booking/>}/>
<Route path="/booking-dashboard" element={<BookingDashboard/>}/>
import Calendar from "./pages/Calendar"
import Pay from "./pages/Pay"
import AdminRoute from "./components/AdminRoute"
<Route path="/pay" element={<Pay/>}/>

<Route path="/calendar"
element={
<AdminRoute>
<Calendar/>
</AdminRoute>
}
/>
