import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, title, price }) {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">Image Placeholder</div>
        <h4>{title}</h4>
        <p>₹ {price}</p>
        <button>View Details</button>
      </div>
    </Link>
  );
}

export default ProductCard;