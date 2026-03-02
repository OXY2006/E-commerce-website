import { Link } from "react-router-dom";
import { FaCarrot, FaAppleAlt, FaFish, FaIceCream, FaBreadSlice } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>All Categories</h3>

      <Link to="/category/vegetables" className="sidebar-item">
        <FaCarrot /> Vegetables
      </Link>

      <Link to="/category/fruits" className="sidebar-item">
        <FaAppleAlt /> Fruits
      </Link>

      <Link to="/category/snacks" className="sidebar-item">
        <FaIceCream /> Snacks
      </Link>

      <Link to="/category/fish-meat" className="sidebar-item">
        <FaFish /> Fish & Meat
      </Link>

      <Link to="/category/bakery" className="sidebar-item">
        <FaBreadSlice /> Bakery
      </Link>
    </div>
  );
}

export default Sidebar;