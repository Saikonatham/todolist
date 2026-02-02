import { useState } from "react"

function Addtodo(){
    const [todolist,setToDoList] = useState("")
    const addBtn = ()=>{
        let date = new Date()
        let user = localStorage.getItem("user_details")
        const fetchdata = async()=>{
             
            let res = await fetch("https://todolist-7895.onrender.com/todolist",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    todolist,
                    created_At : date.toLocaleTimeString(),
                    is_completed:false,
                    user_id : JSON.parse(user).id
                    

                })
            })
            alert("Todolist Successfully added")

        }
        fetchdata()
    }
    return(
        <div>
            <input className=""
                type="text"
                placeholder="Enter ToDoList"
                onChange={(event)=>setToDoList(event.target.value)}
          />
          <button className="addbtn"  type="button" onClick={addBtn}>Add</button>
        </div>
    )
}
export default Addtodo;