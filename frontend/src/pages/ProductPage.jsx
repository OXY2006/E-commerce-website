import { useParams } from "react-router-dom";
import products from "../components/product/products";
import ProductDetails from "../components/product/ProductDetails";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product Not Found</h2>;
  }

  return <ProductDetails product={product} />;
}

export default ProductPage;