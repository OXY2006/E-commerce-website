import "./ProductCard.css";

function ProductCard({ title, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        Image Placeholder
      </div>

      <h4>{title}</h4>
      <p>₹ {price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;