import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Poster from "../components/Poster";
import LeftPromo from "../components/LeftPromo";
import RightPromo from "../components/RightPromo";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="layout">
      <Navbar />

      <div className="main">
        <Sidebar />

        <div className="content">
          <div className="poster">
            <Poster />
          </div>

          <div className="promos">
            <LeftPromo />
            <RightPromo />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;