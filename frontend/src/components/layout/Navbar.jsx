import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">PICKSY</div>

      <input className="search" placeholder="Search products..." />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;