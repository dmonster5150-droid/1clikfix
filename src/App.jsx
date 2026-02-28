import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"

import Booking from "./pages/Booking"
import BookingDashboard from "./pages/BookingDashboard"
import Calendar from "./pages/Calendar"
import Pay from "./pages/Pay"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-dashboard" element={<BookingDashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  )
}
