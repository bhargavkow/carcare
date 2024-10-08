import React, { useState } from "react";
import axios from "axios";
import './signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/register/", {
        username,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data)); // Store user data in localStorage
        alert("Signup Successfully");
        setMessage("User registered successfully!");
      })
      .catch((error) => {
        setMessage("Error in registration");
      });
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-btn">Signup</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
