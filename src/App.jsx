import Register from "./Components/Register";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Completed from "./Components/completed";
import { Route, Routes } from "react-router-dom";
import Pending from "./Components/pending";
import ProtectedRoute from "./Components/ProtectedRoute";

function App(){
  return(
   <Routes>
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path="/completed" element={<ProtectedRoute><Completed/></ProtectedRoute>}/>
    <Route path="/pending" element={<ProtectedRoute><Pending/></ProtectedRoute>}/>

   </Routes>
  )
}
export default App;