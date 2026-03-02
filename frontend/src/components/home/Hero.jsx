import "./Hero.css";
import heroImage from "../../assets/hero-banner.png";

function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="Fresh Groceries Banner" />
    </div>
  );
}

export default Hero;