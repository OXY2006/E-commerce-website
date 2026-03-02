import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./components/product/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;