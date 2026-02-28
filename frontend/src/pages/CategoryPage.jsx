import { useParams } from "react-router-dom";
import ProductCard from "../components/home/ProductCard";

function CategoryPage() {
  const { name } = useParams();

  const dummyProducts = [
    { id: 1, title: `${name} Item 1`, price: 120 },
    { id: 2, title: `${name} Item 2`, price: 220 },
    { id: 3, title: `${name} Item 3`, price: 320 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>{name.toUpperCase()} Category</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "20px" }}>
        {dummyProducts.map((item) => (
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

export default CategoryPage;