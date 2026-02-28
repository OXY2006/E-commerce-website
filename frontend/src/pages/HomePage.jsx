import "./HomePage.css";
import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/home/Hero";
import PromoSection from "../components/home/PromoSection";

function HomePage() {
  return (
    <div className="home-container">
      <Sidebar />

      <div className="home-content">
        <Hero />
        <PromoSection />
      </div>
    </div>
  );
}

export default HomePage;