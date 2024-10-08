import React, { useState } from "react";
import axios from "axios";
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/login/", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data)); // Store user data in localStorage
        alert("Login Successfully");
        console.log("Login successful!");
        // Optionally, you can redirect or perform other actions here
      })
      .catch((error) => {
        setMessage("Invalid credentials or error during login");
        console.error("Login error:", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
