import ProductCard from "../components/home/ProductCard";
import "./ProductsPage.css";

function ProductsPage() {
  const products = [
    { id: 1, title: "Product 1", price: 120 },
    { id: 2, title: "Product 2", price: 250 },
    { id: 3, title: "Product 3", price: 340 },
    { id: 4, title: "Product 4", price: 500 },
  ];

  return (
    <div className="products-container">
      <h2>All Products</h2>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;