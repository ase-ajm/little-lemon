import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 8) newErrors.password = "Password too short";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don’t match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/Main"); 
  };

  return (
    <div className="signup-form">
      <img src="lemon.png" alt="Little Lemon Logo" />
      <h2>Little Lemon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <h3>Already have an account? Log in here.</h3>
    </div>
  );
};

export default SignUpForm;