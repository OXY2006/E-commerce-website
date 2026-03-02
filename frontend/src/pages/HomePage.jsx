import "./HomePage.css";
import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/home/Hero";
import PromoSection from "../components/home/PromoSection";

function HomePage() {
  return (
    <div className="homepage-full">
      <div className="homepage-container">
        <Sidebar />

        <div className="homepage-main">
          <div className="main-card">
            <Hero />
            <PromoSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;