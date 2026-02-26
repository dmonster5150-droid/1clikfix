import { ispai duser } from "../lib/paymentlock"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const navigate = useNavigate()

useEffect(() => {
  if (!ispai duser()) {
    navigate("/providers")
  }
}, [])
