import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirm.css";

const ConfirmReservation = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    
    const reservationData = state?.reservationData || {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        dateTime: new Date().toISOString(),
        numPeople: 2,
        typeTable: "2-person"
    };

    const formatDateTime = (isoString) => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(isoString).toLocaleDateString('en-US', options);
    };

    const handleEdit = () => {
        navigate("/reserve", { state: { reservationData } });
    };

    const handleNewReservation = () => {
        navigate("/reserve");
    };

    const handleConfirmAndPay = () => {
        navigate("/pay", { 
            state: { 
                reservationData,
                amount: calculateTotal(reservationData.numPeople) 
            } 
        });
    };

    const calculateTotal = (people) => {
        return people * 10; 
    };

    return (
        <div className="confirmation-container">
            <h2>Confirm Reservation</h2>
            <div className="confirmation-card">
                <h3>Your Reservation Details</h3>
                
                <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className = "details">{reservationData.firstName} {reservationData.lastName}</span>
                </div>
                
                <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className = "details">{reservationData.emailAddress}</span>
                </div>
                
                <div className="detail-row">
                    <span className="detail-label">When:</span>
                    <span className = "details">{formatDateTime(reservationData.dateTime)}</span>
                </div>
                
                <div className="detail-row">
                    <span className="detail-label">Party Size:</span>
                    <span className = "details">{reservationData.numPeople} people</span>
                </div>
                
                <div className="detail-row">
                    <span className="detail-label">Table Type:</span>
                    <span className = "details">{reservationData.typeTable.replace("-", " ")}</span>
                </div>

                <div className="detail-row total-row">
                    <span className="detail-label">Total:</span>
                    <span className="total-amount">${calculateTotal(reservationData.numPeople)}.00</span>
                </div>

                <div className="button-group">
                    <button onClick={handleEdit} className="edit-button">
                        Edit Reservation
                    </button>
                    <button onClick={handleNewReservation} className="new-button">
                        New Reservation
                    </button>
                    <button onClick={handleConfirmAndPay} className="pay-button">
                        Confirm & Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmReservation;