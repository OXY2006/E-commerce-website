import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/home/Hero";
import PromoSection from "../components/home/PromoSection";

function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Hero />
        <PromoSection />
      </div>
    </div>
  );
}

export default HomePage;