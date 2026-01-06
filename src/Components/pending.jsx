import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./home.css";   // using the same CSS file

function Pending() {
    const [complete, setComplete] = useState([]);
    let login_details = JSON.parse(localStorage.getItem("user_details"));

    useEffect(() => {
        const fetched = async () => {
            try {
                let res = await fetch(
                    `http://localhost:3001/todolist/?is_completed=${false}&user_id=${login_details.id}`
                );
                let comjson = await res.json();
                setComplete(comjson);
            } catch (error) {
                console.log(error);
            }
        };
        fetched();
    }, []);

    return (
        <div className="pending-page">
            <Navbar /><br /><br />

            <div className="pending-container">
                {complete.length === 0 ? (
                    <h1 className="empty-text">No pending todos</h1>
                ) : (
                    complete.map((item) => (
                        <div className="pending-item" key={item.id}>
                            <h1 className="pending-text">{item.todolist}</h1>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Pending;
