import { Link } from "react-router-dom";
import "./PromoSection.css";
import promoFish from "../../assets/promo-fish-meat.png";
import promoFruits from "../../assets/promo-fruits.png";

function PromoSection() {
  return (
    <div className="promo-container">

      {}
      <div className="promo-card">
        <img src={promoFish} alt="Fresh Fish & Meat" />

        <div className="promo-overlay">
          <Link to="/category/fish-meat" className="promo-btn">
            Shop Now
          </Link>
        </div>
      </div>

      {}
      <div className="promo-card">
        <img src={promoFruits} alt="Fresh Fruits & Juices" />

        <div className="promo-overlay">
          <Link to="/category/fruits" className="promo-btn orange">
            Shop Now
          </Link>
        </div>
      </div>

    </div>
  );
}

export default PromoSection;