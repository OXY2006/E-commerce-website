import ProductCard from "./ProductCard";
import products from "./products";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-container">
      <h2>All Products</h2>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;