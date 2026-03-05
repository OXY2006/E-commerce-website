import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductCard.css";

function ProductCard({ id, title, price }) {

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevents link click
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <div className="product-card">

      <Link to={`/product/${id}`} className="product-card-link">
        <div className="product-image">Image</div>
        <h4>{title}</h4>
        <p>₹{price}</p>
      </Link>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;