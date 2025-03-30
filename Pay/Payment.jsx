import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Last name required";
    if (!formData.address) newErrors.address = "Address required";
    if (!formData.city) newErrors.city = "City required";
    if (!formData.state) newErrors.state = "State required";
    if (!formData.zip.match(/^\d{5}$/)) newErrors.zip = "Invalid ZIP code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      navigate("/main"); 
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

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
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "error" : ""}
          />
          {errors.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? "error" : ""}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <select
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className={errors.state ? "error" : ""}
          >
             <option value = ''>AL</option>
                        <option value = ''>AK</option>
                        <option value = ''>AZ</option>
                        <option value = ''>AR</option>
                        <option value = ''>CA</option>
                        <option value = ''>CO</option>
                        <option value = ''>CT</option>
                        <option value = ''>DE</option>
                        <option value = ''>FL</option>
                        <option value = ''>GA</option>
                        <option value = ''>HI</option>
                        <option value = ''>ID</option>
                        <option value = ''>IL</option>
                        <option value = ''>IN</option>
                        <option value = ''>IA</option>
                        <option value = ''>KS</option>
                        <option value = ''>KY</option>
                        <option value = ''>LA</option>
                        <option value = ''>ME</option>
                        <option value = ''>MD</option>
                        <option value = ''>MA</option>
                        <option value = ''>MI</option>
                        <option value = ''>MN</option>
                        <option value = ''>MS</option>
                        <option value = ''>MO</option>
                        <option value = ''>MT</option>
                        <option value = ''>NE</option>
                        <option value = ''>NV</option>
                        <option value = ''>NH</option>
                        <option value = ''>NJ</option>
                        <option value = ''>NM</option>
                        <option value = ''>NY</option>
                        <option value = ''>NC</option>
                        <option value = ''>ND</option>
                        <option value = ''>OH</option>
                        <option value = ''>OK</option>
                        <option value = ''>OR</option>
                        <option value = ''>PA</option>
                        <option value = ''>RI</option>
                        <option value = ''>SC</option>
                        <option value = ''>SD</option>
                        <option value = ''>TN</option>
                        <option value = ''>TX</option>
                        <option value = ''>UT</option>
                        <option value = ''>VT</option>
                        <option value = ''>VA</option>
                        <option value = ''>WA</option>
                        <option value = ''>WV</option>
                        <option value = ''>WI</option>
                        <option value = ''>WY</option>
          </select>
          {errors.state && (
            <span className="error-message">{errors.state}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            className={errors.zip ? "error" : ""}
            maxLength="5"
          />
          {errors.zip && <span className="error-message">{errors.zip}</span>}
        </div>

        <div className="form-group">
          <label>Card Details</label>
          <div className="mock-card-input">
            <p>[Mock card input - no Stripe needed]</p>
          </div>
        </div>

        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

export default Payment;