import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">PICKSY</h2>
          <p>Your daily grocery marketplace.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <Link to="/category/vegetables">Vegetables</Link>
          <Link to="/category/dairy">Dairy</Link>
          <Link to="/category/snacks">Snacks</Link>
          <Link to="/category/bakery">Bakery</Link>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@picksy.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 PICKSY. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;