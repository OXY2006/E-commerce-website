import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>PICKSY</h3>
          <p>Your daily grocery marketplace.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Cart</p>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <p>Vegetables</p>
          <p>Dairy</p>
          <p>Snacks</p>
          <p>Bakery</p>
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
    </div>
  );
}

export default Footer;