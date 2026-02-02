import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./home.css";   // same CSS file used for Home styling

function Completed() {
    const [complete, setComplete] = useState([]);
    let login_details = JSON.parse(localStorage.getItem("user_details"));

    useEffect(() => {
        const fetched = async () => {
            try {
                let res = await fetch(
                    `https://todolist-7895.onrender.com/todolist/?is_completed=${true}&user_id=${login_details.id}`
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
        <div className="completed-page">
            <Navbar /><br /><br />

            <div className="completed-container">
                {complete.length === 0 ? (
                    <h1 className="empty-text">No completed todos</h1>
                ) : (
                    complete.map((item) => (
                        <div className="completed-item" key={item.id}>
                            <h1 className="completed-text">{item.todolist}</h1>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Completed;
