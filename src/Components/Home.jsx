// Home.jsx
import { useEffect, useState } from "react";
import Addtodo from "./addtodo";
import Navbar from "./navbar";
import "./home.css";                 // 👈 add this

function Home() {
  const [addtodo, setAddtodo] = useState([]);

  useEffect(() => {
    let login_user = JSON.parse(localStorage.getItem("user_details"));
    const fetchdata = async () => {
      try {
        let res = await fetch(
          `http://localhost:3001/todolist/?user_id=${login_user.id}`
        );
        let jsondata = await res.json();
        setAddtodo(jsondata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [addtodo]);

  const delbtn = (id) => {
    const fetching = async () => {
      let res = await fetch(`http://localhost:3001/todolist/${id}`, {
        method: "DELETE",
      });
      console.log("Deleted successfully");
    };
    fetching();
  };

  const updatebtn = (id) => {
    const upfetch = async () => {
      let res = await fetch(`http://localhost:3001/todolist/${id}`);
      let singlejson = await res.json();
      singlejson.is_completed = !singlejson.is_completed;
      await fetch(`http://localhost:3001/todolist/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singlejson),
      });
    };
    upfetch();
  };

  return (
    <div className="home-page">      {/* 👈 add class */}
      <Navbar />
      <div className="home-content">
        <Addtodo />
        {addtodo.length === 0 ? (
          <h1 className="empty-text">No Todos Found</h1>
        ) : (
          <div className="todos-container">
            {addtodo.map((item) => (
              <div className="block" key={item.id}>
                <h1
                  className="todo-text"
                  style={{
                    textDecoration: item.is_completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {item.todolist}
                </h1>
                <div className="todo-actions">
                  <button
                    className="btn delete-btn"
                    onClick={() => delbtn(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn status-btn"
                    onClick={() => updatebtn(item.id)}
                  >
                    {item.is_completed ? "Completed" : "Mark as Complete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
