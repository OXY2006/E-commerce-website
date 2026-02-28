import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h4>All Categories</h4>
      <ul>
        <li><Link to="/category/vegetables">Vegetables</Link></li>
        <li><Link to="/category/organic">Organic</Link></li>
        <li><Link to="/category/snacks">Snacks</Link></li>
        <li><Link to="/category/fish-meat">Fish & Meat</Link></li>
        <li><Link to="/category/dairy">Dairy</Link></li>
        <li><Link to="/category/bakery">Bakery</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;