import { Navigate } from "react-router-dom"

export default function AdminRoute({children}){

const pass=prompt("enter passkey")

if(pass===import.meta.env.VITE_OWNER_PASSKEY){

return children

}

return <Navigate to="/"/>

}
