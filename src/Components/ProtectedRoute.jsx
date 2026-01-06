import { Navigate } from "react-router-dom"

function ProtectedRoute({children}){
    let user_detail = JSON.parse(localStorage.getItem("user_details"))
    if(user_detail == null){
        return <Navigate to="/login"/>

    }else{
        return children


    }
}
export default ProtectedRoute