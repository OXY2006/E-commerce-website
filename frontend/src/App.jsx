import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;