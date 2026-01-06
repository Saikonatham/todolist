import { Link, useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate()
    return(
        <nav >
            <Link  to="/">Home</Link> 
            <Link  to="/completed">CompletedTasks</Link>
            <Link  to="/pending">PendingTasks</Link>
            <button onClick={()=>{
                localStorage.removeItem("user_details")
                navigate("/login")

            }}>
                logout
                </button>
        </nav>

    )
}
export default Navbar