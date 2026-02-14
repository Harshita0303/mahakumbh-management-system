import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/slots">Slot Booking</Link>
    <Link to="/predictions">Crowd Prediction</Link>
    <Link to="/routes">Route Planner</Link>
    <Link to="/admin">Admin</Link>
     <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
);

export default Navbar;

