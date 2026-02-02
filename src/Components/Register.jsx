import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";   // 👈 Add this

function Register() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlaform = (event) => {
        event.preventDefault();

        const new_user = { username, email, password };

        let fetchdata = async () => {
            try {
                let response = await fetch(`https://todolist-7895.onrender.com/users?email=${email}`);
                let jsonres = await response.json();

                if (jsonres.length === 0) {
                    let res = await fetch("https://todolist-7895.onrender.com/users", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(new_user)
                    });

                    if (res.status === 201) {
                        alert("Registration Successful, please login");
                        navigate("/login");
                        setUsername("");
                        setEmail("");
                        setPassword("");
                    }
                } else {
                    alert("User already exists, please login");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchdata();
    };

    return (
        <div className="register-page">
            <form className="register-box" onSubmit={handlaform}>
                <h2 className="register-title">Create Account</h2>

                <label>Username</label>
                <input
                    value={username}
                    type="text"
                    placeholder="Enter username"
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label>Email</label>
                <input
                    value={email}
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label>Password</label>
                <input
                    value={password}
                    type="password"
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
