import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";   // 👈 add this

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlelogin = (event) => {
        event.preventDefault();

        let fetchdata = async () => {
            try {
                let response = await fetch(`http://localhost:3001/users?email=${email}`);
                let jsondata = await response.json();

                if (jsondata.length === 0) {
                    alert("Invalid Credentials");
                } else {
                    if (jsondata[0].password === password) {
                        localStorage.setItem("user_details", JSON.stringify(jsondata[0]));
                        navigate("/");
                        alert("Login Successful");
                        setEmail("");
                        setPassword("");
                    } else {
                        alert("Invalid Credentials");
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchdata();
    };

    return (
        <div className="login-page">
            <form className="login-box" onSubmit={handlelogin}>
                <h2 className="login-title">Login</h2>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter Email.."
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit" className="login-btn">Login</button>

                <p className="signup-text">
                    Don't have an account? <Link to="/register">Create account</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
