import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LogInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(
      (user) => 
        user.username === formData.username && 
        user.password === formData.password
    );

    if (matchedUser) {
      navigate("/Main"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-form">
      <img src="lemon.png" alt="Little Lemon Logo" />
      <h2>Little Lemon</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Log In</button>
      </form>

      <h3>Don't have an account? Sign up here.</h3>
    </div>
  );
};

export default LogInForm;