import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopVerse</h2>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="nav-right">
        <button>Admin</button>
        <button>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;