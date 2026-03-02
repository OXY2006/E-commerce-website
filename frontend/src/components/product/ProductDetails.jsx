import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="details-image">Image Placeholder</div>

      <div className="details-info">
        <h2>{product.title}</h2>
        <p className="details-price">₹ {product.price}</p>
        <p>{product.description}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;