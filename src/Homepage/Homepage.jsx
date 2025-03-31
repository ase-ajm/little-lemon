import { useNavigate } from 'react-router-dom';
import AutoSlider from '../AutoSlider/AutoSlider.jsx';
import Recent from '../Recent/Recent.jsx';

function HomePage() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/menu');
  };

  const handleReservation = () => {
    navigate('/reserve');
  };

  return (
    <>
      <h2>Little Lemon</h2>
      <div className="button-group">
        <button 
          className="action-button" 
          onClick={handleOrder}
        >
          Start Order
        </button>
        <button 
          className="action-button" 
          onClick={handleReservation}
        >
          Request Reservation
        </button>
      </div>
      <AutoSlider />
      <Recent />
    </>
  );
}

export default HomePage;