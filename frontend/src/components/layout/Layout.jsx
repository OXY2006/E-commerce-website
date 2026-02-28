import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />

      <div className="content-wrapper">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;