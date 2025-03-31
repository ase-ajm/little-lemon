import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import "./Reserve.css";
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

const TableReservation = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        dateTime: "",
        numPeople: 1, 
        typeTable: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;
        
        if (name === "numPeople") {
            value = Math.max(1, Math.min(8, parseInt(value) || 1));
        }
        
        setFormData({
            ...formData,
            [name]: value,
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
        if (!formData.emailAddress.includes("@")) newErrors.emailAddress = "Invalid email";
        if (!formData.dateTime) newErrors.dateTime = "Date/time required";
        if (!formData.typeTable) newErrors.typeTable = "Table type required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        setTimeout(() => {
            console.log("Reservation submitted:", formData);
            setIsSubmitting(false);
            navigate("/confirm", { state: { reservationData: formData } });
        }, 2000);
    };

    return (
        <div className = "reservation">
            <div className="reservation-container">

                <h2>Reserve a Table</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? "error" : ""}
                        />
                        {errors.firstName && (
                            <span className="error-message">{errors.firstName}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? "error" : ""}
                        />
                        {errors.lastName && (
                            <span className="error-message">{errors.lastName}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="emailAddress"
                            placeholder="Email Address"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            className={errors.emailAddress ? "error" : ""}
                        />
                        {errors.emailAddress && (
                            <span className="error-message">{errors.emailAddress}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="datetime-local"
                            name="dateTime"
                            placeholder="Date and Time"
                            value={formData.dateTime}
                            onChange={handleChange}
                            className={errors.dateTime ? "error" : ""}
                            min={new Date().toISOString().slice(0, 16)}
                        />
                        {errors.dateTime && (
                            <span className="error-message">{errors.dateTime}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            name="numPeople"
                            placeholder="Number of People"
                            min="1"
                            max="8"
                            value={formData.numPeople}
                            onChange={handleChange}
                            className={errors.numPeople ? "error" : ""}
                        />
                        {errors.numPeople && (
                            <span className="error-message">{errors.numPeople}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Table Type</label>
                        <select
                            name="typeTable"
                            value={formData.typeTable}
                            onChange={handleChange}
                            className={errors.typeTable ? "error" : ""}
                        >
                            <option value="">Select table size</option>
                            <option value="2-person">2-person table</option>
                            <option value="4-person">4-person table</option>
                            <option value="8-person">8-person table</option>
                        </select>
                        {errors.typeTable && (
                            <span className="error-message">{errors.typeTable}</span>
                        )}
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Request Reservation"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TableReservation;