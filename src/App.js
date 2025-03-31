import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import TableReservation from './Reserve Table/TableReservation.jsx';
import Menu from './Menu/Menu.jsx';
import ConfirmReservation from './Confirm/ConfirmReservation.jsx';
import Payment from './Pay/Payment.jsx';
import HomePage from './Homepage/Homepage.jsx'; 
import Account from './Account/Account.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reserve" element={<TableReservation />} />
          <Route path="/confirm" element={<ConfirmReservation />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;